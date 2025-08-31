import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PriceComparison from './components/PriceComparison';
import Services from './components/Services';
import FreelancerShowcase from './components/FreelancerShowcase';
import ClientSection from './components/ClientSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PriceComparison />
      <Services />
      <FreelancerShowcase />
      <ClientSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;