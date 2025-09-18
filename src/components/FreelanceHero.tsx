import React, { useState } from 'react';
import { ChevronRight, Star, CheckCircle, ArrowRight } from 'lucide-react';

const FreelanceHero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRevenueForm, setShowRevenueForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    formation: '',
    tarifJournalier: '',
    experience: '',
    projetsRealises: '',
    motivation: '',
    availability: ''
  });
  const [revenueFormData, setRevenueFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tjmMaroc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Formulaire soumis:', formData);
    
    // Créer FormData avec les bonnes données
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', 'freelance-hero');
    netlifyFormData.append('firstName', formData.firstName);
    netlifyFormData.append('lastName', formData.lastName);
    netlifyFormData.append('email', formData.email);
    netlifyFormData.append('phone', formData.phone);
    netlifyFormData.append('title', formData.title);
    netlifyFormData.append('formation', formData.formation);
    netlifyFormData.append('tarifJournalier', formData.tarifJournalier);
    netlifyFormData.append('experience', formData.experience);
    netlifyFormData.append('projetsRealises', formData.projetsRealises);
    netlifyFormData.append('motivation', formData.motivation);
    netlifyFormData.append('availability', formData.availability);
    
    // Envoyer à Netlify
    fetch('/', {
      method: 'POST',
      body: netlifyFormData
    })
    .then(() => {
      alert('Votre candidature a été envoyée avec succès ! Nous vous contacterons bientôt.');
      setShowForm(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRevenueInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRevenueFormData({
      ...revenueFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRevenueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Formulaire revenu soumis:', revenueFormData);
    
    // Calculer le revenu simulé
    const tjmMaroc = parseFloat(revenueFormData.tjmMaroc);
    const tjmFrance = tjmMaroc * 2; // Estimation que le TJM français est 2x plus élevé
    const economie = tjmFrance - tjmMaroc;
    const economiePourcentage = ((economie / tjmFrance) * 100).toFixed(0);
    
    // Créer FormData pour Netlify
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', 'form-simulation');
    netlifyFormData.append('firstName', revenueFormData.firstName);
    netlifyFormData.append('lastName', revenueFormData.lastName);
    netlifyFormData.append('email', revenueFormData.email);
    netlifyFormData.append('tjmMaroc', revenueFormData.tjmMaroc);
    netlifyFormData.append('tjmFrance', tjmFrance.toString());
    netlifyFormData.append('economie', economie.toString());
    netlifyFormData.append('economiePourcentage', economiePourcentage);
    
    // Envoyer à Netlify
    fetch('/', {
      method: 'POST',
      body: netlifyFormData
    })
    .then(() => {
      console.log('Formulaire simulation envoyé à Netlify');
    })
    .catch((error) => {
      console.error('Erreur envoi Netlify:', error);
    });
    
    alert(`Merci ${revenueFormData.firstName} !\n\n` +
          `Vous allez recevoir la simulation par email à l'adresse : ${revenueFormData.email}\n\n` +
          `Résumé de votre simulation :\n` +
          `• TJM au Maroc: ${tjmMaroc} DH\n` +
          `• TJM équivalent en France: ${tjmFrance} DH\n` +
          `• Économie réalisée: ${economie} DH (${economiePourcentage}%)\n\n` +
          `Avec FreeMote, vous pouvez proposer des tarifs compétitifs tout en gardant une marge confortable !`);
    
    setShowRevenueForm(false);
    setRevenueFormData({ firstName: '', lastName: '', email: '', tjmMaroc: '' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Des missions en{' '}
                <br />
                <span className="text-blue-600">Remote</span>{' '}
                Depuis le{' '}
                <span className="text-blue-600">Maroc</span>
              </h1>
              <p className="text-xl text-blue-500 leading-relaxed">
                CLIENTS FRANÇAIS • RÉMUNERATION INTÉRESSANTE • PROJETS PREMIUM
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Rejoindre FreeMote</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowRevenueForm(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold"
              >
                Simuler mon Revenu
              </button>
            </div>

            {/* Trust indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Accès au marché français depuis le Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Rémuneration attractive, gardez votre niveau de vie comme en France</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Support légal et accompagnement</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Freelance marocain travaillant avec des clients français"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              
              
              {/* Floating rating card */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">4.9</span>
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
                <h3 className="text-2xl font-bold text-gray-900">Candidature Freelance</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6" name="freelance-hero" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              {/* Champ honeypot pour éviter le spam */}
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre.email@exemple.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Téléphone WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro WhatsApp *
                </label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="+212">🇲🇦 Maroc (+212)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                    </select>
                  </div>
                  <div className="flex-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Numéro WhatsApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Titre du poste */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du poste *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="ex: Développeur Full-Stack, Data Scientist, Product Manager..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Formation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Formation / Etudes *
                </label>
                <input
                  type="text"
                  name="formation"
                  value={formData.formation}
                  onChange={handleInputChange}
                  placeholder="ex: EPITA, IMT Atlantique, EM Lyon..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Tarif journalier souhaité */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarif journalier souhaité (DH) *
                </label>
                <select
                  name="tarifJournalier"
                  value={formData.tarifJournalier}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre tarif</option>
                  <option value="2000">2000 DH/jour</option>
                  <option value="2100">2100 DH/jour</option>
                  <option value="2200">2200 DH/jour</option>
                  <option value="2300">2300 DH/jour</option>
                  <option value="2400">2400 DH/jour</option>
                  <option value="2500">2500 DH/jour</option>
                  <option value="2600">2600 DH/jour</option>
                  <option value="2700">2700 DH/jour</option>
                  <option value="2800">2800 DH/jour</option>
                  <option value="2900">2900 DH/jour</option>
                  <option value="3000">3000 DH/jour</option>
                  <option value="3100">3100 DH/jour</option>
                  <option value="3200">3200 DH/jour</option>
                  <option value="3300">3300 DH/jour</option>
                  <option value="3400">3400 DH/jour</option>
                  <option value="3500">3500 DH/jour</option>
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  Veillez à mettre un TJM qui rend votre profil compétitif
                </p>
              </div>

              {/* Expérience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Années d'expérience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre expérience</option>
                  <option value="5+">5+ ans</option>
                  <option value="6+">6+ ans</option>
                  <option value="7+">7+ ans</option>
                  <option value="8+">8+ ans</option>
                  <option value="9+">9+ ans</option>
                  <option value="10+">10+ ans</option>
                  <option value="11+">11+ ans</option>
                  <option value="12+">12+ ans</option>
                </select>
              </div>

              {/* Projets réalisés */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de Projets / Missions réalisés *
                </label>
                <select
                  name="projetsRealises"
                  value={formData.projetsRealises}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez le nombre de projets</option>
                  <option value="3">3 projets</option>
                  <option value="4">4 projets</option>
                  <option value="5">5 projets</option>
                  <option value="6">6 projets</option>
                  <option value="7">7 projets</option>
                  <option value="8">8 projets</option>
                  <option value="9">9 projets</option>
                  <option value="10">10 projets</option>
                </select>
              </div>

              {/* Projet au Maroc */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre projet au Maroc *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre situation</option>
                  <option value="Je n'y ai encore jamais pensé">Je n'y ai encore jamais pensé</option>
                  <option value="C'est encore à l'étape de réflexion">C'est encore à l'étape de réflexion</option>
                  <option value="J'ai déjà effectué quelques recherches au Maroc">J'ai déjà effectué quelques recherches au Maroc</option>
                  <option value="Je cherche activement des opportunités au Maroc">Je cherche activement des opportunités au Maroc</option>
                  <option value="Je prépare déjà mon installation au Maroc">Je prépare déjà mon installation au Maroc</option>
                </select>
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
                  Envoyer ma candidature
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Simulation de Revenu */}
      {showRevenueForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Simuler mon Revenu</h3>
                <button
                  onClick={() => setShowRevenueForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Découvrez combien vous pourriez économiser en travaillant avec des clients français
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleRevenueSubmit} className="p-6 space-y-6" name="form-simulation" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              {/* Champ honeypot pour éviter le spam */}
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              {/* Prénom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={revenueFormData.firstName}
                  onChange={handleRevenueInputChange}
                  placeholder="Votre prénom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={revenueFormData.lastName}
                  onChange={handleRevenueInputChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={revenueFormData.email}
                  onChange={handleRevenueInputChange}
                  placeholder="votre.email@exemple.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Nous vous enverrons la simulation détaillée par email
                </p>
              </div>

              {/* TJM au Maroc */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TJM au Maroc (DH) *
                </label>
                <select
                  name="tjmMaroc"
                  value={revenueFormData.tjmMaroc}
                  onChange={handleRevenueInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez votre TJM</option>
                  <option value="2000">2000 DH/jour</option>
                  <option value="2100">2100 DH/jour</option>
                  <option value="2200">2200 DH/jour</option>
                  <option value="2300">2300 DH/jour</option>
                  <option value="2400">2400 DH/jour</option>
                  <option value="2500">2500 DH/jour</option>
                  <option value="2600">2600 DH/jour</option>
                  <option value="2700">2700 DH/jour</option>
                  <option value="2800">2800 DH/jour</option>
                  <option value="2900">2900 DH/jour</option>
                  <option value="3000">3000 DH/jour</option>
                  <option value="3100">3100 DH/jour</option>
                  <option value="3200">3200 DH/jour</option>
                  <option value="3300">3300 DH/jour</option>
                  <option value="3400">3400 DH/jour</option>
                  <option value="3500">3500 DH/jour</option>
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  Votre tarif journalier moyen actuel au Maroc
                </p>
              </div>

              {/* Boutons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRevenueForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Simuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreelanceHero;
