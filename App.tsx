import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { AIAssistant } from './components/AIAssistant';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EmergencyBar } from './components/EmergencyBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-yellow selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AIAssistant />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <EmergencyBar />
    </div>
  );
};

export default App;