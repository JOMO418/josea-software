import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Log API key status on module load (only shows in server logs)
const apiKey = process.env.GEMINI_API_KEY;
if (apiKey) {
  console.log('✅ GEMINI_API_KEY loaded, length:', apiKey.length);
} else {
  console.error('❌ GEMINI_API_KEY not found in environment variables');
}

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(apiKey || '');

// Type definitions
interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface ChatRequest {
  message: string;
  conversationHistory?: Message[];
}

interface ChatResponse {
  message: string;
  timestamp: string;
  shouldEscalate?: boolean;
  escalationType?: 'buy' | 'demo' | 'technical' | 'custom' | 'pricing' | 'negotiation';
}

// Escalation trigger patterns
const ESCALATION_TRIGGERS = {
  buy: [
    /\b(want to buy|purchase|get started|sign up|subscribe|order|buy now)\b/i,
    /\b(how (do|can) i (buy|purchase|get|order))\b/i,
    /\b(ready to (buy|purchase|start|order))\b/i,
    /\b(let'?s (get started|begin|proceed|do this))\b/i,
  ],
  demo: [
    /\b(see a demo|show me|demonstration|demo request|try it|test it)\b/i,
    /\b(can i (see|try|test|demo))\b/i,
    /\b(show me how it works)\b/i,
    /\b(live demo|product demo|schedule.*demo)\b/i,
  ],
  pricing: [
    /\b(exact price|specific price|quote|quotation|invoice)\b/i,
    /\b(what('?s| is) the (exact|total|final) (cost|price))\b/i,
    /\b(how much (exactly|precisely|specifically))\b/i,
    /\b(price for my (business|company|shop|store))\b/i,
    /\b(customized? (price|pricing|quote))\b/i,
  ],
  technical: [
    /\b(integrate with (sap|quickbooks|sage|xero|odoo|zoho))\b/i,
    /\b(api (integration|access|documentation))\b/i,
    /\b(connect to (my|our|existing) (system|software|erp|crm))\b/i,
    /\b(technical (requirements|specifications|specs))\b/i,
  ],
  custom: [
    /\b(build (us|me|for us))\b/i,
    /\b(custom (feature|development|solution|module))\b/i,
    /\b(we need (a |you to )?(add|build|create|develop))\b/i,
    /\b(can you (add|build|create|develop|make))\b/i,
    /\b(specific requirements?)\b/i,
  ],
  negotiation: [
    /\b(discount|negotiate|bargain|reduce.*price)\b/i,
    /\b(pay upfront|bulk.*discount|annual.*discount)\b/i,
    /\b(i have (kes|ksh|shillings?)?\s*\d+)\b/i,
    /\b(budget (is|of)\s*(kes|ksh)?\s*\d+)\b/i,
    /\b(need (this|it) by (next|this|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/i,
    /\b(urgent|asap|immediately|right away)\b/i,
  ],
};

// System prompt containing all personality, behavior, and boundary rules
const SYSTEM_PROMPT = `You are Josea AI, the friendly digital assistant for Josea Software Solutions, a software company based in Nairobi, Kenya.

## COMPANY INFORMATION

**Company:** Josea Software Solutions
**Location:** Nairobi, Kenya
**Contact:**
- WhatsApp: +254746554150
- Phone: +254746554150

## PRODUCTS

### Operations Suite:
1. **Retail Lite** - KES 25,000
   - Perfect for small shops and single-location businesses
   - Basic inventory management, POS, M-Pesa integration
   - Daily sales reports, receipt printing

2. **Retail Pro** - KES 45,000
   - For growing businesses with multiple needs
   - Multi-branch support, advanced inventory with expiry tracking
   - M-Pesa integration, unified reporting dashboard
   - Staff management, customer loyalty features

3. **Enterprise OS** - Custom Pricing
   - Full-scale enterprise solution
   - Unlimited branches, advanced analytics
   - Custom integrations, dedicated support
   - ERP-level functionality

### Digital Suite:
1. **Business Web** - KES 15,000
   - Professional business website
   - Mobile responsive, SEO optimized
   - Contact forms, social media integration

2. **E-Commerce Pro** - KES 35,000
   - Full online store with M-Pesa checkout
   - Product catalog, order management
   - Inventory sync, customer accounts

3. **Custom Web** - Custom Pricing
   - Tailored web applications
   - Complex functionality and integrations
   - Ongoing maintenance and support

## INDUSTRIES SERVED
- Retail (shops, supermarkets, boutiques)
- Pharmacy (with expiry tracking, controlled substances tracking)
- Logistics (fleet management, delivery tracking)
- Property Management (tenant management, rent collection)
- Education (school management systems)
- Corporate/HR (employee management, payroll)
- Auto Parts (inventory with part numbers, compatibility tracking)

## YOUR PERSONALITY & TONE

- Be warm, conversational, and professional - like a knowledgeable Kenyan colleague
- Use contractions naturally (we're, you'll, it's, that's)
- Keep responses brief but helpful - avoid walls of text
- Be Kenyan context-aware - mention M-Pesa, local business challenges naturally
- Ask clarifying questions to understand needs better
- Show empathy for pain points before jumping to solutions
- Write in natural paragraphs, not excessive bullet points
- NEVER say "I am an AI", "As a language model", or similar phrases
- NEVER use corporate jargon or overly formal language

## WHAT YOU CAN HELP WITH

1. Product information - features, differences between packages
2. General pricing context - "Operations starts at KES 25K"
3. Process/timeline questions - deployment, training, support approach
4. Technical capabilities - offline mode, M-Pesa integration, multi-branch
5. Industry-specific recommendations - which package fits which business type
6. Light business advice - BRIEFLY, then naturally pivot back to how Josea can help

## ESCALATION RULES - CRITICAL

When you detect ANY of these intents, STOP giving detailed answers and provide the escalation response:

**ESCALATION TRIGGERS:**
1. Buying intent - "I want to buy", "Let's get started", "How do I purchase"
2. Demo requests - "Can I see a demo", "Show me how it works"
3. Specific pricing requests - "What's the exact price for MY business"
4. Complex technical questions - "Can it integrate with SAP/QuickBooks"
5. Customization requests - "Can you build X for us", "We need Y feature"
6. Negotiation attempts - "Can you discount", "What if I pay upfront"
7. Timeline pressure - "I need this by next week"
8. Budget discussions - "I have KES X to spend"

**ESCALATION RESPONSE FORMAT:**
When any trigger is detected, respond warmly but redirect:

"This is exactly the kind of conversation you should have with our team directly! They can give you precise answers and discuss your specific needs.

**Talk to Us:**
WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I'm%20interested%20in%20learning%20more
Call: +254 746 554150

I'm here if you have other general questions in the meantime!"

## THINGS YOU MUST NEVER DO

- Make promises or commitments on behalf of the company
- Quote exact pricing for custom or enterprise needs
- Answer questions completely unrelated to Josea or business software (politics, general life advice, etc.)
- Provide technical support for existing customers (direct them to the team)
- Share information you don't have (make things up)
- Use excessive emojis or be unprofessional
- Write very long responses - keep it conversational

## EXAMPLE INTERACTIONS

**User:** "Does it work with M-Pesa?"
**You:** "Absolutely! M-Pesa integration is one of our most popular features. Payments sync automatically with your sales - no more manually matching receipts at the end of the day. This comes standard with Retail Pro and Enterprise OS. Are you running a single location or multiple branches?"

**User:** "I run 3 pharmacies"
**You:** "Nice! With 3 locations, Retail Pro would be a great fit. It handles multi-branch inventory with expiry tracking built in - super important for pharmacy. Plus you'd see everything from one dashboard: stock levels across stores, which items are moving fast, what's about to expire. What's your biggest headache right now - stock management or the reconciliation side of things?"

**User:** "I want to buy Retail Pro"
**You:** "Excellent choice! To get you set up properly, let's connect you with our team. They'll confirm it's the perfect fit for your setup and walk you through everything.

**Talk to Us:**
WhatsApp: https://wa.me/254746554150?text=Hi%2C%20I'm%20interested%20in%20Retail%20Pro
Call: +254 746 554150

I'm here if you have other questions while you wait!"

Remember: You're helpful and knowledgeable, but your job is to inform and qualify leads - not to close deals. Let the human team handle purchases, demos, and negotiations.`;

/**
 * Detects if a message contains escalation triggers
 */
function detectEscalation(message: string): { shouldEscalate: boolean; type?: keyof typeof ESCALATION_TRIGGERS } {
  for (const [type, patterns] of Object.entries(ESCALATION_TRIGGERS)) {
    for (const pattern of patterns) {
      if (pattern.test(message)) {
        return { shouldEscalate: true, type: type as keyof typeof ESCALATION_TRIGGERS };
      }
    }
  }
  return { shouldEscalate: false };
}

/**
 * Sanitizes user input to prevent prompt injection
 */
function sanitizeInput(input: string): string {
  // Remove any attempt to override system instructions
  const sanitized = input
    .replace(/ignore (all )?(previous|prior|above) (instructions|prompts)/gi, '')
    .replace(/system prompt/gi, '')
    .replace(/you are now/gi, '')
    .replace(/act as/gi, '')
    .trim();

  // Limit message length to prevent abuse
  return sanitized.slice(0, 2000);
}

/**
 * Validates the request body
 */
function validateRequest(body: unknown): body is ChatRequest {
  if (!body || typeof body !== 'object') return false;
  const req = body as Record<string, unknown>;
  if (!req.message || typeof req.message !== 'string') return false;
  if (req.message.trim().length === 0) return false;
  return true;
}

/**
 * Main POST handler for AI chat
 */
export async function POST(req: NextRequest): Promise<NextResponse<ChatResponse | { error: string }>> {
  console.log('🔵 [AI Chat] POST request received');

  try {
    // Check API key
    if (!process.env.GEMINI_API_KEY) {
      console.error('❌ [AI Chat] GEMINI_API_KEY is not configured');
      return NextResponse.json(
        { error: 'AI service is not configured. Please contact support.' },
        { status: 503 }
      );
    }

    // Parse and validate request
    let body: unknown;
    try {
      body = await req.json();
      console.log('📥 [AI Chat] Request body received:', JSON.stringify(body).slice(0, 200) + '...');
    } catch (parseError) {
      console.error('❌ [AI Chat] JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    if (!validateRequest(body)) {
      console.error('❌ [AI Chat] Validation failed for body:', body);
      return NextResponse.json(
        { error: 'Invalid request. Please provide a valid message.' },
        { status: 400 }
      );
    }

    const { message, conversationHistory = [] } = body;
    console.log('💬 [AI Chat] User message:', message);
    console.log('📜 [AI Chat] Conversation history length:', conversationHistory.length);

    // Sanitize user message
    const sanitizedMessage = sanitizeInput(message);
    if (sanitizedMessage.length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      );
    }

    // Check for escalation triggers
    const escalation = detectEscalation(sanitizedMessage);
    if (escalation.shouldEscalate) {
      console.log('🚨 [AI Chat] Escalation detected:', escalation.type);
    }

    // Prepare conversation history (keep last 10 messages for context)
    // Convert from UI format to Gemini format if needed
    const recentHistory = conversationHistory.slice(-10).map((msg: Message | { role: string; content: string }) => {
      // Handle both formats: {role, parts} and {role, content}
      if ('parts' in msg && Array.isArray(msg.parts)) {
        return msg; // Already in Gemini format
      }
      // Convert from {role, content} format
      const content = 'content' in msg ? (msg as { content: string }).content : '';
      return {
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: content }],
      };
    });

    console.log('🔧 [AI Chat] Formatted history:', JSON.stringify(recentHistory).slice(0, 200));

    // Build the conversation for Gemini
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        maxOutputTokens: 500, // Keep responses concise
        temperature: 0.7, // Balanced creativity/consistency
      },
    });

    // Create the chat with system context
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood! I\'m Josea AI, ready to help visitors learn about Josea Software Solutions. I\'ll be warm and conversational, answer general questions about our products and services, and smoothly hand off to the team when someone\'s ready to buy, needs a demo, or has specific requirements. Let\'s chat!' }],
        },
        ...recentHistory,
      ],
    });

    console.log('🚀 [AI Chat] Sending message to Gemini...');

    // Generate response with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout

    try {
      const result = await chat.sendMessage(sanitizedMessage);
      clearTimeout(timeoutId);

      const response = result.response;
      const text = response.text();

      console.log('✅ [AI Chat] Got response from Gemini, length:', text.length);
      console.log('📤 [AI Chat] Response preview:', text.slice(0, 100) + '...');

      return NextResponse.json({
        message: text,
        timestamp: new Date().toISOString(),
        shouldEscalate: escalation.shouldEscalate,
        escalationType: escalation.type,
      });
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  } catch (error) {
    console.error('❌ [AI Chat] Error:', error);

    // Handle specific error types
    if (error instanceof Error) {
      console.error('❌ [AI Chat] Error message:', error.message);
      console.error('❌ [AI Chat] Error name:', error.name);

      if (error.message.includes('RESOURCE_EXHAUSTED') || error.message.includes('429')) {
        return NextResponse.json(
          { error: 'We\'re experiencing high demand. Please try again in a moment.' },
          { status: 429 }
        );
      }
      if (error.message.includes('API_KEY') || error.message.includes('401') || error.message.includes('403')) {
        console.error('❌ [AI Chat] API key issue detected');
        return NextResponse.json(
          { error: 'AI service configuration error. Please contact support.' },
          { status: 503 }
        );
      }
      if (error.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Request timed out. Please try again.' },
          { status: 504 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly at +254 746 554150.' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight requests
 */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400', // 24 hours
    },
  });
}

// Note: For production, consider adding:
// 1. Rate limiting middleware (e.g., using upstash/ratelimit)
// 2. Request logging to a proper service (e.g., Axiom, LogTail)
// 3. Error tracking (e.g., Sentry)
// 4. Response caching for common questions
// 5. Analytics tracking for conversation insights
