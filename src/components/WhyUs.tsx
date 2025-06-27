
import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      title: "خبرة تزيد عن 15 عاماً",
      description: "فريق من المتخصصين ذوي الخبرة الطويلة في مجال تفصيل وتصميم المطابخ",
      icon: "⭐",
      stats: "15+ سنة"
    },
    {
      title: "ضمان شامل لمدة 5 سنوات",
      description: "نقدم ضمان شامل على جميع أعمالنا يشمل التصنيع والتركيب والصيانة",
      icon: "🛡️",
      stats: "5 سنوات"
    },
    {
      title: "خامات مستوردة فاخرة",
      description: "نستخدم أفضل الخامات المستوردة من تركيا وألمانيا وإيطاليا",
      icon: "💎",
      stats: "100% مستورد"
    },
    {
      title: "تنفيذ سريع ودقيق",
      description: "نلتزم بالمواعيد المحددة ونسلم المشاريع في الوقت المتفق عليه",
      icon: "⚡",
      stats: "2 أسبوع"
    },
    {
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في السوق مع جودة لا تقبل المنافسة",
      icon: "💰",
      stats: "أفضل سعر"
    },
    {
      title: "خدمة عملاء متميزة",
      description: "فريق خدمة عملاء متاح 24/7 لمساعدتك والإجابة على استفساراتك",
      icon: "🎯",
      stats: "24/7"
    }
  ];

  const achievements = [
    { number: "500+", label: "مطبخ منجز" },
    { number: "98%", label: "رضا العملاء" },
    { number: "15+", label: "سنة خبرة" },
    { number: "24/7", label: "خدمة العملاء" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن الخيار الأول للعملاء في الرياض لتفصيل المطابخ بأعلى جودة وأفضل الأسعار
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
                {achievement.number}
              </div>
              <div className="text-brown-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <div className="text-2xl font-bold text-gold-600 mb-2">{reason.stats}</div>
              </div>
              
              <h3 className="text-xl font-bold text-brown-800 mb-4 text-center">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-gold">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
            "أفضل شركة تفصيل مطابخ في الرياض. جودة عالية، التزام بالمواعيد، وخدمة عملاء ممتازة"
          </blockquote>
          <div className="flex justify-center items-center space-x-4 space-x-reverse">
            <div>
              <div className="font-bold text-lg">أحمد السالم</div>
              <div className="text-gold-100">عميل راضي</div>
            </div>
            <div className="flex space-x-1 space-x-reverse">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-300 text-xl">⭐</span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-brown-800 mb-6">
            جاهز لتصميم مطبخ أحلامك؟
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:+966501234567')}
              className="gradient-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-gold transition-all hover-scale"
            >
              اتصل الآن واحصل على خصم 15%
            </button>
            <button 
              onClick={() => window.open('https://wa.me/966501234567')}
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all hover-scale"
            >
              تواصل عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
