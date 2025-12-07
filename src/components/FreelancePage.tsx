import React, { useState, useEffect } from 'react';
import { MapPin, Users, Euro, Clock, CheckCircle, ArrowRight, Globe, Briefcase } from 'lucide-react';
import FreelanceHero from './FreelanceHero';

const FreelancePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    formation: '',
    tarifJournalier: '',
    competences: [] as string[],
    experience: '',
    projetsRealises: '',
    entreprises: [] as string[],
    motivation: '',
    availability: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [industrySearch, setIndustrySearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [competenceSearch, setCompetenceSearch] = useState('');
  const [showCompetenceSuggestions, setShowCompetenceSuggestions] = useState(false);

  const industries = [
    'Banque', 'Tech', 'Télécoms', 'Retail', 'Distribution', 'E-commerce',
    'Énergie', 'Pétrole', 'Services Publics', 'Transport', 'Transport Aérien',
    'Logistique', 'BTP', 'Assurance', 'Finance', 'Services Financiers',
    'Aéronautique', 'Défense', 'Technologies', 'Gaming', 'Mobilité',
    'Automobile', 'Industrie', 'Manufacturing', 'Luxe', 'Pharma',
    'Optique', 'Santé', 'Marketplace', 'Média', 'Environnement'
  ];

  const competences = [
    'React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'Node.js',
    'Python', 'Java', 'C#', 'PHP', 'Go', 'Rust', 'Swift', 'Kotlin',
    'HTML/CSS', 'Sass', 'Tailwind CSS', 'Bootstrap', 'Material-UI',
    'Spring Boot', 'Django', 'Flask', 'Express.js', 'Laravel', 'Symfony',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'Terraform',
    'Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Chef',
    'Agile', 'Scrum', 'Kanban', 'DevOps', 'Microservices', 'API REST',
    'GraphQL', 'WebSocket', 'gRPC', 'Apache Kafka', 'RabbitMQ',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy',
    'Data Analysis', 'Business Intelligence', 'Tableau', 'Power BI',
    'Cybersecurity', 'Penetration Testing', 'Network Security', 'GDPR',
    'Product Management', 'UX/UI Design', 'Figma', 'Sketch', 'Adobe XD',
    'Project Management', 'PMO', 'Business Analysis', 'Requirements Analysis',
    'Architecture', 'System Design', 'Cloud Architecture', 'Security Architecture'
  ];

  const filteredIndustries = industries.filter(industry =>
    industry.toLowerCase().includes(industrySearch.toLowerCase()) &&
    !formData.entreprises.includes(industry)
  );

  const filteredCompetences = competences.filter(competence =>
    competence.toLowerCase().includes(competenceSearch.toLowerCase()) &&
    !formData.competences.includes(competence)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIndustrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustrySearch(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleCompetenceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompetenceSearch(e.target.value);
    setShowCompetenceSuggestions(e.target.value.length > 0);
  };

  const addIndustry = (industry: string) => {
    if (formData.entreprises.length < 4 && !formData.entreprises.includes(industry)) {
      setFormData(prev => ({
        ...prev,
        entreprises: [...prev.entreprises, industry]
      }));
    }
    setIndustrySearch('');
    setShowSuggestions(false);
  };

  const addCompetence = (competence: string) => {
    if (formData.competences.length < 10 && !formData.competences.includes(competence)) {
      setFormData(prev => ({
        ...prev,
        competences: [...prev.competences, competence]
      }));
    }
    setCompetenceSearch('');
    setShowCompetenceSuggestions(false);
  };

  const removeIndustry = (industry: string) => {
    setFormData(prev => ({
      ...prev,
      entreprises: prev.entreprises.filter(ind => ind !== industry)
    }));
  };

  const removeCompetence = (competence: string) => {
    setFormData(prev => ({
      ...prev,
      competences: prev.competences.filter(comp => comp !== competence)
    }));
  };

  const handleOpenRevenueForm = () => {
    // Créer un événement personnalisé pour déclencher l'ouverture du formulaire de simulation dans FreelanceHero
    const event = new CustomEvent('openRevenueFormFromPage');
    window.dispatchEvent(event);
  };

  // Fermer les suggestions quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
      setShowCompetenceSuggestions(false);
    };

    if (showSuggestions || showCompetenceSuggestions) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSuggestions, showCompetenceSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparer les données pour Netlify (convertir les tableaux en strings)
    const formDataForNetlify = {
      ...formData,
      competences: formData.competences.join(', '),
      entreprises: formData.entreprises.join(', ')
    };
    
    console.log('Form submitted:', formDataForNetlify);
    
    // Créer FormData avec les bonnes données
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', 'freelance-application');
    netlifyFormData.append('firstName', formDataForNetlify.firstName);
    netlifyFormData.append('lastName', formDataForNetlify.lastName);
    netlifyFormData.append('email', formDataForNetlify.email);
    netlifyFormData.append('phone', formDataForNetlify.phone);
    netlifyFormData.append('title', formDataForNetlify.title);
    netlifyFormData.append('formation', formDataForNetlify.formation);
    netlifyFormData.append('tarifJournalier', formDataForNetlify.tarifJournalier);
    netlifyFormData.append('competences', formDataForNetlify.competences);
    netlifyFormData.append('experience', formDataForNetlify.experience);
    netlifyFormData.append('projetsRealises', formDataForNetlify.projetsRealises);
    netlifyFormData.append('entreprises', formDataForNetlify.entreprises);
    netlifyFormData.append('availability', formDataForNetlify.availability);
    
    // Envoyer à Netlify avec retry
    const submitToNetlify = async () => {
      try {
        const response = await fetch('/', {
          method: 'POST',
          body: netlifyFormData
        });
        
        if (response.ok) {
          alert('Votre candidature a été envoyée avec succès ! Nous vous contacterons bientôt.');
          
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            title: '',
            formation: '',
            tarifJournalier: '',
            competences: [],
            experience: '',
            projetsRealises: '',
            entreprises: [],
            motivation: '',
            availability: ''
          });
          setShowForm(false);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      }
    };
    
    submitToNetlify();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <FreelanceHero />

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FreeMote c'est quoi ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous connectons les talents MRE avec les entreprises françaises, 
              créant des opportunités pour les deux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi FreeMote ?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accès au Marché Français</h4>
                    <p className="text-gray-600">
                      Nous vous donnons accès à notre réseau de clients français : 
                      grands groupes, PME innovantes, et startups en croissance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Euro className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Revenus attractifs</h4>
                    <p className="text-gray-600">
                      Même avec un TJM Marocain, vous garder une rémunération comparable à celle que vous aviez en France.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support Local</h4>
                    <p className="text-gray-600">
                      Notre équipe basée au Maroc vous accompagne sur l'aspect légal et juridique
                      et dans votre projet d'installation au Maroc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comment ça Marche ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-700">Vous postule via notre formulaire</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-700">Nous évaluons votre profil et vos compétences</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-700">Nous vous proposons des missions adaptées</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <p className="text-gray-700">Vous travaillez en remote avec nos clients français</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vos Avantages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Le Move parfait pour t'installer au Maroc</h3>
              <p className="text-gray-600">
                La solution idéale pour t'installer au Maroc.
                Vis ta transition en douceur, le temps de prendre tes repères et de construire ton réseau.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions de Création d'Entreprise</h3>
              <p className="text-gray-600">
                Solutions complètes de création de société ou de facturation au Maroc. 
                Nous vous accompagnons dans vos démarches administratives et fiscales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement légal et juridique sur Mesure</h3>
              <p className="text-gray-600">
                Conseil, accompagnement légal et juridique personnalisé pour vous aider 
                dans votre transition vers le Maroc. Notre équipe vous guide à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-freelance" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Rejoindre FreeMote ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Postule dès maintenant et commence à travailler avec des clients français 
            depuis le Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg flex items-center justify-center gap-2"
            >
              Je postule
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={handleOpenRevenueForm}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg"
            >
              J'estime mon revenu
            </button>
          </div>
        </div>
      </section>

      {/* Formulaire Modal */}
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
            <form onSubmit={handleSubmit} className="p-6 space-y-6" name="freelance-application" method="POST" data-netlify="true" netlify-honeypot="bot-field">
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
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="+33">
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

              {/* Entreprises/Industries */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industries où vous avez travaillé (max 4) *
                </label>
                
                {/* Barre de recherche */}
                <div className="relative">
                  <input
                    type="text"
                    value={industrySearch}
                    onChange={handleIndustrySearch}
                    onFocus={() => setShowSuggestions(industrySearch.length > 0)}
                    placeholder="Rechercher une industrie..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={formData.entreprises.length >= 4}
                  />
                  
                  {/* Suggestions */}
                  {showSuggestions && filteredIndustries.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {filteredIndustries.map((industry) => (
                        <button
                          key={industry}
                          type="button"
                          onClick={() => addIndustry(industry)}
                          className="w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors text-sm"
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Message si pas de résultats */}
                  {showSuggestions && filteredIndustries.length === 0 && industrySearch.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                      <p className="text-sm text-gray-500">Aucune industrie trouvée</p>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  Tapez pour rechercher une industrie ({formData.entreprises.length}/4 sélectionnées)
                </p>
                
                {/* Affichage des industries sélectionnées */}
                {formData.entreprises.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Industries sélectionnées :</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.entreprises.map((industry) => (
                        <span
                          key={industry}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                        >
                          {industry}
                          <button
                            type="button"
                            onClick={() => removeIndustry(industry)}
                            className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Compétences */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vos compétences principales (max 10) *
                </label>
                
                {/* Barre de recherche */}
                <div className="relative">
                  <input
                    type="text"
                    value={competenceSearch}
                    onChange={handleCompetenceSearch}
                    onFocus={() => setShowCompetenceSuggestions(competenceSearch.length > 0)}
                    placeholder="Rechercher une compétence..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={formData.competences.length >= 10}
                  />
                  
                  {/* Suggestions */}
                  {showCompetenceSuggestions && filteredCompetences.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {filteredCompetences.map((competence) => (
                        <button
                          key={competence}
                          type="button"
                          onClick={() => addCompetence(competence)}
                          className="w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors text-sm"
                        >
                          {competence}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Message si pas de résultats */}
                  {showCompetenceSuggestions && filteredCompetences.length === 0 && competenceSearch.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                      <p className="text-sm text-gray-500">Aucune compétence trouvée</p>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  Tapez pour rechercher une compétence ({formData.competences.length}/10 sélectionnées)
                </p>
                
                {/* Affichage des compétences sélectionnées */}
                {formData.competences.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Compétences sélectionnées :</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.competences.map((competence) => (
                        <span
                          key={competence}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200"
                        >
                          {competence}
                          <button
                            type="button"
                            onClick={() => removeCompetence(competence)}
                            className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-green-200 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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

    </div>
  );
};

export default FreelancePage;
