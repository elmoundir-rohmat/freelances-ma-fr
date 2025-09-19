import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import EntreprisesPage from './components/EntreprisesPage';
import FreelancePage from './components/FreelancePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Gérer la navigation basée sur l'URL
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === '/freelance') {
        setCurrentPage('freelance');
      } else if (path === '/entreprises') {
        setCurrentPage('entreprises');
      } else {
        setCurrentPage('home');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    if (page === 'freelance') {
      window.history.pushState({}, '', '/freelance');
    } else if (page === 'entreprises') {
      window.history.pushState({}, '', '/entreprises');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  if (currentPage === 'freelance') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <FreelancePage />
        <Footer onNavigate={handleNavigation} />
      </div>
    );
  }

  if (currentPage === 'entreprises') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <EntreprisesPage onNavigate={handleNavigation} />
        <Footer onNavigate={handleNavigation} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;