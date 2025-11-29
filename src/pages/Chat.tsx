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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] text-white p-6">
          <h1 className="text-3xl font-bold mb-2">Confidential Support Chat</h1>
          <p className="text-blue-100">Safe, anonymous, judgment-free space</p>
        </div>

        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="bg-[#2B9EB3] rounded-full p-2 h-10 w-10 flex-shrink-0">
                  <Bot size={24} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="bg-[#FF6B35] rounded-full p-2 h-10 w-10 flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-[#2B9EB3] rounded-full p-2 h-10 w-10 flex-shrink-0">
                <Bot size={24} className="text-white" />
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-4">
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
              placeholder="Type your message here..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2B9EB3]"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="bg-[#2B9EB3] hover:bg-[#1E6A8C] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
