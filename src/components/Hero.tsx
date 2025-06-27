
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-brown-50 opacity-60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D4AF37\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-brown-800 mb-6 leading-tight">
              تفصيل مطابخ الرياض
              <span className="block text-gold-600 text-3xl md:text-4xl mt-2">
                حسب الطلب والذوق
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              نحن متخصصون في تفصيل وتصميم المطابخ العصرية والكلاسيكية بأعلى جودة وأفضل الأسعار في الرياض. 
              خبرة تزيد عن 15 عاماً في عالم المطابخ والتصميم الداخلي.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="gradient-gold text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-gold transition-all hover-scale"
              >
                احصل على استشارة مجانية
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gold-600 text-gold-600 px-8 py-6 text-lg font-semibold rounded-xl hover:bg-gold-600 hover:text-white transition-all"
                onClick={() => window.open('tel:+966501234567')}
              >
                اتصل الآن
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-gold-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-gold-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">مطبخ منجز</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-gold-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gold-100 to-brown-100 rounded-2xl p-8 text-center shadow-lg hover-scale">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="font-bold text-brown-800 mb-2">مطابخ حديثة</h3>
                  <p className="text-sm text-gray-600">تصاميم عصرية ومبتكرة</p>
                </div>
                <div className="bg-gradient-to-br from-brown-100 to-gold-100 rounded-2xl p-8 text-center shadow-lg hover-scale">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="font-bold text-brown-800 mb-2">تصميم مخصص</h3>
                  <p className="text-sm text-gray-600">حسب ذوقك ومساحتك</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-gold-200 to-brown-200 rounded-2xl p-8 text-center shadow-lg hover-scale">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-brown-800 mb-2">تنفيذ سريع</h3>
                  <p className="text-sm text-gray-600">خلال أسبوعين فقط</p>
                </div>
                <div className="bg-gradient-to-br from-brown-200 to-gold-200 rounded-2xl p-8 text-center shadow-lg hover-scale">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-bold text-brown-800 mb-2">جودة عالية</h3>
                  <p className="text-sm text-gray-600">خامات مستوردة فاخرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
