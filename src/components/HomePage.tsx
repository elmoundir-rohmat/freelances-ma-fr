import React from 'react';
import { ArrowRight, Users, Euro, Target, Shield, Zap, CheckCircle, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              FreeMote : <span className="text-blue-600">L'Excellence IT Française</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Des consultants IT diplômés et expérimentés en France, disponibles à des tarifs compétitifs. 
              La qualité de l'expertise française, au meilleur prix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/entreprises"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center gap-2"
              >
                Découvrir nos Services
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="/freelance"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
              >
                Devenir Freelance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Valeur Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Proposition de Valeur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous connectons les entreprises françaises avec des experts IT formés en France, 
              offrant un rapport qualité-prix exceptionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formation d'Excellence</h3>
              <p className="text-gray-600">
                Nos consultants sont diplômés des meilleures écoles d'ingénieurs et universités françaises. 
                Ils maîtrisent les standards et méthodologies du marché français.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Euro className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tarifs Compétitifs</h3>
              <p className="text-gray-600">
                Des tarifs jusqu'à 50% inférieurs au marché français, sans compromis sur la qualité. 
                Un ROI immédiat sur vos investissements IT.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Locale</h3>
              <p className="text-gray-600">
                Une connaissance approfondie de l'écosystème français : réglementation, 
                standards, et bonnes pratiques du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi FranceTech */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir FreeMote ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Formation Française Garantie</h3>
                    <p className="text-gray-600">
                      Tous nos consultants ont suivi leur formation supérieure en France, 
                      garantissant une maîtrise des standards français.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expérience du Marché Français</h3>
                    <p className="text-gray-600">
                      Une expérience acquise exclusivement sur des projets français, 
                      dans des grands groupes, PME et startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tarifs Défiant Toute Concurrence</h3>
                    <p className="text-gray-600">
                      Des tarifs journaliers jusqu'à 50% inférieurs au marché français, 
                      sans compromis sur l'expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600">
                      Notre équipe vous accompagne dans le choix du consultant idéal 
                      et tout au long de la mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Domaines d'Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Développement Web & Mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Data Science & Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Management de Projet & PMO</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Product Management & UX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cybersécurité & Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Architecture & DevOps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Business Analysis & Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que Disent Nos Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "FreeMote nous a permis de réduire nos coûts de 40% tout en maintenant 
                une qualité d'expertise exceptionnelle. Nos consultants sont parfaitement 
                intégrés à nos équipes."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  M.D.
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Directeur IT</p>
                  <p className="text-gray-600 text-sm">Grande Distribution</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "La formation française de nos consultants se ressent dans leur approche 
                méthodologique. Ils comprennent parfaitement nos enjeux et s'adaptent 
                rapidement à notre culture d'entreprise."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  S.L.
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">CPO</p>
                  <p className="text-gray-600 text-sm">Fintech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Découvrir FranceTech ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez nos consultants et nos services pour entreprises, 
            ou rejoignez notre réseau de freelances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/entreprises"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg flex items-center justify-center gap-2"
            >
              Services Entreprises
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="/freelance"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg"
            >
              Devenir Freelance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
