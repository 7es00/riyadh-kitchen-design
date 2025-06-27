
import React from 'react';

const ServiceArea = () => {
  const areas = [
    "شمال الرياض", "جنوب الرياض", "شرق الرياض", "غرب الرياض",
    "وسط الرياض", "حي العليا", "حي المرسلات", "حي الملقا",
    "حي الياسمين", "حي النرجس", "حي الورود", "حي الملك فهد",
    "حي السليمانية", "حي المالقة", "حي الصحافة", "حي القدس",
    "حي الروضة", "حي الفلاح", "حي البديعة", "حي المنصورة"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            نطاق خدماتنا في الرياض
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدماتنا في جميع أحياء الرياض مع خدمة المعاينة والتوصيل المجاني
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gold-100 to-brown-100 rounded-2xl p-8 text-center shadow-lg min-h-[400px] flex flex-col justify-center">
              <div className="text-8xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold text-brown-800 mb-4">خريطة الخدمة</h3>
              <p className="text-gray-600 mb-6">
                نغطي جميع أحياء الرياض الرئيسية والفرعية
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-gold-600 font-bold">📍 الشمال</div>
                  <div className="text-gray-600">15 حي</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-gold-600 font-bold">📍 الجنوب</div>
                  <div className="text-gray-600">12 حي</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-gold-600 font-bold">📍 الشرق</div>
                  <div className="text-gray-600">18 حي</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-gold-600 font-bold">📍 الغرب</div>
                  <div className="text-gray-600">20 حي</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-brown-800 mb-8">الأحياء المشمولة بالخدمة</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-gradient-to-r from-white to-gold-50 rounded-lg shadow-sm hover:shadow-md transition-all hover-scale"
                >
                  <span className="w-3 h-3 bg-gold-500 rounded-full ml-3"></span>
                  <span className="text-brown-800 font-medium">{area}</span>
                </div>
              ))}
            </div>

            {/* Service Features */}
            <div className="bg-gradient-to-br from-brown-600 to-brown-700 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">خدمات مجانية لجميع المناطق</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-gold-300 ml-3">✓</span>
                  معاينة مجانية في الموقع
                </li>
                <li className="flex items-center">
                  <span className="text-gold-300 ml-3">✓</span>
                  استشارة تصميم مجانية
                </li>
                <li className="flex items-center">
                  <span className="text-gold-300 ml-3">✓</span>
                  توصيل وتركيب مجاني
                </li>
                <li className="flex items-center">
                  <span className="text-gold-300 ml-3">✓</span>
                  خدمة ما بعد البيع
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl">
            <div className="text-3xl font-bold text-gold-600 mb-2">65+</div>
            <div className="text-brown-600 font-medium">حي مشمول</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-brown-50 to-brown-100 rounded-2xl">
            <div className="text-3xl font-bold text-brown-600 mb-2">100%</div>
            <div className="text-brown-600 font-medium">تغطية الرياض</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl">
            <div className="text-3xl font-bold text-gold-600 mb-2">24/7</div>
            <div className="text-brown-600 font-medium">خدمة عملاء</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-brown-50 to-brown-100 rounded-2xl">
            <div className="text-3xl font-bold text-brown-600 mb-2">مجاني</div>
            <div className="text-brown-600 font-medium">المعاينة</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-gold">
            <h3 className="text-2xl font-bold mb-4">هل منطقتك مشمولة؟</h3>
            <p className="mb-6 text-lg">
              اتصل بنا الآن للتأكد من تغطية منطقتك واحصل على معاينة مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+966501234567')}
                className="bg-white text-gold-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover-scale"
              >
                اتصل للاستفسار
              </button>
              <button 
                onClick={() => window.open('https://wa.me/966501234567')}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-all hover-scale"
              >
                واتساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
