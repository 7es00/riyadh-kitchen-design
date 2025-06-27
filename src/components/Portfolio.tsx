
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "مطبخ عصري - الرياض",
      category: "modern",
      image: "🏠",
      description: "مطبخ عصري بتصميم مفتوح مع جزيرة وسطية",
      features: ["مساحة 25 متر", "جزيرة وسطية", "إضاءة LED", "خامات إيطالية"]
    },
    {
      id: 2,
      title: "مطبخ كلاسيكي - شمال الرياض",
      category: "classic",
      image: "🏛️",
      description: "مطبخ كلاسيكي فاخر بالخشب الطبيعي",
      features: ["خشب طبيعي", "تفاصيل مذهبة", "رخام كرارا", "تصميم كلاسيكي"]
    },
    {
      id: 3,
      title: "مطبخ صغير - شرق الرياض",
      category: "small",
      image: "🏘️",
      description: "استغلال أمثل للمساحات الصغيرة",
      features: ["مساحة 12 متر", "تخزين ذكي", "ألوان فاتحة", "تصميم عملي"]
    },
    {
      id: 4,
      title: "مطبخ أمريكي - غرب الرياض",
      category: "american",
      image: "🇺🇸",
      description: "مطبخ أمريكي مفتوح على الصالة",
      features: ["تصميم مفتوح", "بار إفطار", "أجهزة مدمجة", "إضاءة متنوعة"]
    },
    {
      id: 5,
      title: "مطبخ معاصر - وسط الرياض",
      category: "modern",
      image: "🌟",
      description: "تصميم معاصر بألوان جريئة",
      features: ["ألوان جريئة", "تقنيات حديثة", "مواد متنوعة", "إبداع في التصميم"]
    },
    {
      id: 6,
      title: "مطبخ تراثي - جنوب الرياض",
      category: "traditional",
      image: "🕌",
      description: "مطبخ بطابع تراثي سعودي أصيل",
      features: ["طابع تراثي", "زخارف إسلامية", "ألوان دافئة", "تصميم أصيل"]
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الأعمال' },
    { id: 'modern', name: 'عصري' },
    { id: 'classic', name: 'كلاسيكي' },
    { id: 'small', name: 'مساحات صغيرة' },
    { id: 'american', name: 'أمريكي' },
    { id: 'traditional', name: 'تراثي' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف مجموعة من أحدث مشاريعنا المنجزة في مختلف أنحاء الرياض
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'gradient-gold text-white shadow-gold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-scale"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-gold-100 to-brown-100 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-gold-500 rounded-full ml-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Project Button */}
                <button className="w-full mt-6 gradient-gold text-white py-3 rounded-lg font-semibold hover:shadow-gold transition-all">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brown-600 to-brown-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل أعجبك عملنا؟</h3>
            <p className="mb-6 text-lg">دعنا نصمم لك مطبخ أحلامك بنفس مستوى الجودة والإتقان</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+966501234567')}
                className="bg-gold-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-gold-600 transition-all hover-scale"
              >
                اطلب تصميم مجاني
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-brown-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all hover-scale"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
