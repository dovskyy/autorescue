import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';

export const EmergencyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Bottom Bar - visible after scrolling past hero */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-brand-dark/90 backdrop-blur-lg border-t border-brand-red/30 md:hidden flex items-center justify-between gap-4 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase font-bold">Awaria?</span>
          <span className="text-white font-bold">24/7 Assistance</span>
        </div>
        <a 
          href="tel:+48123456789"
          className="flex-1 bg-brand-red text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 animate-pulse"
        >
          <Phone className="w-5 h-5" />
          ZADZWOŃ
        </a>
      </div>

      {/* Desktop Sticky Floating Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 hidden md:block ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-red rounded-full opacity-70 animate-ping"></div>
          <a 
            href="tel:+48123456789"
            className="relative bg-brand-red hover:bg-red-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center transition-colors w-24 h-24 border-4 border-brand-dark"
          >
            <Phone className="w-8 h-8 mb-1" />
            <span className="text-[10px] font-bold uppercase">Pomoc</span>
          </a>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-4 py-2 rounded-lg font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Wezwij Lawetę 24h
          </div>
        </div>
      </div>
    </>
  );
};