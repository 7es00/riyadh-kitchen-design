
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحباً، أريد الاستفسار عن خدماتكم:
    
الاسم: ${formData.name}
الهاتف: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
الرسالة: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 50 123 4567", "+966 11 123 4567"],
      action: () => window.open('tel:+966501234567')
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@kitchens-riyadh.com", "sales@kitchens-riyadh.com"],
      action: () => window.open('mailto:info@kitchens-riyadh.com')
    },
    {
      icon: MapPin,
      title: "موقعنا",
      details: ["الرياض، المملكة العربية السعودية", "نخدم جميع أحياء الرياض"],
      action: () => {}
    },
    {
      icon: Instagram,
      title: "وسائل التواصل",
      details: ["@kitchens_riyadh", "تابعنا لمشاهدة أحدث أعمالنا"],
      action: () => window.open('https://instagram.com/kitchens_riyadh')
    }
  ];

  const workingHours = [
    { day: "السبت - الأربعاء", hours: "8:00 ص - 10:00 م" },
    { day: "الخميس", hours: "8:00 ص - 12:00 م" },
    { day: "الجمعة", hours: "مغلق" },
    { day: "خدمة الطوارئ", hours: "24/7" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق حلم المطبخ المثالي. تواصل معنا عبر أي من الطرق التالية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brown-800 mb-6">طرق التواصل المتاحة</h3>
            
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover-scale cursor-pointer"
                onClick={method.action}
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="p-3 gradient-gold rounded-lg">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brown-800 mb-2">{method.title}</h4>
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-brown-600 to-brown-700 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">أوقات العمل</h4>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gold-300">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.open('https://wa.me/966501234567')}
                className="bg-green-500 text-white p-4 rounded-xl font-bold hover:bg-green-600 transition-all hover-scale"
              >
                <div className="text-2xl mb-2">📱</div>
                واتساب
              </button>
              <button 
                onClick={() => window.open('tel:+966501234567')}
                className="gradient-gold text-white p-4 rounded-xl font-bold hover:shadow-gold transition-all hover-scale"
              >
                <div className="text-2xl mb-2">📞</div>
                اتصال مباشر
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brown-800 mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-brown-800 font-medium mb-2">الاسم *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full"
                    placeholder="اكتب اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-brown-800 font-medium mb-2">رقم الهاتف *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full"
                    placeholder="05XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brown-800 font-medium mb-2">البريد الإلكتروني</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full"
                  placeholder="example@email.com"
                />  
              </div>

              <div>
                <label className="block text-brown-800 font-medium mb-2">نوع الخدمة المطلوبة *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold-500 focus:ring-gold-500"
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="تفصيل مطبخ جديد">تفصيل مطبخ جديد</option>
                  <option value="مطبخ جاهز">مطبخ جاهز</option>
                  <option value="تجديد مطبخ">تجديد مطبخ</option>
                  <option value="صيانة">صيانة</option>
                  <option value="شراء أثاث مستعمل">شراء أثاث مستعمل</option>
                  <option value="استشارة">استشارة</option>
                </select>
              </div>

              <div>
                <label className="block text-brown-800 font-medium mb-2">الرسالة</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full"
                  rows={4}
                  placeholder="اكتب تفاصيل طلبك أو أي استفسارات أخرى..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full gradient-gold text-white py-6 text-lg font-bold rounded-xl hover:shadow-gold transition-all"
              >
                إرسال الرسالة عبر واتساب
              </Button>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">🚨 خدمة الطوارئ</h3>
            <p className="mb-4">للحالات الطارئة والصيانة العاجلة - متاح 24 ساعة</p>
            <button 
              onClick={() => window.open('tel:+966501234567')}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              اتصال طوارئ: 050 123 4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
