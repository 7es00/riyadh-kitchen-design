
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-brown-800 to-brown-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">م</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">مطابخ الرياض</h3>
                <p className="text-gold-300 text-sm">تفصيل وتصميم</p>
              </div>
            </div>
            <p className="text-brown-200 mb-6 leading-relaxed">
              نحن متخصصون في تفصيل وتصميم المطابخ العصرية والكلاسيكية بأعلى جودة وأفضل الأسعار في الرياض منذ أكثر من 15 عاماً.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <button 
                onClick={() => window.open('https://instagram.com/kitchens_riyadh')}
                className="p-2 bg-brown-700 rounded-lg hover:bg-brown-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://wa.me/966501234567')}
                className="p-2 bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
              >
                <span className="text-sm font-bold">W</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-300">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-brown-200 hover:text-gold-300 transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-brown-200 hover:text-gold-300 transition-colors"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-brown-200 hover:text-gold-300 transition-colors"
                >
                  كيف نعمل
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-brown-200 hover:text-gold-300 transition-colors"
                >
                  أعمالنا
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-brown-200 hover:text-gold-300 transition-colors"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-300">خدماتنا</h4>
            <ul className="space-y-3 text-brown-200">
              <li>• تفصيل مطابخ حسب الطلب</li>
              <li>• مطابخ جاهزة للتركيب</li>
              <li>• تجديد وصيانة المطابخ</li>
              <li>• تصميم ثلاثي الأبعاد</li>
              <li>• شراء الأثاث المستعمل</li>
              <li>• استشارات تصميم مجانية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold-300">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-gold-300" />
                <div>
                  <p className="text-brown-200">+966 50 123 4567</p>
                  <p className="text-brown-200">+966 11 123 4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-gold-300 mt-1" />
                <div>
                  <p className="text-brown-200">info@kitchens-riyadh.com</p>
                  <p className="text-brown-200">sales@kitchens-riyadh.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-gold-300 mt-1" />
                <div>
                  <p className="text-brown-200">الرياض، المملكة العربية السعودية</p>
                  <p className="text-brown-200 text-sm">نخدم جميع أحياء الرياض</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-brown-700 rounded-lg">
              <h5 className="font-bold text-gold-300 mb-2">أوقات العمل</h5>
              <p className="text-sm text-brown-200">
                السبت - الأربعاء: 8:00 ص - 10:00 م<br/>
                الخميس: 8:00 ص - 12:00 م<br/>
                الجمعة: مغلق<br/>
                <span className="text-gold-300">طوارئ: 24/7</span>
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-brown-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-gold-300 mb-4">الكلمات المفتاحية</h4>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {[
                "تفصيل مطابخ الرياض", "مطابخ جاهزة الرياض", "تصميم مطابخ", "مطابخ حديثة",
                "مطابخ خشب الرياض", "مطابخ الوميتال", "نجار مطابخ الرياض", "مطابخ كلاسيكية",
                "تجديد مطابخ", "صيانة مطابخ", "مطابخ عصرية", "مطابخ فاخرة الرياض",
                "تفصيل مطابخ حسب الطلب", "مطابخ أمريكية", "مطابخ صغيرة", "تصميم مطابخ ثلاثي الأبعاد"
              ].map((keyword, index) => (
                <span key={index} className="bg-brown-700 text-brown-200 px-3 py-1 rounded-full text-xs">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brown-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-brown-300 text-sm mb-4 md:mb-0">
              © 2024 مطابخ الرياض - جميع الحقوق محفوظة
            </div>
            <div className="flex space-x-6 space-x-reverse text-sm text-brown-300">
              <span>سياسة الخصوصية</span>
              <span>شروط الخدمة</span>
              <span>ضمان الجودة</span>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-6 p-4 bg-gradient-to-r from-gold-600 to-gold-500 rounded-lg">
            <p className="font-bold mb-2">هل تريد مطبخ أحلامك؟ اتصل الآن!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.open('tel:+966501234567')}
                className="bg-white text-gold-600 px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                اتصل: 050 123 4567
              </button>
              <button 
                onClick={() => window.open('https://wa.me/966501234567')}
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition-all"
              >
                واتساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
