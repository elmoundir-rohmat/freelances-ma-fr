import React, { useState } from 'react';
import { Calculator, TrendingDown, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const PriceComparison = () => {
  const [isWithConsultants, setIsWithConsultants] = useState(true); // Changé de false à true
  const [projectType, setProjectType] = useState('data'); // Changé de 'web' à 'data'
  const [projectDuration, setProjectDuration] = useState(109); // Changé de 20 à 109 jours (6 mois)

  const projectTypes = [
    { id: 'data', name: 'Data Scientist', basePrice: 650, consultantPrice: 400 },
    { id: 'dev', name: 'Développement', basePrice: 600, consultantPrice: 350 },
    { id: 'po', name: 'PO / Project Manager', basePrice: 700, consultantPrice: 400 },
    { id: 'consultant', name: 'Consultants IT / PMO', basePrice: 750, consultantPrice: 400 },
    { id: 'security', name: 'Cybersécurité', basePrice: 700, consultantPrice: 400 },
    { id: 'devops', name: 'DevOps, Infrastructure', basePrice: 550, consultantPrice: 300 }
  ];

  const currentProject = projectTypes.find(p => p.id === projectType);
  const totalBasePrice = currentProject ? currentProject.basePrice * projectDuration : 0;
  const totalConsultantPrice = currentProject ? currentProject.consultantPrice * projectDuration : 0;
  const savings = totalBasePrice - totalConsultantPrice;
  const savingsPercentage = totalBasePrice > 0 ? Math.round((savings / totalBasePrice) * 100) : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Comparaison des Tarifs
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos consultants sont diplômés des grandes écoles et{' '}
            <span className="text-blue-600">expérimentés en France</span>
            . Recrutez les en{' '}
            <span className="text-blue-600">Remote</span>
            {' '}et réduisez votre budget projet{' '}
            <span className="text-blue-600">jusqu'à -50%</span> !
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsWithConsultants(false)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isWithConsultants
                    ? 'bg-red-100 text-red-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <XCircle className="h-5 w-5" />
                  <span>Sans FranceTech</span>
                </div>
              </button>
              <button
                onClick={() => setIsWithConsultants(true)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isWithConsultants
                    ? 'bg-green-100 text-green-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Avec FranceTech</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Project Configuration */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Configuration */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Configuration du Projet
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée du Projet: {projectDuration} jours
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="218"
                    value={projectDuration}
                    onChange={(e) => setProjectDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 mois</span>
                    <span>3 mois</span>
                    <span>6 mois</span>
                    <span>1 an</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Project Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Projet Sélectionné</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profil :</span>
                  <span className="font-medium">{currentProject?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Durée :</span>
                  <span className="font-medium">{projectDuration} jours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TJM marché moyen :</span>
                  <span className="font-medium">
                    {isWithConsultants ? currentProject?.consultantPrice : currentProject?.basePrice}€
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Price Comparison */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coût de la prestation
              </h3>
              
              {/* Price Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without FranceTech - Always visible */}
                <div className={`bg-white p-6 rounded-xl shadow-sm border-2 transition-all duration-300 ${
                  !isWithConsultants ? 'border-red-200 bg-red-50' : 'border-gray-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">TJM Marché</h4>
                    {!isWithConsultants && <XCircle className="h-6 w-6 text-red-500" />}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {totalBasePrice.toLocaleString()}€
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentProject?.basePrice}€ × {projectDuration} jours
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    Consultants internationaux ou agences locales
                  </div>
                </div>

                {/* With FranceTech - Only visible when selected */}
                {isWithConsultants && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-200 bg-green-50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Nos consultants</h4>
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {totalConsultantPrice.toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentProject?.consultantPrice}€ × {projectDuration} jours
                    </div>
                    <div className="mt-3 text-sm text-gray-500">
                      Consultants français diplômés et expérimentés
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Savings Display */}
            {isWithConsultants && (
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingDown className="h-8 w-8 mr-3" />
                    <span className="text-2xl font-bold">Économies Réalisées</span>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {savings.toLocaleString()}€
                  </div>
                  <div className="text-xl mb-3">
                    Soit {savingsPercentage}% d'économies !
                  </div>
                  <div className="text-sm opacity-90 font-medium">
                    ✅ En gardant la même qualité de prestation
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à économiser sur votre projet ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos consultants français vous offrent la même qualité à moitié prix. 
              Contactez-nous pour démarrer votre projet avec un budget optimisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Démarrer Mon Projet
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
                Voir Tous nos Consultants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
