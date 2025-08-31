import React, { useState } from 'react';
import { Star, MapPin, Clock, Filter } from 'lucide-react';

const consultants = [
  {
    id: 1,
    name: 'Sophie L.',
    title: 'Data Scientist Senior',
    formation: 'CentraleSupélec',
    tarifJournalier: '€380/jour',
    competences: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    experience: '8+ ans',
    projetsRealises: 5,
    entreprises: ['Orange', 'BNP Paribas', 'L\'Oréal']
  },
  {
    id: 2,
    name: 'Marc T-D.',
    title: 'Consultant IT / PMO',
    formation: 'INSA Lyon',
    tarifJournalier: '€400/jour',
    competences: ['Gestion de Projet', 'PMO', 'Transformation IT', 'Stratégie'],
    experience: '10+ ans',
    projetsRealises: 7,
    entreprises: ['SNCF', 'EDF', 'Engie']
  },
  {
    id: 3,
    name: 'Amélie C.',
    title: 'Product Owner / Manager',
    formation: 'ESCP Business School',
    tarifJournalier: '€380/jour',
    competences: ['Product Strategy', 'Agile', 'User Research', 'Roadmap'],
    experience: '6+ ans',
    projetsRealises: 7,
    entreprises: ['Carrefour', 'Danone', 'LVMH']
  },
  {
    id: 4,
    name: 'Pierre M.',
    title: 'Chef de Projet IT',
    formation: 'Polytech Marseille',
    tarifJournalier: '€420/jour',
    competences: ['Gestion de Projet', 'AMOA', 'Agile', 'Stakeholder Management'],
    experience: '12+ ans',
    projetsRealises: 8,
    entreprises: ['Air France', 'CMA CGM', 'Bouygues']
  },
  {
    id: 5,
    name: 'Emma R.',
    title: 'Spécialiste Cybersécurité',
    formation: 'Epitech Nice',
    tarifJournalier: '€400/jour',
    competences: ['Audit Sécurité', 'Tests Pénétration', 'OWASP', 'Conformité'],
    experience: '7+ ans',
    projetsRealises: 3,
    entreprises: ['Société Générale', 'Crédit Agricole', 'AXA']
  },
  {
    id: 6,
    name: 'Lucas M.',
    title: 'DevOps & Infrastructure',
    formation: 'ENSEEIHT',
    tarifJournalier: '€350/jour',
    competences: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    experience: '9+ ans',
    projetsRealises: 6,
    entreprises: ['Thales', 'Airbus', 'Dassault Systèmes']
  },
  {
    id: 7,
    name: 'Thomas B.',
    title: 'Développeur Full-Stack',
    formation: 'EPITA',
    tarifJournalier: '€350/jour',
    competences: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    experience: '5+ ans',
    projetsRealises: 3,
    entreprises: ['Ubisoft', 'Criteo', 'BlaBlaCar']
  },
  {
    id: 8,
    name: 'Julie P.',
    title: 'Architecte Solution',
    formation: 'Télécom Paris',
    tarifJournalier: '€420/jour',
    competences: ['Architecture Cloud', 'Microservices', 'API Design', 'Kafka'],
    experience: '11+ ans',
    projetsRealises: 5,
    entreprises: ['Renault', 'PSA', 'Valeo']
  },
  {
    id: 9,
    name: 'Antoine F.',
    title: 'Scrum Master / Coach Agile',
    formation: 'HEC Paris',
    tarifJournalier: '€380/jour',
    competences: ['Scrum', 'Kanban', 'Coaching', 'Transformation Agile'],
    experience: '8+ ans',
    projetsRealises: 5,
    entreprises: ['L\'Oréal', 'Sanofi', 'Essilor']
  },
  {
    id: 10,
    name: 'Marie L.',
    title: 'Business Analyst',
    formation: 'Sciences Po Paris',
    tarifJournalier: '€360/jour',
    competences: ['Analyse Métier', 'UML', 'BPMN', 'Gestion des Exigences'],
    experience: '6+ ans',
    projetsRealises: 4,
    entreprises: ['BNP Paribas', 'Crédit Agricole', 'Société Générale']
  },
  {
    id: 11,
    name: 'Nicolas R.',
    title: 'Expert BI & Analytics',
    formation: 'ENSAE Paris',
    tarifJournalier: '€400/jour',
    competences: ['Power BI', 'Tableau', 'SQL', 'Data Modeling'],
    experience: '9+ ans',
    projetsRealises: 7,
    entreprises: ['Total', 'Engie', 'EDF']
  },
  {
    id: 12,
    name: 'Camille D.',
    title: 'UX/UI Designer',
    formation: 'ESAD Reims',
    tarifJournalier: '€360/jour',
    competences: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    experience: '7+ ans',
    projetsRealises: 7,
    entreprises: ['Decathlon', 'Fnac', 'Boulanger']
  },
  {
    id: 13,
    name: 'Alexandre M.',
    title: 'Développeur Frontend Senior',
    formation: '42 Paris',
    tarifJournalier: '€370/jour',
    competences: ['React', 'Vue.js', 'TypeScript', 'CSS3/Sass'],
    experience: '8+ ans',
    projetsRealises: 9,
    entreprises: ['Doctolib', 'Back Market', 'Veepee']
  },
  {
    id: 14,
    name: 'Sarah K.',
    title: 'Développeuse Backend',
    formation: 'IMT Atlantique',
    tarifJournalier: '€360/jour',
    competences: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    experience: '6+ ans',
    projetsRealises: 5,
    entreprises: ['Orange', 'Bouygues Telecom', 'SFR']
  },
  {
    id: 15,
    name: 'Raphaël T.',
    title: 'Développeur Mobile',
    formation: 'Epitech Paris',
    tarifJournalier: '€350/jour',
    competences: ['React Native', 'Flutter', 'iOS', 'Android'],
    experience: '5+ ans',
    projetsRealises: 5,
    entreprises: ['Deezer', 'Vinted', 'Leboncoin']
  },
  {
    id: 16,
    name: 'Claire B.',
    title: 'Business Analyst Senior',
    formation: 'EM Lyon',
    tarifJournalier: '€390/jour',
    competences: ['Analyse Fonctionnelle', 'Gestion des Exigences', 'UML', 'BPMN'],
    experience: '10+ ans',
    projetsRealises: 9,
    entreprises: ['LCL', 'Crédit Mutuel', 'Banque Populaire']
  },
  {
    id: 17,
    name: 'Guillaume L.',
    title: 'Analyste Métier IT',
    formation: 'Grenoble INP',
    tarifJournalier: '€370/jour',
    competences: ['Analyse des Processus', 'Modélisation', 'Gestion de Projet', 'SQL'],
    experience: '7+ ans',
    projetsRealises: 5,
    entreprises: ['La Poste', 'EDF', 'Veolia']
  },
  {
    id: 18,
    name: 'Isabelle R.',
    title: 'Product Manager',
    formation: 'ESSEC Business School',
    tarifJournalier: '€400/jour',
    competences: ['Product Strategy', 'Go-to-Market', 'Analytics', 'User Research'],
    experience: '9+ ans',
    projetsRealises: 8,
    entreprises: ['Carrefour', 'Auchan', 'Leclerc']
  },
  {
    id: 19,
    name: 'Matthieu D.',
    title: 'Expert Data Engineering',
    formation: 'Mines ParisTech',
    tarifJournalier: '€410/jour',
    competences: ['Apache Spark', 'Kafka', 'Hadoop', 'Python'],
    experience: '11+ ans',
    projetsRealises: 9,
    entreprises: ['Total', 'Engie', 'EDF']
  },
  {
    id: 20,
    name: 'Audrey S.',
    title: 'Consultante Transformation Digitale',
    formation: 'HEC Paris',
    tarifJournalier: '€420/jour',
    competences: ['Stratégie Digitale', 'Change Management', 'Process Optimization', 'Agile'],
    experience: '12+ ans',
    projetsRealises: 10,
    entreprises: ['BNP Paribas', 'Société Générale', 'Crédit Agricole']
  }
];

