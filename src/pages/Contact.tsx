import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    userType: 'patient'
  });

  const subjects = [
    { id: 'general', name: 'Общий вопрос' },
    { id: 'medical', name: 'Медицинская консультация' },
    { id: 'side-effects', name: 'Побочные эффекты' },
    { id: 'dosage', name: 'Дозировка и применение' },
    { id: 'availability', name: 'Наличие в аптеках' },
    { id: 'cooperation', name: 'Сотрудничество' },
    { id: 'complaint', name: 'Жалоба' },
    { id: 'suggestion', name: 'Предложение' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      userType: 'patient'
    });
    alert('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-600">
            Свяжитесь с нами для получения консультации или дополнительной информации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Contacts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Основные контакты</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Горячая линия</div>
                    <div className="text-blue-600 text-lg font-semibold">8-800-123-45-67</div>
                    <div className="text-sm text-gray-600">Бесплатно по России</div>
                    <div className="text-sm text-gray-600">Пн-Пт: 9:00-18:00 МСК</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-blue-600">info@enterosgel.ru</div>
                    <div className="text-sm text-gray-600">Ответ в течение 24 часов</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Адрес</div>
                    <div className="text-gray-700">г. Москва, ул. Примерная, д. 123</div>
                    <div className="text-sm text-gray-600">Головной офис</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Режим работы</div>
                    <div className="text-gray-700">Пн-Пт: 9:00-18:00</div>
                    <div className="text-gray-700">Сб-Вс: выходной</div>
                    <div className="text-sm text-gray-600">Московское время</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Contacts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Специализированные отделы</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="font-medium text-gray-900">Медицинская информация</div>
                  <div className="text-green-600">medical@enterosgel.ru</div>
                  <div className="text-sm text-gray-600">Для врачей и фармацевтов</div>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-medium text-gray-900">Отдел качества</div>
                  <div className="text-blue-600">quality@enterosgel.ru</div>
                  <div className="text-sm text-gray-600">Жалобы и предложения</div>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-4">
                  <div className="font-medium text-gray-900">Сотрудничество</div>
                  <div className="text-purple-600">partnership@enterosgel.ru</div>
                  <div className="text-sm text-gray-600">Деловые предложения</div>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4">
                  <div className="font-medium text-gray-900">Пресс-служба</div>
                  <div className="text-orange-600">press@enterosgel.ru</div>
                  <div className="text-sm text-gray-600">Для СМИ</div>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">Экстренные случаи</h3>
              <p className="text-red-800 text-sm mb-3">
                При серьезных побочных эффектах или передозировке немедленно обратитесь к врачу или вызовите скорую помощь.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-red-800">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Скорая помощь: 103</span>
                </div>
                <div className="flex items-center text-red-800">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Экстренная линия: 8-800-100-01-03</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Написать нам</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Вы являетесь *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="userType"
                        value="patient"
                        checked={formData.userType === 'patient'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <User className="h-5 w-5 text-gray-600 mr-2" />
                      <span>Пациентом</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="userType"
                        value="doctor"
                        checked={formData.userType === 'doctor'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <Building className="h-5 w-5 text-gray-600 mr-2" />
                      <span>Врачом</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="userType"
                        value="pharmacist"
                        checked={formData.userType === 'pharmacist'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <Building className="h-5 w-5 text-gray-600 mr-2" />
                      <span>Фармацевтом</span>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Введите ваш email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Тема обращения *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>
                          {subject.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Опишите ваш вопрос или проблему подробно..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Отправляя форму, вы соглашаетесь с обработкой персональных данных в соответствии с 
                    <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">Политикой конфиденциальности</a>.
                    Мы используем ваши данные только для ответа на ваше обращение.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Возможно, ответ уже есть в FAQ?
          </h3>
          <p className="text-gray-600 mb-6">
            Ознакомьтесь с часто задаваемыми вопросами — возможно, вы найдете ответ быстрее
          </p>
          <a
            href="/faq"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Перейти к FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;