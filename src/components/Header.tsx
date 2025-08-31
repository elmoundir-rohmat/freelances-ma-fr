import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">FranceTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#consultants" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Consultants
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#clients" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Pour Entreprises
            </a>
            <a href="#avantages" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Avantages
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Se Connecter
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Commencer
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#consultants" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Consultants
              </a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </a>
              <a href="#clients" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Pour Entreprises
              </a>
              <a href="#avantages" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Avantages
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-left">
                  Se Connecter
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;