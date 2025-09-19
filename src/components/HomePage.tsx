import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Des missions à impact pour consultants premium, en <span className="text-blue-600">Remote</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Trouvez des consultants IT premiums, diplômés et expérimentés en France, pour tous vos besoins, disponibles à des tarifs compétitifs.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
