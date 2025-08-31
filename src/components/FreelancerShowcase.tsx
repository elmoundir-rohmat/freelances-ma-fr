import React, { useState } from 'react';
import { Star, MapPin, Clock, Filter } from 'lucide-react';

const consultants = [
  {
    id: 1,
    name: 'Sophie Laurent',
    title: 'Développeuse Senior React',
    location: 'Paris, France',
    formation: 'CentraleSupélec',
    rating: 4.9,
    reviews: 127,
    tarifJournalier: '€450/jour',
    disponibilite: 'Disponible',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    experience: '8+ ans',
    projetsRealises: 45,
    entreprises: ['Orange', 'BNP Paribas', 'StartupTech']
  },
  {
    id: 2,
    name: 'Marc Dubois',
    title: 'Ingénieur DevOps',
    location: 'Lyon, France',
    formation: 'INSA Lyon',
    rating: 5.0,
    reviews: 89,
    tarifJournalier: '€520/jour',
    disponibilite: 'Disponible',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    experience: '10+ ans',
    projetsRealises: 67,
    entreprises: ['Capgemini', 'Atos', 'StartupLyon']
  },
  {
    id: 3,
    name: 'Amélie Chen',
    title: 'Designer UX/UI',
    location: 'Bordeaux, France',
    formation: 'ESAD Bordeaux',
    rating: 4.8,
    reviews: 156,
    tarifJournalier: '€380/jour',
    disponibilite: 'Occupée jusqu\'au 15 jan',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['Figma', 'Adobe XD', 'Prototypage', 'Recherche Utilisateur'],
    experience: '6+ ans',
    projetsRealises: 83,
    entreprises: ['Publicis', 'Havas', 'StartupBordeaux']
  },
  {
    id: 4,
    name: 'Pierre Martin',
    title: 'Développeur Full Stack',
    location: 'Marseille, France',
    formation: 'Polytech Marseille',
    rating: 4.9,
    reviews: 203,
    tarifJournalier: '€480/jour',
    disponibilite: 'Disponible',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['Python', 'Django', 'React', 'PostgreSQL'],
    experience: '12+ ans',
    projetsRealises: 92,
    entreprises: ['Sopra Steria', 'Accenture', 'StartupMarseille']
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    title: 'Développeuse Mobile',
    location: 'Nice, France',
    formation: 'Epitech Nice',
    rating: 4.7,
    reviews: 94,
    tarifJournalier: '€420/jour',
    disponibilite: 'Disponible',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['React Native', 'Flutter', 'iOS', 'Android'],
    experience: '7+ ans',
    projetsRealises: 38,
    entreprises: ['Capgemini', 'Sopra Steria', 'StartupNice']
  },
  {
    id: 6,
    name: 'Lucas Moreau',
    title: 'Spécialiste Cybersécurité',
    location: 'Toulouse, France',
    formation: 'ENSEEIHT',
    rating: 5.0,
    reviews: 76,
    tarifJournalier: '€580/jour',
    disponibilite: 'Disponible',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    competences: ['Tests Pénétration', 'OWASP', 'Audit Sécurité', 'Conformité'],
    experience: '9+ ans',
    projetsRealises: 54,
    entreprises: ['Thales', 'Airbus', 'StartupToulouse']
  }
];

const FreelancerShowcase = () => {
  const [selectedSkill, setSelectedSkill] = useState('Toutes');
  const [showFilters, setShowFilters] = useState(false);

  const allSkills = ['Toutes', 'React', 'Python', 'AWS', 'Figma', 'Node.js', 'TypeScript'];
  
  const filteredConsultants = selectedSkill === 'Toutes' 
    ? consultants 
    : consultants.filter(consultant => 
        consultant.competences.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()))
      );

  return (
    <section id="consultants" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Consultants d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels rigoureusement sélectionnés, formés dans les grandes écoles françaises 
            et expérimentés dans l'écosystème tech français
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {filteredConsultants.length} consultants disponibles
            </h3>
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
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {consultant.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{consultant.title}</p>
                    <p className="text-sm text-blue-600 font-medium">{consultant.formation}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{consultant.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{consultant.rating}</span>
                    <span className="text-sm text-gray-500">({consultant.reviews} avis)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className={`text-sm font-medium ${
                      consultant.disponibilite === 'Disponible' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {consultant.disponibilite}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{consultant.experience}</span>
                  <span>{consultant.projetsRealises} projets</span>
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