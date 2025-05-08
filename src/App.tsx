import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import SportsCategories from './components/SportsCategories/SportsCategories';
import Events from './components/Events/Events';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = 'SportCity - World-Class Sports Complex';
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Features />
        <SportsCategories />
        <Events />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;