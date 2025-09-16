import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PriceComparison from './PriceComparison';
import ServicesGrid from './ServicesGrid';
import FreelancerShowcase from './FreelancerShowcase';
import ClientSection from './ClientSection';
import Testimonials from './Testimonials';
import Footer from './Footer';

interface EntreprisesPageProps {
  onNavigate?: (page: string) => void;
}

const EntreprisesPage: React.FC<EntreprisesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PriceComparison />
      <ServicesGrid />
      <FreelancerShowcase />
      <ClientSection />
      <Testimonials />
    </div>
  );
};

export default EntreprisesPage;
