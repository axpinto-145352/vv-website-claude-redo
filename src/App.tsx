import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AnimatedMAaaS from './components/AnimatedMAaaS';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-vv-dark">
      <Header />
      <Hero />
      <Services />
      <About />
      <AnimatedMAaaS />
      <Testimonials />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
