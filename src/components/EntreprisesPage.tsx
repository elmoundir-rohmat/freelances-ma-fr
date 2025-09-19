import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import PriceComparison from './PriceComparison';
import ServicesGrid from './ServicesGrid';
import FreelancerShowcase from './FreelancerShowcase';
import ClientSection from './ClientSection';
import Footer from './Footer';

interface EntreprisesPageProps {
  onNavigate?: (page: string) => void;
}

const EntreprisesPage: React.FC<EntreprisesPageProps> = ({ onNavigate }) => {
  const [shouldOpenForm, setShouldOpenForm] = useState(false);
  const [formDataFromClientSection, setFormDataFromClientSection] = useState<any>(null);

  const handleOpenForm = (data: any) => {
    console.log('Données reçues de ClientSection:', data);
    setFormDataFromClientSection(data);
    setShouldOpenForm(true);
  };

  const handleFormOpened = () => {
    setShouldOpenForm(false);
    setFormDataFromClientSection(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PriceComparison 
        onOpenFormFromOutside={shouldOpenForm ? handleFormOpened : undefined}
        initialFormData={formDataFromClientSection}
      />
      <ServicesGrid />
      <FreelancerShowcase />
      <ClientSection onOpenForm={handleOpenForm} />
    </div>
  );
};

export default EntreprisesPage;
