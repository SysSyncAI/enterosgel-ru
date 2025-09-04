import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <div className="text-xl font-bold">Энтеросгель</div>
                <div className="text-sm text-gray-400">enterosgel.ru</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Энтеросгель — современный энтеросорбент для выведения токсинов, 
              аллергенов и вредных веществ из организма.
            </p>
            <div className="text-xs text-gray-400">
              © 2024 Энтеросгель. Все права защищены.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li><Link to="/instruction" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Инструкция по применению препарата">Инструкция по применению</Link></li>
              <li><Link to="/composition" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Подробный состав препарата">Состав препарата</Link></li>
              <li><Link to="/action" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Как работает препарат">Механизм действия</Link></li>
              <li><Link to="/library" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Медицинские статьи и публикации">Библиотека статей</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Ответы на популярные вопросы">Вопросы и ответы</Link></li>
              <li><Link to="/where-to-buy" className="text-gray-300 hover:text-white transition-colors text-sm" aria-label="Аптеки и магазины где можно купить">Где купить</Link></li>
            </ul>
          </div>

          {/* Uses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Применение</h3>
            <ul className="space-y-3">
              <li><Link to="/pregnancy" className="text-gray-300 hover:text-white transition-colors text-sm">При беременности</Link></li>
              <li><Link to="/children" className="text-gray-300 hover:text-white transition-colors text-sm">Для детей</Link></li>
              <li><Link to="/allergy" className="text-gray-300 hover:text-white transition-colors text-sm">При аллергии</Link></li>
              <li><Link to="/poisoning" className="text-gray-300 hover:text-white transition-colors text-sm">При отравлениях</Link></li>
              <li><Link to="/diarrhea" className="text-gray-300 hover:text-white transition-colors text-sm">При диарее</Link></li>
              <li><Link to="/skin-issues" className="text-gray-300 hover:text-white transition-colors text-sm">При кожных проблемах</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">+7 (800) 123-45-67</div>
                  <div className="text-xs text-gray-400">Бесплатный звонок</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm">info@enterosgel.ru</div>
                  <div className="text-xs text-gray-400">Общие вопросы</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm">Пн-Пт: 9:00-18:00</div>
                  <div className="text-xs text-gray-400">МСК</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm">Москва, Россия</div>
                  <div className="text-xs text-gray-400">Головной офис</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              Информация на сайте предназначена для специалистов здравоохранения. 
              Имеются противопоказания. Необходима консультация специалиста.
            </div>
            <div className="flex space-x-6 text-xs text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;