const FreelancerShowcase = () => {
  const [selectedSkill, setSelectedSkill] = useState('Toutes');
  const [showFilters, setShowFilters] = useState(false);

  // Catégories de filtrage qui correspondent aux compétences réelles
  const allSkills = [
    'Tous',
    'Data & Analytics',
    'Management & PMO', 
    'Product & UX',
    'Cybersécurité',
    'DevOps & Infrastructure',
    'Développement',
    'Architecture',
    'Business Analysis'
  ];
  
  const getConsultantCategory = (consultant: any) => {
    const competences = consultant.competences.join(' ').toLowerCase();
    const title = consultant.title.toLowerCase();
    
    // Data & Analytics
    if (competences.includes('data') || competences.includes('analytics') || competences.includes('bi') || 
        competences.includes('machine learning') || competences.includes('python') || competences.includes('sql') ||
        competences.includes('power bi') || competences.includes('tableau') || competences.includes('data modeling') ||
        competences.includes('apache spark') || competences.includes('kafka') || competences.includes('hadoop')) {
      return 'Data & Analytics';
    }
    
    // Management & PMO
    if (competences.includes('gestion') || competences.includes('projet') || competences.includes('pmo') || 
        competences.includes('scrum') || competences.includes('agile') || competences.includes('coaching') ||
        competences.includes('transformation') || competences.includes('stratégie')) {
      return 'Management & PMO';
    }
    
    // Product & UX
    if (competences.includes('product') || competences.includes('ux') || competences.includes('ui') || 
        competences.includes('user research') || competences.includes('roadmap') || competences.includes('go-to-market') ||
        competences.includes('figma') || competences.includes('adobe xd') || competences.includes('prototyping')) {
      return 'Product & UX';
    }
    
    // Cybersécurité
    if (competences.includes('sécurité') || competences.includes('audit') || competences.includes('owasp') || 
        competences.includes('tests pénétration') || competences.includes('conformité')) {
      return 'Cybersécurité';
    }
    
    // DevOps & Infrastructure
    if (competences.includes('devops') || competences.includes('aws') || competences.includes('docker') || 
        competences.includes('kubernetes') || competences.includes('infrastructure') || competences.includes('terraform')) {
      return 'DevOps & Infrastructure';
    }
    
    // Développement
    if (competences.includes('react') || competences.includes('node.js') || competences.includes('typescript') || 
        competences.includes('développement') || competences.includes('vue.js') || competences.includes('css3') ||
        competences.includes('java') || competences.includes('spring boot') || competences.includes('postgresql') ||
        competences.includes('react native') || competences.includes('flutter') || competences.includes('ios') ||
        competences.includes('android')) {
      return 'Développement';
    }
    
    // Architecture
    if (competences.includes('architecture') || competences.includes('cloud') || competences.includes('microservices') || 
        competences.includes('api design') || competences.includes('kafka')) {
      return 'Architecture';
    }
    
    // Business Analysis
    if (competences.includes('analyse métier') || competences.includes('uml') || competences.includes('bpmn') || 
        competences.includes('exigences') || competences.includes('analyse fonctionnelle') || 
        competences.includes('gestion des exigences') || competences.includes('analyse des processus') ||
        competences.includes('modélisation')) {
      return 'Business Analysis';
    }
    
    return 'Autres';
  };
  
  const filteredConsultants = selectedSkill === 'Tous' 
    ? consultants 
    : consultants.filter(consultant => getConsultantCategory(consultant) === selectedSkill);

  return (
    <section id="consultants" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Exemples de profils
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rigoureusement sélectionnés, formés dans les grandes écoles françaises 
            et expérimentés dans l'écosystème tech français
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedSkill === skill
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Consultant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConsultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
            >
              {/* Profile Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                    {consultant.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {consultant.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{consultant.title}</p>
                    <p className="text-sm text-blue-600 font-medium">{consultant.formation}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    {consultant.experience} • {consultant.projetsRealises} projets
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {consultant.competences.slice(0, 4).map((competence, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium"
                    >
                      {competence}
                    </span>
                  ))}
                </div>
              </div>

              {/* Entreprises */}
              <div className="px-6 pb-4">
                <p className="text-xs text-gray-500 mb-2">Expérience chez :</p>
                <div className="flex flex-wrap gap-2">
                  {consultant.entreprises.map((entreprise, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium"
                    >
                      {entreprise}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{consultant.tarifJournalier}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
            Voir Tous les Consultants
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreelancerShowcase;