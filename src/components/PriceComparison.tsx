import React, { useState } from 'react';
import { Calculator, TrendingDown, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const PriceComparison = () => {
  const [isWithConsultants, setIsWithConsultants] = useState(true); // Changé de false à true
  const [projectType, setProjectType] = useState('data'); // Changé de 'web' à 'data'
  const [projectDuration, setProjectDuration] = useState(109); // Changé de 20 à 109 jours (6 mois)
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    profile: '',
    seniority: '',
    duration: '',
    companyType: '',
    companyName: '',
    position: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter la logique d'envoi
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Comparaison des Tarifs (à profil égal)
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
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Démarrer Mon Projet
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
                Voir Tous nos Consultants
              </button>
            </div>
          </div>
        </div>

        {/* Modal Formulaire */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Rechercher un Consultant</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                    placeholder="ex: Chef de projet, Data Scientist, Développeur..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Séniorité */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Séniorité du profil recherché *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Moins de 3 ans', 'Entre 3 et 5 ans', 'Entre 5 et 10 ans', '+ de 10 ans'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="seniority"
                          value={option}
                          checked={formData.seniority === option}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Durée de mission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée de la mission *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['1 mois', '2-3 mois', '4-6 mois', '6+ mois'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          value={option}
                          checked={formData.duration === option}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type d'entreprise */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pour quelle entreprise recrutez-vous ? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Entreprise', 'Cabinet de conseil'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="companyType"
                          value={option}
                          checked={formData.companyType === option}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Nom de l'entreprise */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Saisissez le nom de l'entreprise"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Poste */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quel est votre poste ? *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Saisissez l'intitulé de votre poste"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Prénom et Nom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@entreprise.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone professionnel
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="+33">🇫🇷 France (+33)</option>
                        <option value="+32">🇧🇪 Belgique (+32)</option>
                        <option value="+41">🇨🇭 Suisse (+41)</option>
                        <option value="+1">🇺🇸 États-Unis (+1)</option>
                      </select>
                    </div>
                    <div className="flex-2">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Numéro de téléphone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Description du projet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez brièvement votre besoin *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="- Contexte&#10;- Tâches à réaliser&#10;- Objectifs"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget *
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="Budget journalier"
                      min="0"
                      step="50"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <span className="text-gray-600 font-medium">€/jour</span>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PriceComparison;
