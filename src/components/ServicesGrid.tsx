import React from 'react';
import { ArrowRight, Plus, Users, Building2, Briefcase, Database, Target, Shield, Zap, BarChart3 } from 'lucide-react';

const ServicesGrid = () => {
  const handleRecruitClick = () => {
    // Créer un événement personnalisé pour déclencher l'ouverture du formulaire de recherche de consultant
    const event = new CustomEvent('openConsultantFormFromServices');
    window.dispatchEvent(event);
  };
  const services = [
    {
      id: 1,
      title: 'Organisation & Management',
      icon: Target,
      services: [
        'Change management',
        'Organisation & processus',
        'Transformation digitale',
        'PMO et direction de projet',
        'Cartographie des processus'
      ]
    },
    {
      id: 2,
      title: 'Services IT',
      icon: Shield,
      services: [
        'Développement Web',
        'Développement Mobile',
        'Infrastructure & cloud',
        'Cybersécurité',
        'Infrastructures & DevOps'
      ]
    },
    {
      id: 3,
      title: 'Projets & Produits',
      icon: Zap,
      services: [
        'Chef de projet',
        'AMOA',
        'Product owner / manager',
        'Coach agile',
        'UX / UI'
      ]
    },
    {
      id: 4,
      title: 'Data Management',
      icon: BarChart3,
      services: [
        'Data stratégie',
        'Data gouvernance',
        'Data privacy',
        'Data engineer',
        'IA'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            La réponse à tous vos besoins en consultants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des experts spécialisés dans chaque domaine pour accompagner vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.services.map((item, index) => (
                    <div key={index} className="text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <span>Voir plus</span>
                    <Plus className="h-4 w-4" />
                  </a>
                  <button 
                    onClick={handleRecruitClick}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Recruter
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
