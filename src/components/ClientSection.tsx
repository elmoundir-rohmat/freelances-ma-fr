import React, { useState } from 'react';
import { Building2, Users, Clock, Shield, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Formation d\'Excellence',
    description: 'Tous nos consultants sont diplômés des grandes écoles françaises (Centrale, INSA, Polytechnique)'
  },
  {
    icon: Clock,
    title: 'Expertise Locale',
    description: 'Expérience acquise exclusivement dans l\'écosystème tech français (grands groupes, start-ups)'
  },
  {
    icon: Shield,
    title: 'Tarifs Compétitifs',
    description: 'Tarifs journaliers 50% inférieurs aux consultants classiques du marché'
  },
  {
    icon: Building2,
    title: 'Culture Française',
    description: 'Compréhension parfaite des enjeux et méthodologies des entreprises françaises'
  }
];

interface ClientSectionProps {
  onOpenForm?: (data: any) => void;
}

const ClientSection = ({ onOpenForm }: ClientSectionProps) => {
  const [formData, setFormData] = useState({
    profile: '',
    seniority: '',
    duration: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Formulaire ClientSection soumis:', formData);
    
    // Ouvrir le popup du formulaire complet avec les données
    if (onOpenForm) {
      onOpenForm(formData);
    } else {
      // Fallback : stocker dans localStorage et rediriger
      localStorage.setItem('clientFormData', JSON.stringify(formData));
      const priceSection = document.getElementById('price-comparison');
      if (priceSection) {
        console.log('Scroll vers la section price-comparison');
        priceSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Section price-comparison non trouvée');
      }
    }
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Pourquoi les Entreprises Choisissent FreeMote
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Rejoignez 300+ entreprises qui nous font confiance pour leurs projets IT 
                avec des consultants formés et expérimentés en France.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Publier Votre Projet</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Project Posting Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Démarrer Votre Projet
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profil recherché */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profil recherché *
                </label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleInputChange}
                  placeholder="ex: Data Scientist, Développeur Full-Stack..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Séniorité */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Séniorité du profil recherché *
                </label>
                <select
                  name="seniority"
                  value={formData.seniority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Sélectionnez la séniorité</option>
                  <option value="Moins de 3 ans">Moins de 3 ans</option>
                  <option value="Entre 3 et 5 ans">Entre 3 et 5 ans</option>
                  <option value="Entre 5 et 10 ans">Entre 5 et 10 ans</option>
                  <option value="+ de 10 ans">+ de 10 ans</option>
                </select>
              </div>

              {/* Durée de mission */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée de la mission *
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Sélectionnez la durée</option>
                  <option value="Moins de 3 mois">Moins de 3 mois</option>
                  <option value="4-6 mois">4-6 mois</option>
                  <option value="6-12 mois">6-12 mois</option>
                  <option value="12+ mois">12+ mois</option>
                </select>
              </div>

              {/* Budget journalier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget journalier estimé (€)
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="ex: 500, 800, 1200..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Continuer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;