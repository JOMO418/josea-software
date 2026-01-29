'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone } from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ConversationHistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface APIResponse {
  message: string;
  timestamp: string;
  shouldEscalate?: boolean;
  escalationType?: string;
  error?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const STORAGE_KEY = 'josea-ai-conversation';
const MAX_STORED_MESSAGES = 50;
const MAX_CONTEXT_MESSAGES = 10;

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'ai',
  content: "Hello! I'm Josea AI, your intelligent business solutions assistant. How may I help you discover the perfect software for your business today?",
  timestamp: new Date(),
};

// WhatsApp contact info
const WHATSAPP_NUMBER = '254746554150';
const PHONE_NUMBER = '+254 746 554150';

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/** Generate unique ID for messages */
const generateId = (): string => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

/** Format timestamp for display */
const formatTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60000) return 'Just now';

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

/** Parse message content to detect WhatsApp/Phone links for special rendering */
const parseMessageForLinks = (content: string): {
  hasWhatsApp: boolean;
  hasPhone: boolean;
  cleanContent: string;
  whatsAppUrl?: string;
} => {
  const whatsAppMatch = content.match(/https:\/\/wa\.me\/\d+[^\s)"]*/);
  const phoneMatch = content.match(/(?:Call|Phone):\s*(\+?\d[\d\s-]+)/i);

  let cleanContent = content;
  let whatsAppUrl = whatsAppMatch?.[0];

  if (whatsAppMatch) {
    cleanContent = cleanContent.replace(/\*?\*?WhatsApp:?\*?\*?\s*https:\/\/wa\.me\/[^\s)"\n]*/gi, '');
  }
  if (phoneMatch) {
    cleanContent = cleanContent.replace(/\*?\*?(?:Call|Phone):?\*?\*?\s*\+?\d[\d\s-]+/gi, '');
  }

  cleanContent = cleanContent.replace(/\*?\*?Talk to Us:?\*?\*?\s*/gi, '');
  cleanContent = cleanContent.replace(/\n{3,}/g, '\n\n').trim();

  return {
    hasWhatsApp: !!whatsAppMatch,
    hasPhone: !!phoneMatch,
    cleanContent,
    whatsAppUrl,
  };
};

/** Load messages from localStorage */
const loadStoredMessages = (): Message[] => {
  if (typeof window === 'undefined') return [INITIAL_MESSAGE];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [INITIAL_MESSAGE];

    const parsed = JSON.parse(stored) as Array<{
      id: string;
      role: 'user' | 'ai';
      content: string;
      timestamp: string;
    }>;

    const messages = parsed.map(msg => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));

    if (messages.length === 0 || messages[0].id !== 'welcome') {
      return [INITIAL_MESSAGE, ...messages];
    }

    return messages;
  } catch {
    return [INITIAL_MESSAGE];
  }
};

/** Save messages to localStorage */
const saveMessages = (messages: Message[]): void => {
  if (typeof window === 'undefined') return;

  try {
    const toStore = messages.slice(-MAX_STORED_MESSAGES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  } catch {
    console.warn('Failed to save messages to localStorage');
  }
};

// =============================================================================
// CUSTOM HOOKS
// =============================================================================

/** Hook to manage textarea auto-resize */
const useAutoResize = (value: string, maxRows: number = 4) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';

    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 24;
    const maxHeight = lineHeight * maxRows;

    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
  }, [value, maxRows]);

  return textareaRef;
};

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

/** Sophisticated typing indicator with elegant dots */
const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-violet-500"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 1, 0.4],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.15,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

