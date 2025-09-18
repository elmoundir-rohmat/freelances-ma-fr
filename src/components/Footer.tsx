import React from 'react';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenForm = () => {
    // Créer un événement personnalisé pour déclencher l'ouverture du formulaire
    const event = new CustomEvent('openFormFromFooter');
    window.dispatchEvent(event);
    
    // Fallback: scroll vers la section ClientSection qui contient le formulaire
    setTimeout(() => {
      handleScrollToSection('clients');
    }, 100);
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">FreeMote</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecter des consultants IT premium, formés en France avec des projets ambitieux. 
              Construire l'avenir du travail à distance.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Pour les Consultants */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pour les Consultants</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    // Si on est sur la page freelance, ouvrir le formulaire de candidature
                    if (window.location.pathname === '/freelance') {
                      const event = new CustomEvent('openFormFromFooter');
                      window.dispatchEvent(event);
                    } else {
                      // Sinon rediriger vers la page freelance
                      if (onNavigate) {
                        onNavigate('freelance');
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rejoindre Notre Plateforme
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname === '/freelance') {
                      handleScrollToSection('concept');
                    } else {
                      if (onNavigate) {
                        onNavigate('freelance');
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Comment Ça Marche
                </a>
              </li>
              <li>
                <a 
                  href="/freelance" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('freelance');
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Page Freelance
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname === '/freelance') {
                      handleScrollToSection('avantages');
                    } else {
                      if (onNavigate) {
                        onNavigate('freelance');
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Histoires de Succès
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname === '/freelance') {
                      handleScrollToSection('cta-freelance');
                    } else {
                      if (onNavigate) {
                        onNavigate('freelance');
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ressources
                </a>
              </li>
            </ul>
          </div>

          {/* Pour les Entreprises */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pour les Entreprises</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenForm();
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Publier un Projet
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('consultants');
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Parcourir les Talents
                </a>
              </li>
              <li>
                <a 
                  href="/entreprises" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('entreprises');
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Page Entreprises
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('clients');
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solutions Entreprise
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('price-comparison');
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Maîtrisez vos coûts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nous Contacter</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">contact@freemote.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+33 6 19 47 05 19</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 FreeMote. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;