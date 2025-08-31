import React, { useState } from 'react';
import { ChevronRight, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Des consultants IT{' '}
                <br />
                <span className="text-blue-600">en Remote</span>{' '}

                à des TJM{' '}
                <br />
                (très) compétitifs
              </h1>
              <p className="text-xl text-blue-500 leading-relaxed">
                IT - DATA - MANAGEMENT - CYBERSECURITE - PRODUIT
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Trouver un Consultant</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
                Rejoindre FranceTech
              </button>
            </div>

            {/* Trust indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Des consultants triés sur le volet</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Diplômés des grandes écoles, expériences exclusivement en France</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Prestations en Remote avec déplacements ponctuels dans vos locaux</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consultant IT français au travail"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Jusqu'à</div>
                  <div className="text-2xl font-bold text-gray-900">-50%</div>
                  
                </div>
              </div>
              
              {/* Floating rating card */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">5.0</span>
              </div>
            </div>
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
    </section>
  );
};

export default Hero;