
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';
import WhyUs from '../components/WhyUs';
import Portfolio from '../components/Portfolio';
import ServiceArea from '../components/ServiceArea';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WorkProcess />
      <WhyUs />
      <Portfolio />
      <Reviews />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
