import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Heart, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Энтеросгель</span>
                <br />
                Ваша защита изнутри
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Современный энтеросорбент для выведения токсинов, аллергенов, бактерий 
                и вредных веществ из организма. Безопасен для всей семьи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/instruction" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Инструкция по применению
                </Link>
                <Link 
                  to="/where-to-buy" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium text-center"
                >
                  Где купить
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Энтеросгель паста - современный энтеросорбент в упаковке, безопасный препарат для выведения токсинов из организма"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  role="img"
                  aria-describedby="product-description"
                />
                <div className="mt-4 text-center">
                  <div id="product-description" className="text-lg font-semibold text-gray-900">Энтеросгель паста</div>
                  <div className="text-gray-600">Туба 225г</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают Энтеросгель?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Энтеросгель — это проверенный временем энтеросорбент с уникальными свойствами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безопасность</h3>
              <p className="text-gray-600">
                Не всасывается в кишечнике, безопасен для беременных и детей с рождения
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Эффективность</h3>
              <p className="text-gray-600">
                Селективно связывает только вредные вещества, не влияя на полезную микрофлору
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Универсальность</h3>
              <p className="text-gray-600">
                Помогает при отравлениях, аллергии, диарее и других расстройствах
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Для всей семьи</h3>
              <p className="text-gray-600">
                Подходит для взрослых, детей, беременных и кормящих мам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Когда применяется Энтеросгель
            </h2>
            <p className="text-xl text-gray-600">
              Широкий спектр применения для различных ситуаций
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/poisoning" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">При отравлениях</h3>
              <p className="text-gray-600 mb-4">
                Пищевые отравления, алкогольная интоксикация, отравления лекарствами
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/allergy" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <Heart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">При аллергии</h3>
              <p className="text-gray-600 mb-4">
                Пищевая аллергия, крапивница, атопический дерматит
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/diarrhea" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">При диарее</h3>
              <p className="text-gray-600 mb-4">
                Острая и хроническая диарея различного происхождения
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/pregnancy" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">При беременности</h3>
              <p className="text-gray-600 mb-4">
                Безопасное применение во время беременности и лактации
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/children" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Для детей</h3>
              <p className="text-gray-600 mb-4">
                Безопасное применение с рождения, детские дозировки
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/skin-issues" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">При кожных проблемах</h3>
              <p className="text-gray-600 mb-4">
                Акне, экзема, псориаз — очищение организма изнутри
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">стран мира</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">исследований</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">довольных пациентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят те, кто уже попробовал Энтеросгель
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Энтеросгель всегда есть в нашей аптечке. Помогает всей семье при различных проблемах с пищеварением. Особенно выручает в путешествиях."
              </p>
              <div className="text-sm font-medium text-gray-900">Анна К., Москва</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Использовала во время беременности при токсикозе. Врач разрешил, и средство действительно помогло. Теперь даю ребенку при необходимости."
              </p>
              <div className="text-sm font-medium text-gray-900">Елена М., СПб</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Как врач рекомендую Энтеросгель своим пациентам. Безопасный и эффективный препарат с доказанным действием."
              </p>
              <div className="text-sm font-medium text-gray-900">Д-р Иванов В.А.</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/reviews" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Читать все отзывы <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Остались вопросы о препарате?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите консультацию специалиста или изучите подробную информацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/faq" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Вопросы и ответы
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;