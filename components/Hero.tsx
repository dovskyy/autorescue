import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="hero-image.jpg"
          alt="Mechanic working on car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-3 py-1 mb-4 border border-brand-yellow text-brand-yellow rounded-full text-sm font-bold uppercase tracking-wider">
            24/7 Pomoc Drogowa & Serwis
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Twoje Auto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">
              W Dobrych Rękach
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
            Awaria na trasie? Dziwne stuki w silniku? Oferujemy błyskawiczną pomoc drogową i kompleksową mechanikę pojazdową. Dojedziemy wszędzie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+48123456789"
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-red-500/30 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              PILNA POMOC
            </a>
            <a 
              href="tel:+48221234567"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              SERWIS
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-brand-dark" />
              ))}
            </div>
            <p>Zaufana jakość. <span className="text-white font-bold">5000+</span> naprawionych aut.</p>
          </div>
        </div>
      </div>
    </section>
  );
};