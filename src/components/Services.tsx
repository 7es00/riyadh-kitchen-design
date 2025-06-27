
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "تفصيل مطابخ حسب الطلب",
      description: "نقوم بتفصيل المطابخ حسب مساحتك ومتطلباتك الخاصة مع أفضل التصاميم العصرية والكلاسيكية",
      icon: "🏗️",
      features: ["قياس دقيق للمساحة", "تصميم ثلاثي الأبعاد", "اختيار الخامات", "تركيب احترافي"]
    },
    {
      title: "مطابخ جاهزة للتركيب",
      description: "مجموعة متنوعة من المطابخ الجاهزة بتصاميم عصرية وأسعار تنافسية",
      icon: "📦",
      features: ["تصاميم متنوعة", "جودة عالية", "أسعار مناسبة", "تركيب فوري"]
    },
    {
      title: "تجديد وصيانة المطابخ",
      description: "خدمات تجديد وصيانة المطابخ القديمة وإعادة تأهيلها بأحدث الطرق",
      icon: "🔧",
      features: ["إصلاح الأضرار", "تغيير الواجهات", "تحديث الإكسسوارات", "صيانة دورية"]
    },
    {
      title: "تصميم مطابخ ثلاثي الأبعاد",
      description: "تصميم مطبخك بتقنية ثلاثية الأبعاد لرؤية النتيجة النهائية قبل التنفيذ",
      icon: "💻",
      features: ["تصميم واقعي", "رؤية شاملة", "تعديلات مجانية", "تصور كامل"]
    },
    {
      title: "خامات مستوردة فاخرة",
      description: "نوفر أفضل الخامات المستوردة من تركيا وألمانيا وإيطاليا",
      icon: "💎",
      features: ["خشب طبيعي", "ألوميتال عالي الجودة", "رخام وجرانيت", "إكسسوارات فاخرة"]
    },
    {
      title: "شراء الأثاث المستعمل",
      description: "نشتري المطابخ والأثاث المستعمل بأفضل الأسعار مع تقييم مجاني",
      icon: "🔄",
      features: ["تقييم مجاني", "أسعار عادلة", "نقل مجاني", "فحص شامل"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات تفصيل وتصميم المطابخ لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-300 hover-scale border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-brown-800 mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-gold-500 rounded-full ml-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-gold">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج استشارة مجانية؟</h3>
            <p className="mb-6">احصل على استشارة مجانية من خبرائنا واكتشف أفضل الحلول لمطبخك</p>
            <button 
              onClick={() => window.open('tel:+966501234567')}
              className="bg-white text-gold-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover-scale"
            >
              اطلب استشارة مجانية الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
