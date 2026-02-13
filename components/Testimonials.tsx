import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marek Kowalski",
    role: "Kierowca zawodowy",
    content: "Laweta przyjechała w 20 minut o 3 nad ranem. Niesamowita sprawność i profesjonalizm. Mechanik od razu zdiagnozował problem na miejscu.",
    rating: 5
  },
  {
    id: 2,
    name: "Anna Nowak",
    role: "Przedstawiciel handlowy",
    content: "Korzystałam z serwisu już 3 razy. Zawsze uczciwa wycena i szybka naprawa. Asystent AI na stronie pomógł mi wstępnie ocenić, czy mogę jechać dalej.",
    rating: 5
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "Klient indywidualny",
    content: "Najlepszy warsztat w regionie. Wymiana rozrządu zrobiona perfekcyjnie, a auto oddane umyte i pachnące. Polecam każdemu.",
    rating: 4
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-slate border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Opinie Klientów</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Zaufali Nam</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-dark p-8 rounded-2xl border border-white/5 flex flex-col relative">
              <div className="flex gap-1 mb-6 text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-gray-700'}`} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 flex-grow">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={`https://picsum.photos/seed/person${t.id}/50/50`} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-white/20"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};