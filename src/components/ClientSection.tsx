import React from 'react';
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

const ClientSection = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Pourquoi les Entreprises Choisissent FranceTech
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
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du Projet
                </label>
                <input
                  type="text"
                  placeholder="ex: Développer un site e-commerce React"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie du Projet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Développement Web</option>
                  <option>Développement Mobile</option>
                  <option>Design UI/UX</option>
                  <option>DevOps</option>
                  <option>Cybersécurité</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Journalier
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>€300 - €500/jour</option>
                  <option>€500 - €700/jour</option>
                  <option>€700 - €1000/jour</option>
                  <option>€1000+/jour</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description du Projet
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez vos besoins et exigences..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Obtenir des Propositions Gratuites
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;