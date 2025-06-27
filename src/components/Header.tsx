
import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brown-800">مطابخ الرياض</h1>
              <p className="text-sm text-gold-600">تفصيل وتصميم</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button onClick={() => scrollToSection('hero')} className="hover:text-gold-600 transition-colors">الرئيسية</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-gold-600 transition-colors">خدماتنا</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-gold-600 transition-colors">كيف نعمل</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-gold-600 transition-colors">أعمالنا</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gold-600 transition-colors">اتصل بنا</button>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:+966501234567" className="gradient-gold text-white px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse hover:shadow-gold transition-all">
              <Phone className="h-4 w-4" />
              <span>اتصل الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-brown-800 transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-brown-800 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-brown-800 transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('hero')} className="text-right hover:text-gold-600 transition-colors">الرئيسية</button>
              <button onClick={() => scrollToSection('services')} className="text-right hover:text-gold-600 transition-colors">خدماتنا</button>
              <button onClick={() => scrollToSection('process')} className="text-right hover:text-gold-600 transition-colors">كيف نعمل</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-right hover:text-gold-600 transition-colors">أعمالنا</button>
              <button onClick={() => scrollToSection('contact')} className="text-right hover:text-gold-600 transition-colors">اتصل بنا</button>
              <a href="tel:+966501234567" className="gradient-gold text-white px-4 py-2 rounded-lg text-center">
                اتصل الآن
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
