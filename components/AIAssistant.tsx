import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { diagnoseCarIssue } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Cześć! Jestem wirtualnym mechanikiem AutoRescue. Opisz mi co dzieje się z Twoim autem (np. "słychać stuki przy skręcaniu"), a postaram się wstępnie zdiagnozować problem.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const diagnosis = await diagnoseCarIssue(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: diagnosis }]);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Napędzane AI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wirtualna Diagnoza <br />
              <span className="text-gray-400">Zanim Przyjedziesz</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Niepokoi Cię dziwny dźwięk silnika? Kontrolka na desce rozdzielczej?
              Skorzystaj z naszego inteligentnego asystenta. Opisz problem, a otrzymasz
                natychmiastową, wstępną poradę.
                <strong> Uwaga: otrzymane informacje mają charakter orientacyjny i nie zastępują wizyty u mechanika. </strong>
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                Dostępny 24/7 bez czekania
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                Natychmiastowa ocena ryzyka
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                Oszczędność czasu przy wizycie
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-brand-slate border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
              {/* Chat Header */}
              <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-yellow to-yellow-600 rounded-full flex items-center justify-center text-brand-dark">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AutoBot</h4>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 ${
                      msg.role === 'user' 
                        ? 'bg-brand-yellow text-brand-dark rounded-tr-none font-medium' 
                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-brand-yellow" />
                      <span className="text-xs text-gray-400">Analizuję problem...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white/5 border-t border-white/5">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Opisz usterkę (np. dymi spod maski)..."
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-yellow text-brand-dark rounded-lg hover:bg-yellow-500 disabled:opacity-50 disabled:hover:bg-brand-yellow transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};