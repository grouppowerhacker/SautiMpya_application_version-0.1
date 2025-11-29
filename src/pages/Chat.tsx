import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Volume2 } from 'lucide-react';
import { sendChatMessage } from '../services/groqService';
import { VoiceRecorder } from '../components/VoiceRecorder';
import type { Message } from '../types/groq';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello, I'm here to listen and support you. This is a safe, confidential space. You can share whatever you're comfortable with. How are you feeling today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const userMessage = messageText || input.trim();
    if (!userMessage) return;

    setInput('');
    const newUserMessage: Message = { role: 'user', content: userMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Send all messages for context
      const conversationHistory = [...messages, newUserMessage];
      const response = await sendChatMessage(conversationHistory);

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment. If you're in immediate danger, please call emergency services or use the helpline numbers at the bottom of this page."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceTranscription = (text: string) => {
    if (text.trim()) {
      handleSend(text);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header - Inspired by DeepSeek */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] rounded-lg p-2">
              <Bot className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900 text-sm">Sauti Mpya Assistant</h1>
              <p className="text-xs text-gray-500">Always here to listen and support</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Volume2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden px-4 py-4">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-4 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#e55a2b]'
                    : 'bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C]'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[85%] lg:max-w-[70%] ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white'
                    : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                } rounded-2xl px-4 py-3`}>
                  <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="mt-4 bg-white rounded-xl border border-gray-200/50 p-4 shadow-sm">
            <div className="flex gap-3 items-end">
              <VoiceRecorder
                onTranscription={handleVoiceTranscription}
                disabled={isLoading}
              />

              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder="Share what's on your mind..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2B9EB3] focus:border-transparent text-sm md:text-base bg-gray-50/50"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2B9EB3] hover:bg-[#1E6A8C] text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                💬 Share freely - this is a safe space
              </span>
              <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                🛡️ Your privacy is protected
              </span>
              <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                ⚠️ Emergency? Call 1195
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Footer */}
      <div className="bg-red-50 border-t border-red-200 px-4 py-3 flex-shrink-0">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-red-700 font-medium">
            🚨 If you're in immediate danger, please call emergency services: <strong>1195</strong> (GBV Hotline) or <strong>999</strong> (Police)
          </p>
        </div>
      </div>
    </div>
  );
}