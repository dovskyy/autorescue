import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center h-auto">
          
          {/* Images Section - 65% width */}
          <div className="w-full lg:w-[65%] flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
            
            {/* Left Column: Stock-2 and Stock-4 stacked vertically */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 h-96 md:h-full">
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="stock-2.webp" 
                  alt="Mechanika precyzyjna" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="stock-4.webp" 
                  alt="Detaling i wykończenie" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Column: Stock-1 and Stock-3 side-by-side */}
            <div className="w-full md:w-1/2 flex gap-4 h-64 md:h-full">
              <div className="relative w-1/2 group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="stock-1.webp" 
                  alt="Diagnostyka komputerowa" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="relative w-1/2 group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="stock-3.webp" 
                  alt="Naprawy silnikowe" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>

          </div>

          {/* Text Section - 35% width */}
          <div className="w-full lg:w-[35%] space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-brand-yellow"></span>
                <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs">O nas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Więcej niż <br/>
                <span className="text-gray-500">tylko naprawy.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Działamy nieprzerwanie od 1999 roku, łącząc pasję do motoryzacji z rzetelnością i profesjonalizmem. Nasz zespół to doświadczeni mechanicy, którzy nie boją się wyzwań.
                Usługi pomocy drogowej świadczymy na terenie całego Mazowsza.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 group/item">
                <img 
                  src="car-wheel.webp" 
                  alt="Ikona koła" 
                  className="w-14 h-14 object-contain shrink-0 drop-shadow-xl transition-transform duration-1000 ease-out group-hover/item:rotate-[360deg]" 
                />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Gwarancja Mobilności</h4>
                  <p className="text-gray-500 text-sm">Niezależnie czy to awaria na trasie, czy planowany serwis – przywracamy sprawność szybciej niż myślisz.</p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <img 
                   src="car-wheel.webp" 
                   alt="Ikona koła" 
                   className="w-14 h-14 object-contain shrink-0 drop-shadow-xl transition-transform duration-1000 ease-out group-hover/item:rotate-[360deg]" 
                />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Warsztat z Charakterem</h4>
                  <p className="text-gray-500 text-sm">Nie boimy się trudnych przypadków. Tam gdzie inni rozkładają ręce, my wyciągamy narzędzia.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
