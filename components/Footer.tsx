import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Image */}
        <div className="flex items-center">
          <img 
            src="logo.png" 
            alt="AutoRescue Logo" 
            className="h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AutoRescue. Wszystkie prawa zastrzeżone. Projekt i realizacja: <a href="https://lewcode.pl" className="text-gray-400 hover:text-white transition-colors">.lewcode</a>
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Polityka Prywatności</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Regulamin</a>
        </div>
      </div>
    </footer>
  );
};