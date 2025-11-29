import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-8 h-[calc(100dvh-80px)] md:h-[calc(100vh-100px)]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <div className="bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] text-white p-3 sm:p-4 md:p-6 flex-shrink-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">Confidential Support Chat</h1>
          <p className="text-blue-100 text-xs sm:text-sm md:text-base">Safe, anonymous, judgment-free space</p>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-2 sm:gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="bg-[#2B9EB3] rounded-full p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0 flex items-center justify-center">
                  <Bot size={16} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
              )}
              <div
                className={`max-w-[80%] xs:max-w-[85%] sm:max-w-[75%] rounded-lg p-2.5 sm:p-3 md:p-4 ${
                  message.role === 'user'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap text-xs sm:text-sm md:text-base">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="bg-[#FF6B35] rounded-full p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0 flex items-center justify-center">
                  <User size={16} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 sm:gap-3 justify-start">
              <div className="bg-[#2B9EB3] rounded-full p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 flex-shrink-0 flex items-center justify-center">
                <Bot size={16} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="bg-gray-100 rounded-lg p-2.5 sm:p-3 md:p-4">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-2.5 sm:p-3 md:p-4 bg-white flex-shrink-0">
          <div className="flex gap-2 items-end">
            <VoiceRecorder
              onTranscription={handleVoiceTranscription}
              disabled={isLoading}
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-[#2B9EB3] text-xs sm:text-sm md:text-base"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="bg-[#2B9EB3] hover:bg-[#1E6A8C] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center gap-1.5 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm md:text-base"
            >
              <Send size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden xs:inline">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}