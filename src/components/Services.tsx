import React from 'react';
import { Code, Smartphone, Server, Database, Shield, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Frontend',
    description: 'Experts React, Vue, Angular formés dans les grandes écoles françaises',
    skills: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    icon: Server,
    title: 'Développement Backend',
    description: 'Solutions serveur évolutives et développement API avec expertise française',
    skills: ['Node.js', 'Python', 'Java', 'Go']
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et cross-platform par des experts français',
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    icon: Database,
    title: 'Base de Données & DevOps',
    description: 'Optimisation BDD et infrastructure cloud avec méthodologies françaises',
    skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker']
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Expériences numériques centrées utilisateur, style français',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototypage']
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Audits de sécurité et tests de pénétration par des experts français',
    skills: ['Audit Sécurité', 'Tests Pénétration', 'OWASP', 'Conformité']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Services IT d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception web à la cybersécurité, trouvez des consultants spécialisés 
            formés et expérimentés dans l'écosystème tech français.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;