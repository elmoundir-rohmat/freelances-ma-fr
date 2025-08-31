import React from 'react';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
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

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-700 font-medium">4.9/5 Note Moyenne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-medium">500+ Consultants</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Trouver un Consultant</span>
                <ArrowRight className="h-5 w-5" />
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
    </section>
  );
};

export default Hero;