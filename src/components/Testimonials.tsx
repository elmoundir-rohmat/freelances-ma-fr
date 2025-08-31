import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    company: 'TechStartup SAS',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: "FranceTech nous a permis de trouver un excellent développeur React formé à CentraleSupélec. La qualité du travail a dépassé nos attentes et le projet a été livré dans les délais."
  },
  {
    id: 2,
    name: 'Jean-Pierre Leroy',
    company: 'InnovateCorp',
    role: 'Directeur Produit',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: "L'audit de cybersécurité réalisé par Lucas, diplômé de l'ENSEEIHT, a été professionnel et approfondi. Nous avons maintenant une confiance totale dans notre infrastructure de sécurité."
  },
  {
    id: 3,
    name: 'Sylvie Martin',
    company: 'DesignStudio',
    role: 'Directrice Créative',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: "Le travail de design UX d'Amélie, formée à l'ESAD Bordeaux, a transformé notre expérience utilisateur. L'attention aux détails et l'approche centrée utilisateur étaient parfaites."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Approuvé par des Entreprises en Croissance
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec les consultants FranceTech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} chez {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold shadow-lg">
            Commencer Votre Histoire de Succès
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;