import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Kontakt</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Znajdź Nas</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Adres</h4>
                  <p className="text-gray-400">ul. Mechaniczna 15<br/>00-123 Warszawa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Telefony</h4>
                  <p className="text-gray-400">
                    <span className="text-brand-red font-bold">24/7: +48 123 456 789</span><br/>
                    Biuro: +48 22 123 45 67
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-gray-400">kontakt@autorescue.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Godziny Otwarcia</h4>
                  <p className="text-gray-400">Warsztat: Pn-Pt 8:00 - 18:00<br/>Sobota 9:00 - 14:00<br/><span className="text-brand-red font-bold">Laweta: Całodobowo</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Navigation - Replaces Form */}
          <div className="lg:w-2/3 h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-slate group">
             {/* Map Iframe with Dark Mode filters */}
             <iframe 
                width="100%" 
                height="100%" 
                title="mapa"
                src="https://maps.google.com/maps?q=ul.+Mechaniczna+15,+Warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full absolute inset-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             
             {/* Gradient Overlay for better text visibility */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent pointer-events-none"></div>

             {/* Navigation Button */}
             <div className="absolute bottom-8 left-8 right-8 md:w-auto md:right-auto z-10">
                <div className="bg-brand-slate/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-1">Nawigacja</p>
                    <h4 className="text-white font-bold text-lg">Jedź do nas</h4>
                  </div>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=ul.+Mechaniczna+15,+Warszawa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-500 text-brand-dark font-bold py-3 px-6 rounded-xl shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-105"
                  >
                    <Navigation className="w-5 h-5" />
                    NAWIGUJ
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};