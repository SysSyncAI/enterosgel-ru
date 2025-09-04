import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isUsesOpen, setIsUsesOpen] = useState(false);
  const [language, setLanguage] = useState('ru');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Энтеросгель</div>
              <div className="text-xs text-gray-500">enterosgel.ru</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              aria-label="Перейти на главную страницу"
            >
              Главная
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
                aria-label="Меню о препарате"
              >
                О препарате <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div 
                  className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border mt-1 z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                  role="menu"
                  aria-label="Подменю о препарате"
                >
                  <Link 
                    to="/instruction" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Инструкция по применению Энтеросгель"
                  >
                    Инструкция по применению
                  </Link>
                  <Link 
                    to="/composition" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Состав препарата Энтеросгель"
                  >
                    Состав
                  </Link>
                  <Link 
                    to="/action" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Механизм действия Энтеросгель"
                  >
                    Механизм действия
                  </Link>
                  <Link 
                    to="/contraindications" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Противопоказания к применению"
                  >
                    Противопоказания
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onMouseEnter={() => setIsUsesOpen(true)}
                onMouseLeave={() => setIsUsesOpen(false)}
                aria-haspopup="true"
                aria-expanded={isUsesOpen}
                aria-label="Меню применение препарата"
              >
                Применение <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isUsesOpen && (
                <div 
                  className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border mt-1 z-50"
                  onMouseEnter={() => setIsUsesOpen(true)}
                  onMouseLeave={() => setIsUsesOpen(false)}
                  role="menu"
                  aria-label="Подменю применение"
                >
                  <Link 
                    to="/pregnancy" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение при беременности"
                  >
                    При беременности
                  </Link>
                  <Link 
                    to="/children" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение для детей"
                  >
                    Для детей
                  </Link>
                  <Link 
                    to="/allergy" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение при аллергии"
                  >
                    При аллергии
                  </Link>
                  <Link 
                    to="/poisoning" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение при отравлениях"
                  >
                    При отравлениях
                  </Link>
                  <Link 
                    to="/diarrhea" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение при диарее"
                  >
                    При диарее
                  </Link>
                  <Link 
                    to="/skin-issues" 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    role="menuitem"
                    aria-label="Применение при кожных проблемах"
                  >
                    При кожных проблемах
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/library" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/library') ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              aria-label="Библиотека медицинских статей"
            >
              Библиотека
            </Link>
            <Link 
              to="/faq" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/faq') ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              aria-label="Часто задаваемые вопросы и ответы"
            >
              Вопросы и ответы
            </Link>
            <Link 
              to="/reviews" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/reviews') ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              aria-label="Отзывы пациентов о препарате"
            >
              Отзывы
            </Link>
            <Link 
              to="/where-to-buy" 
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium ${isActive('/where-to-buy') ? 'bg-blue-700' : ''}`}
              aria-label="Найти где купить Энтеросгель"
            >
              Где купить
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="h-4 w-4 text-gray-500" />
              <button 
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                RU
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Главная</Link>
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">О препарате</div>
                <div className="pl-4 space-y-1">
                  <Link to="/instruction" className="block py-1 text-gray-600 hover:text-blue-600">Инструкция</Link>
                  <Link to="/composition" className="block py-1 text-gray-600 hover:text-blue-600">Состав</Link>
                  <Link to="/action" className="block py-1 text-gray-600 hover:text-blue-600">Механизм действия</Link>
                  <Link to="/contraindications" className="block py-1 text-gray-600 hover:text-blue-600">Противопоказания</Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Применение</div>
                <div className="pl-4 space-y-1">
                  <Link to="/pregnancy" className="block py-1 text-gray-600 hover:text-blue-600">При беременности</Link>
                  <Link to="/children" className="block py-1 text-gray-600 hover:text-blue-600">Для детей</Link>
                  <Link to="/allergy" className="block py-1 text-gray-600 hover:text-blue-600">При аллергии</Link>
                  <Link to="/poisoning" className="block py-1 text-gray-600 hover:text-blue-600">При отравлениях</Link>
                  <Link to="/diarrhea" className="block py-1 text-gray-600 hover:text-blue-600">При диарее</Link>
                  <Link to="/skin-issues" className="block py-1 text-gray-600 hover:text-blue-600">При кожных проблемах</Link>
                </div>
              </div>
              <Link to="/library" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Библиотека</Link>
              <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Вопросы и ответы</Link>
              <Link to="/reviews" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Отзывы</Link>
              <Link to="/where-to-buy" className="block mx-4 my-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-center">Где купить</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;