/** WhatsApp icon component */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/** Sophisticated AI Logo - Matches Navbar J design */
const JoseaAILogo = ({ size = 'md', pulse = false }: { size?: 'sm' | 'md' | 'lg'; pulse?: boolean }) => {
  const sizeClasses = {
    sm: 'w-9 h-9 text-lg',
    md: 'w-11 h-11 text-xl',
    lg: 'w-12 h-12 text-xl', // Professional size (48px) - matches WhatsApp
  };

  return (
    <div className="relative group">
      {/* Subtle glow ring - Professional feel */}
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400"
          animate={{
            scale: [1, 1.15, 1.15],
            opacity: [0.15, 0, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Main emblem container */}
      <motion.div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        animate={pulse ? {
          scale: [1, 1.02, 1],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Multi-layer gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 p-[2px] shadow-lg shadow-purple-500/30">
          <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white via-purple-50/50 to-white opacity-90" />
          <div className="relative w-full h-full rounded-[10px] bg-gradient-to-br from-white via-slate-50 to-white" />
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* The "J" Monogram */}
        <span
          className="relative z-10 font-black bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-700 bg-clip-text text-transparent select-none"
          style={{
            fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif",
          }}
        >
          J
        </span>

        {/* AI indicator dot - subtle pulse */}
        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5">
          <motion.div
            className="absolute inset-0 bg-emerald-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="absolute inset-0 bg-emerald-400 rounded-full border border-white" />
        </div>
      </motion.div>
    </div>
  );
};

/** Single message bubble component */
const MessageBubble = ({ message, isLatest }: { message: Message; isLatest: boolean }) => {
  const isAI = message.role === 'ai';
  const { hasWhatsApp, hasPhone, cleanContent, whatsAppUrl } = parseMessageForLinks(message.content);

  return (
    <motion.div
      initial={isLatest ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      {/* AI Avatar */}
      {isAI && (
        <div className="flex-shrink-0 mt-1">
          <JoseaAILogo size="sm" />
        </div>
      )}

      <div className={`max-w-[80%]`}>
        {/* Message Bubble */}
        <div
          className={`
            px-4 py-3 backdrop-blur-sm
            ${isAI
              ? 'bg-white/90 border border-purple-100/50 text-slate-800 rounded-2xl rounded-tl-md shadow-lg shadow-purple-500/5'
              : 'bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white rounded-2xl rounded-tr-md shadow-lg shadow-purple-500/20'
            }
          `}
        >
          <p
            className="text-[15px] leading-relaxed whitespace-pre-wrap break-words"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            {cleanContent}
          </p>

          {/* Contact Buttons (for escalation messages) */}
          {isAI && (hasWhatsApp || hasPhone) && (
            <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-purple-100/50">
              {hasWhatsApp && (
                <a
                  href={whatsAppUrl || `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Josea Team, I'd like to learn more")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebe5d] hover:to-[#0d7a6b] text-white py-3 rounded-xl font-semibold transition-all shadow-md shadow-emerald-500/20 hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Chat on WhatsApp</span>
                </a>
              )}
              {hasPhone && (
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md shadow-purple-500/20 hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Call {PHONE_NUMBER}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Timestamp */}
        <p
          className={`text-[11px] mt-1.5 ${isAI ? 'ml-1 text-slate-500' : 'mr-1 text-right text-slate-400'}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {formatTime(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function JoseaAI() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useAutoResize(input, 4);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Load messages from storage on mount
  useEffect(() => {
    const stored = loadStoredMessages();
    setMessages(stored);
  }, []);

  // Save messages when they change
  useEffect(() => {
    if (messages.length > 1) {
      saveMessages(messages);
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Clear new message indicator when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
      setShowTooltip(false);
    }
  }, [isOpen]);

  // Alternating tooltip: Shows for 3s, hides for 6s (opposite to WhatsApp)
  useEffect(() => {
    if (!isOpen) {
      // Start when WhatsApp tooltip hides (2s + 3s = 5s)
      const initialDelay = setTimeout(() => {
        setShowTooltip(true);
      }, 5000);

      // Cycle: Show for 3s, hide for 6s
      const showInterval = setInterval(() => {
        setShowTooltip(true);

        const hideTimeout = setTimeout(() => {
          setShowTooltip(false);
        }, 3000);

        return () => clearTimeout(hideTimeout);
      }, 9000); // 3s show + 6s hide = 9s total cycle (synced with WhatsApp)

      return () => {
        clearTimeout(initialDelay);
        clearInterval(showInterval);
      };
    } else {
      setShowTooltip(false);
    }
  }, [isOpen]);

  // Convert messages to API format
  const getConversationHistory = useCallback((): ConversationHistoryItem[] => {
    return messages
      .slice(-MAX_CONTEXT_MESSAGES)
      .filter(m => m.id !== 'welcome')
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }));
  }, [messages]);

  // Send message to API
  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setInput('');
    setError(null);

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content: trimmedInput,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true);

    try {
      const history = getConversationHistory();

      const requestBody = {
        message: trimmedInput,
        conversationHistory: history,
      };

      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: APIResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const aiMessage: Message = {
        id: generateId(),
        role: 'ai',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);

      if (!isOpen) {
        setHasNewMessage(true);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);

      const errorAiMessage: Message = {
        id: generateId(),
        role: 'ai',
        content: `I'm having trouble connecting right now. You can reach our team directly at:\n\nWhatsApp: https://wa.me/${WHATSAPP_NUMBER}\nCall: ${PHONE_NUMBER}`,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorAiMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  // Handle input submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Animation variants
  const windowVariants = {
    initial: {
      opacity: 0,
      scale: 0.92,
      y: 30,
      transformOrigin: 'bottom right',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 28,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: 30,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  return (
    <>
      {/* ================================================================== */}
      {/* FLOATING BUTTON (Collapsed State) - Sophisticated AI Design */}
      {/* ================================================================== */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-5 right-5 z-40">
            {/* Refined Professional Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 5, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-14 bottom-0 pointer-events-none"
                >
                  <div className="relative">
                    <div
                      className="bg-white text-slate-800 text-xs font-medium px-3 py-2 rounded-lg shadow-lg border border-slate-200 whitespace-nowrap"
                      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        <span>Ask Josea AI</span>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white drop-shadow-sm" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main button with sophisticated J logo - Professional Size (48px) */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative group"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.2 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open Josea AI chat"
            >
              <JoseaAILogo size="lg" pulse={false} />

              {/* New message badge */}
              {hasNewMessage && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 border border-white"
                >
                  <span className="text-[9px] font-bold text-white">1</span>
                </motion.div>
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* ================================================================== */}
      {/* CHAT WINDOW (Expanded State) - Premium Glass Design */}
      {/* ================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat window */}
            <motion.div
              ref={chatContainerRef}
              variants={windowVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                fixed z-50 overflow-hidden flex flex-col
                inset-0 rounded-none
                md:inset-auto md:bottom-6 md:right-6 md:w-[420px] md:h-[680px] md:max-h-[calc(100vh-48px)] md:rounded-3xl
                shadow-2xl shadow-purple-900/30
                border border-white/20
              "
            >
              {/* Background with hero image, tint and blur */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/hero-devices-sync-v2.png')`,
                }}
              />
              {/* Gradient overlay for sophistication */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/85 via-slate-900/80 to-slate-950/90 backdrop-blur-md" />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} />

              {/* ---------------------------------------------------------- */}
              {/* HEADER - Elegant Glass Design */}
              {/* ---------------------------------------------------------- */}
              <div className="relative z-10 px-5 py-4 flex items-center gap-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Logo */}
                <JoseaAILogo size="md" />

                {/* Title & Status */}
                <div className="flex-1">
                  <h3
                    className="text-white font-bold text-lg tracking-tight"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif" }}
                  >
                    Josea AI
                  </h3>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <span
                      className="text-white/70 text-xs font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      AI Assistant · Online
                    </span>
                  </div>
                </div>

                {/* Close button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* MESSAGES AREA - With gradient to white */}
              {/* ---------------------------------------------------------- */}
              <div
                className="relative z-10 flex-1 overflow-y-auto px-4 py-5 space-y-4"
                style={{
                  scrollBehavior: 'smooth',
                }}
              >
                {/* Gradient overlay from dark to light for messages area */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none" />

                {messages.map((message, index) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isLatest={index === messages.length - 1}
                  />
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0">
                      <JoseaAILogo size="sm" />
                    </div>
                    <div className="bg-white/90 border border-purple-100/50 rounded-2xl rounded-tl-md shadow-lg backdrop-blur-sm">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}

                {/* Error message */}
                {error && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-red-300 py-2 px-4 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* INPUT AREA - Premium Glass Design */}
              {/* ---------------------------------------------------------- */}
              <div className="relative z-10 border-t border-white/10 bg-white/10 backdrop-blur-md px-4 py-4">
                <form onSubmit={handleSubmit} className="flex items-end gap-3">
                  {/* Text input */}
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask me anything about our solutions..."
                      disabled={isLoading}
                      rows={1}
                      className="
                        w-full resize-none rounded-xl
                        bg-white/90 backdrop-blur-sm
                        border border-purple-200/50
                        px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400
                        focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all shadow-inner
                      "
                      style={{
                        maxHeight: '120px',
                        minHeight: '48px',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      }}
                      aria-label="Type your message"
                    />
                  </div>

                  {/* Send button */}
                  <motion.button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600
                      text-white flex items-center justify-center
                      disabled:opacity-40 disabled:cursor-not-allowed
                      hover:shadow-lg hover:shadow-purple-500/40
                      transition-all border border-white/20
                    "
                    whileHover={input.trim() && !isLoading ? { scale: 1.05 } : {}}
                    whileTap={input.trim() && !isLoading ? { scale: 0.95 } : {}}
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>

                {/* Powered by note */}
                <p
                  className="text-center text-[10px] text-white/40 mt-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Powered by Josea Software Solutions
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
