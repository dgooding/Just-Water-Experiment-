import React, { useState, useEffect, useRef } from 'react';
import { streamOracleWisdom } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Oracle: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Greetings, carbon-based lifeform. I am The Source. Tell me your ailment, and I shall prescribe the hydration you do not deserve, but desperately need." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    const modelMsgId = Date.now();
    // Add placeholder for streaming
    setMessages(prev => [...prev, { role: 'model', content: '', isStreaming: true }]);

    let accumulatedText = "";

    await streamOracleWisdom(query, (chunk) => {
      accumulatedText += chunk;
      setMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = newMsgs[newMsgs.length - 1];
        if (lastMsg.role === 'model' && lastMsg.isStreaming) {
            lastMsg.content = accumulatedText;
        }
        return newMsgs;
      });
    });

    setMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = newMsgs[newMsgs.length - 1];
        if (lastMsg.role === 'model') {
            lastMsg.isStreaming = false;
        }
        return newMsgs;
    });
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-aqua-glow mb-2">Consult The Oracle</h2>
        <p className="text-aqua-light">Our AI (Aquatic Intelligence) can diagnose any problem.</p>
      </div>

      <div className="glass-panel rounded-2xl p-1 overflow-hidden shadow-[0_0_40px_rgba(0,165,207,0.2)]">
        <div 
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-6 space-y-4 bg-black/40"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-aqua-mid text-white rounded-br-none' 
                    : 'bg-aqua-deep border border-aqua-light/30 text-aqua-glow rounded-bl-none'
                }`}
              >
                <p className="leading-relaxed">{msg.content}</p>
                {msg.isStreaming && <span className="inline-block w-2 h-2 ml-2 bg-aqua-glow rounded-full animate-pulse"></span>}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-black/60 border-t border-aqua-light/20 flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'I have the bubonic plague' or 'My wifi is slow'"
            className="flex-1 bg-transparent border border-aqua-light/40 rounded-lg px-4 py-3 text-white placeholder-aqua-light/50 focus:outline-none focus:border-aqua-glow transition-colors"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-aqua-light hover:bg-aqua-glow text-black font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Divining...' : 'Ask'}
          </button>
        </form>
      </div>
    </div>
  );
};