
import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "أحمد السالم",
      location: "شمال الرياض",
      rating: 5,
      comment: "خدمة ممتازة وجودة عالية جداً. المطبخ تم تسليمه في الموعد المحدد والنتيجة فاقت توقعاتي. أنصح بالتعامل معهم بكل ثقة.",
      project: "مطبخ عصري",
      date: "منذ شهر"
    },
    {
      name: "فاطمة العتيبي", 
      location: "غرب الرياض",
      rating: 5,
      comment: "تعامل راقي ومهني من البداية للنهاية. الفريق محترف جداً والتصميم كان رائع. المطبخ أصبح قلب البيت فعلاً.",
      project: "مطبخ أمريكي",
      date: "منذ أسبوعين"
    },
    {
      name: "محمد الخالد",
      location: "شرق الرياض", 
      rating: 5,
      comment: "أفضل استثمار قمت به في البيت. جودة الخامات عالية جداً والتنفيذ كان مثالي. شكراً لكم على هذا العمل المتميز.",
      project: "مطبخ كلاسيكي",
      date: "منذ 3 أسابيع"
    },
    {
      name: "نورا المطيري",
      location: "جنوب الرياض",
      rating: 5, 
      comment: "تجربة رائعة من الألف للياء. الاستشارة كانت مجانية ومفيدة والتصميم كان بديع. أنصح كل من يريد مطبخ مميز.",
      project: "مطبخ صغير",
      date: "منذ أسبوع"
    },
    {
      name: "عبدالله الدوسري",
      location: "وسط الرياض",
      rating: 5,
      comment: "صراحة ما توقعت النتيجة تكون بهذا الجمال. الفريق شغال بضمير وحرفية عالية. المطبخ صار أجمل مكان في البيت.",
      project: "مطبخ معاصر", 
      date: "منذ 5 أيام"
    },
    {
      name: "سارة الغامدي",
      location: "الرياض",
      rating: 5,
      comment: "خدمة عملاء ممتازة وسرعة في الرد. التصميم ثلاثي الأبعاد ساعدني أشوف المطبخ قبل التنفيذ. النتيجة كانت مطابقة للتصميم 100%.",
      project: "مطبخ تراثي",
      date: "منذ يومين"
    }
  ];

  const stats = [
    { number: "500+", label: "عميل سعيد" },
    { number: "98%", label: "نسبة الرضا" },
    { number: "4.9", label: "التقييم" },
    { number: "15+", label: "سنة خبرة" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 to-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آراء وتقييمات عملائنا الكرام الذين وثقوا بنا لتنفيذ مطابخ أحلامهم
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
                {stat.number}
              </div>
              <div className="text-brown-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-brown-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <div className="flex space-x-1 space-x-reverse">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-lg">⭐</span>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full">
                  {review.project}
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white text-center shadow-gold">
          <div className="flex justify-center items-center mb-4">
            <div className="text-6xl font-bold ml-4">4.9</div>
            <div>
              <div className="flex space-x-1 space-x-reverse mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gold-100">من أصل 5 نجوم</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">تقييم عام ممتاز</h3>
          <p className="text-lg text-gold-100 mb-6">
            بناءً على آراء أكثر من 500 عميل راضي
          </p>
          
          {/* Review Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            {[
              { stars: 5, percentage: 95 },
              { stars: 4, percentage: 4 },
              { stars: 3, percentage: 1 },
              { stars: 2, percentage: 0 },
              { stars: 1, percentage: 0 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <span className="text-sm ml-2">{item.stars}</span>
                  <span className="text-yellow-300">⭐</span>
                </div>
                <div className="bg-white/20 rounded-full h-2 mb-1">
                  <div 
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gold-100">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-brown-800 mb-4">
            انضم لعملائنا السعداء
          </h3>
          <p className="text-gray-600 mb-8">
            احصل على مطبخ أحلامك واكتب تجربتك معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:+966501234567')}
              className="gradient-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-gold transition-all hover-scale"
            >
              ابدأ مشروعك الآن
            </button>
            <button 
              onClick={() => window.open('https://wa.me/966501234567')}
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all hover-scale"
            >
              تواصل واتساب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
