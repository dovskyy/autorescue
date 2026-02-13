import React from 'react';
import { Wrench, Car, Truck, Zap, Droplet, Cog } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    icon: Truck,
    title: "Holowanie 24/7",
    description: "Błyskawiczny dojazd lawety na terenie całego województwa. Pomoc w przypadku kolizji i awarii."
  },
  {
    icon: Wrench,
    title: "Mechanika Ogólna",
    description: "Naprawy silników, skrzyń biegów, układów hamulcowych i zawieszenia. Diagnostyka komputerowa."
  },
  {
    icon: Zap,
    title: "Elektromechanika",
    description: "Naprawa instalacji elektrycznych, alternatorów, rozruszników oraz systemów komfortu."
  },
  {
    icon: Droplet,
    title: "Serwis Olejowy",
    description: "Szybka wymiana oleju i filtrów. Używamy tylko markowych produktów rekomendowanych przez producentów."
  },
  {
    icon: Car,
    title: "Klimatyzacja",
    description: "Serwis, odgrzybianie i nabijanie klimatyzacji. Sprawdzamy szczelność układu."
  },
  {
    icon: Cog,
    title: "Wulkanizacja",
    description: "Wymiana opon, wyważanie kół, naprawa przebitych opon. Przechowalnia opon."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-slate relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Nasza Oferta</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Kompleksowa Opieka nad Autem</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nie ważne czy to drobna usterka czy poważna awaria. Nasz zespół ekspertów poradzi sobie z każdym wyzwaniem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-brand-dark/50 border border-white/5 rounded-2xl hover:border-brand-yellow/50 hover:bg-brand-dark transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-xl flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};