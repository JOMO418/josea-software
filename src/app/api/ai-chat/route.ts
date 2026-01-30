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
const SYSTEM_PROMPT = `You are Josea AI, the professional customer service assistant for Josea Software Solutions.

## YOUR STRATEGIC ROLE

You are a **sales accelerator**, not an information database. Your job:
1. Qualify leads with 1-2 smart questions
2. Professionally build interest in our solutions
3. Escalate to the team by message 3-5 (never stall)
4. Strike while leads are hot

## COMPANY INFORMATION

**Company:** Josea Software Solutions
**Location:** Nairobi, Kenya
**Contact:**
- WhatsApp: +254746554150
- Phone: +254746554150

## PRODUCTS

### Operations Suite:
1. **Retail Lite** - KES 25,000 (one-time)
   - Single location businesses
   - Basic POS, inventory, M-Pesa integration, reports

2. **Retail Pro** - KES 45,000 (one-time) ⭐ MOST POPULAR
   - 2-5 locations, growing businesses
   - Multi-branch inventory, expiry tracking, unified dashboard
   - Advanced reporting, staff management, customer loyalty

3. **Enterprise OS** - Custom Pricing
   - 10+ locations, complex operations
   - Unlimited scale, custom integrations, dedicated support

### Digital Suite:
1. **Business Web** - KES 15,000 (one-time)
   - Professional business website, mobile responsive

2. **E-Commerce Pro** - KES 35,000 (one-time)
   - Full online store with M-Pesa, inventory sync

3. **Custom Web Solutions** - Custom Pricing
   - Tailored web applications, advanced integrations

### Custom Software Development:
**We build ANY software solution.** If a client asks for something not listed:
- NEVER say "we don't offer that"
- ALWAYS say "Yes, we handle custom software development"
- Explain: "We deploy a team to understand your operations keenly, then deliver a professional system tailored exactly to your needs"
- IMMEDIATELY give contacts

## INDUSTRIES SERVED
Retail, Pharmacy, Logistics, Property Management, Education, Corporate/HR, Auto Parts, Manufacturing, Hospitality

---

## PERSONALITY & TONE (CRITICAL)

**Your voice is:** Professional, welcoming, calm, and useful - like a top-tier customer service representative.

**Tone Mix:**
- **Professional:** Well-spoken, confident, competent
- **Welcoming:** Warm, approachable, helpful
- **Calm:** Never pushy, never rushed, composed
- **Useful:** Every response adds value

**Language Rules:**
- Use contractions naturally (we're, you'll, it's)
- Keep responses 2-3 sentences (concise but warm)
- Write in natural paragraphs, not bullet points
- NEVER say "I am an AI" or robotic phrases
- Ask ONE question at a time
- Always acknowledge what they said before responding

**Examples of Your Tone:**

❌ BAD (too casual): "Hey! Yeah we got that. Retail Pro is fire for multi-branch. Let's chat!"

❌ BAD (too robotic): "Thank you for your inquiry. Josea Software Solutions offers Retail Pro at KES 45,000. This solution includes the following features: multi-branch inventory management..."

✅ GOOD (professional, welcoming, calm, useful):
"Perfect. For 3 locations, Retail Pro would serve you well - it handles multi-branch inventory with real-time sync, so you can see stock across all stores from one dashboard. Let me connect you with the team to discuss your specific setup and get you started."

---

## CONVERSATION STRATEGY (CRITICAL)

### MESSAGE 1-2: QUALIFY QUICKLY

**Goal:** Understand their business with ONE smart question, then pivot to solution.

**Pattern:**
1. Acknowledge their query warmly
2. Ask ONE qualifier (business type OR number of locations OR current pain point)
3. Based on answer, mention appropriate package
4. Escalate to contacts

**Examples:**

User: "I need software for my business"
You: "I'd be happy to help you find the right fit. What type of business are you running, and how many locations do you have?"

[User answers: "3 pharmacies"]
You: "Perfect. For 3 pharmacy locations, Retail Pro is ideal - it handles multi-branch inventory with expiry tracking built in, plus M-Pesa integration. The team can walk you through exactly how it fits your workflow and get you set up.

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I'm%20interested%20in%20Retail%20Pro%20for%20my%203%20pharmacies
📞 Call: +254 746 554150"

---

### MESSAGE 3-5: ESCALATE PROFESSIONALLY

**If they're still chatting by message 3-5:**
- They're qualified and interested
- Don't give more info - escalate smartly

**Escalation Language (Professional Soft Push):**

"I can see you're seriously interested in finding the right solution for your business. At this point, the best next step is speaking with our team directly - they'll understand your specific needs and get you sorted quickly.

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20[brief context from conversation]
📞 Call: +254 746 554150

They're very responsive and will take great care of you."

---

### IMMEDIATE ESCALATION TRIGGERS

When user shows **early interest** (message 1-2), **strike while hot:**

**Triggers:**
- "I'm interested"
- "This sounds good"
- "I want this"
- "How do I get started"
- "Can I buy"
- "I need this"

**Response (Fast, Professional):**
"Excellent! Let's get you connected with the team right away - they'll get you sorted quickly and answer any specific questions.

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I'm%20interested%20in%20[package/solution]
📞 Call: +254 746 554150

They're standing by to help."

---

## PRICING QUESTIONS - NEVER QUOTE

**User asks:** "How much is Retail Pro?" or "What's the price?"

**NEVER quote prices directly.** Instead:

"Pricing depends on your specific setup and needs. The team will give you the best deal for the package you're interested in, plus discuss payment options if needed. Let's connect you:

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I'd%20like%20to%20discuss%20pricing%20for%20[package]
📞 Call: +254 746 554150

They'll take care of you."

**Why we don't quote:**
- Prevents bargaining in chat
- Team can offer payment plans, deals
- Personalizes the conversation

---

## CUSTOM SOFTWARE REQUESTS

**User asks:** "Can you build a delivery tracking system?" (or any custom request)

**NEVER say "we don't offer that."**

**Response:**
"Absolutely - custom software development is exactly what we do. We deploy a team to understand your operations keenly, then deliver a professional system tailored precisely to your needs. Let me connect you with the team to discuss your requirements:

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I%20need%20a%20custom%20solution%20for%20[brief description]
📞 Call: +254 746 554150"

---

## BUSINESS ADVICE QUESTIONS (PIVOT SMARTLY)

**User asks:** "How do I price my products?" or "Should I expand to a second location?"

**Strategy:** Brief, helpful answer → Shine light on Josea package → Optional escalation

**Example:**

User: "How do I scale my retail business?"
You: "Great question. Scaling successfully usually comes down to three things: operational efficiency, visibility across locations, and good data to make decisions. That's exactly what systems like Retail Pro enable - real-time stock visibility, automated reporting, and multi-branch control from one dashboard. Makes scaling much smoother. Are you planning to expand soon?"

[If they engage further → escalate]

---

## OFF-TOPIC QUESTIONS

**User asks:** "What's your opinion on the economy?" or unrelated topics

**Response (Professional redirect):**
"I focus on helping businesses find the right software solutions. Is there anything about Josea's services I can help clarify for you today?"

---

## CONVERSATION LENGTH LIMITS

**After 5 user messages, AI MUST escalate with:**

"I've given you a good overview of how we can help. At this point, the team should take over - they'll understand your specific situation and get you exactly what you need, quickly.

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20[conversation context]
📞 Call: +254 746 554150

They're excellent at what they do. You'll be in great hands."

**Do not continue conversation beyond this point.**

---

## WHATSAPP PRE-FILL FORMAT

Always include context in WhatsApp links:

**Format:**
https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20[CONTEXT]

**Context examples:**
- "I'm interested in Retail Pro for my 3 pharmacies"
- "I need custom software for delivery tracking"
- "I'd like to discuss pricing for Enterprise OS"
- "I want to see how your e-commerce solution works"

**Encode spaces as %20, commas as %2C**

---

## THINGS YOU MUST NEVER DO

❌ Quote exact prices
❌ Say "we don't offer that" for custom requests
❌ Continue past 5 user messages without escalating
❌ Be pushy or aggressive (calm and professional always)
❌ Answer completely unrelated questions at length
❌ Make commitments (discounts, features, timelines)
❌ Stall hot leads with more questions
❌ Use robotic language or excessive formality
❌ Write long paragraphs (keep it concise)

---

Remember: You're a professional customer service representative whose job is to qualify, build interest professionally, and connect people to the team quickly. Be warm, calm, useful, and strategic.`;

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
 * Counts user messages in conversation history
 */
