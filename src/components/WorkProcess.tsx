
import React from 'react';

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      title: "الاتصال والاستشارة",
      description: "تواصل معنا عبر الهاتف أو واتساب للحصول على استشارة مجانية وتحديد احتياجاتك",
      icon: "📞",
      details: ["استشارة مجانية", "تحديد المتطلبات", "جدولة الموعد"]
    },
    {
      number: "02", 
      title: "المعاينة والقياس",
      description: "زيارة مجانية لمعاينة المكان وأخذ القياسات الدقيقة وفهم احتياجاتك بشكل أفضل",
      icon: "📏",
      details: ["زيارة مجانية", "قياسات دقيقة", "تقييم المساحة"]
    },
    {
      number: "03",
      title: "التصميم والعرض",
      description: "إعداد التصميم ثلاثي الأبعاد وعرض السعر مع جميع التفاصيل والمواصفات",
      icon: "🎨",
      details: ["تصميم ثلاثي الأبعاد", "عرض سعر مفصل", "اختيار الخامات"]
    },
    {
      number: "04",
      title: "الموافقة والعقد",
      description: "مراجعة التصميم والسعر معك وتوقيع العقد بعد الموافقة على جميع التفاصيل",
      icon: "✅",
      details: ["مراجعة التصميم", "توقيع العقد", "تحديد مواعيد التنفيذ"]
    },
    {
      number: "05",
      title: "التصنيع والإنتاج",
      description: "بدء عملية التصنيع في ورشتنا المجهزة بأحدث المعدات وأفضل الخامات",
      icon: "🏭",
      details: ["تصنيع احترافي", "خامات عالية الجودة", "مراقبة الجودة"]
    },
    {
      number: "06",
      title: "التركيب والتسليم",
      description: "تركيب المطبخ بواسطة فريق متخصص وتسليمه جاهزاً للاستخدام مع الضمان",
      icon: "🔨",
      details: ["تركيب احترافي", "فحص نهائي", "ضمان شامل"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            كيف نعمل معك
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتبع عملية منظمة ومدروسة لضمان الحصول على أفضل النتائج وتحقيق رضاك التام
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Step Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl ml-4">{step.icon}</div>
                      <div>
                        <span className="text-gold-600 font-bold text-lg">الخطوة {step.number}</span>
                        <h3 className="text-xl font-bold text-brown-800">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-gold-500 rounded-full ml-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white text-center shadow-gold">
            <h3 className="text-2xl font-bold mb-4">🎯 خدمة شراء الأثاث المستعمل</h3>
            <p className="mb-4">نشتري مطبخك القديم بأفضل الأسعار</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ تقييم مجاني ومنصف</li>
              <li>✓ فك ونقل مجاني</li>
              <li>✓ دفع فوري</li>
            </ul>
            <button className="bg-white text-gold-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
              اطلب تقييم مجاني
            </button>
          </div>

          <div className="bg-gradient-to-br from-brown-600 to-brown-700 rounded-2xl p-8 text-white text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🛠️ خدمة التجديد والصيانة</h3>
            <p className="mb-4">جدد مطبخك القديم بدلاً من استبداله</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ توفير في التكلفة</li>
              <li>✓ تجديد كامل</li>
              <li>✓ ضمان على الأعمال</li>
            </ul>
            <button className="bg-white text-brown-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
              احصل على عرض سعر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