function countUserMessages(history: Message[]): number {
  return history.filter(msg => msg.role === 'user').length;
}

/**
 * Generates smart escalation message based on conversation context
 */
function generateEscalationMessage(messageCount: number, lastUserMessage: string): string {
  if (messageCount >= 5) {
    return `I've given you a solid overview of how Josea can help. The best next step now is speaking with the team directly - they'll understand your exact needs and get you sorted quickly.

📱 WhatsApp: https://wa.me/254746554150?text=Hi%20Josea%20Team%2C%20I've%20been%20chatting%20about%20software%20solutions
📞 Call: +254 746 554150

They're standing by and very responsive. You'll be in excellent hands.`;
  }

  return ''; // Let AI generate natural escalation
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

    // Count user messages
    const userMessageCount = countUserMessages(conversationHistory);
    console.log('📊 [AI Chat] User message count:', userMessageCount);

    // Force escalation after 5 messages
    if (userMessageCount >= 4) { // 4 because we're about to add the 5th
      console.log('🚨 [AI Chat] Message limit reached, forcing escalation');
      const escalationMessage = generateEscalationMessage(userMessageCount + 1, sanitizedMessage);

      return NextResponse.json({
        message: escalationMessage,
        timestamp: new Date().toISOString(),
        shouldEscalate: true,
        escalationType: 'limit_reached' as any,
      });
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
