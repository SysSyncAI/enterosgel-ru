import React, { useState } from 'react';
import { Search, Filter, Calendar, User, ArrowRight, BookOpen, Heart, Plane, Utensils, Stethoscope } from 'lucide-react';

const Library = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Все статьи', icon: BookOpen, count: 24 },
    { id: 'health', name: 'Здоровье', icon: Heart, count: 8 },
    { id: 'nutrition', name: 'Питание', icon: Utensils, count: 6 },
    { id: 'travel', name: 'Путешествия', icon: Plane, count: 4 },
    { id: 'expert', name: 'Советы экспертов', icon: Stethoscope, count: 6 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Детоксикация организма: мифы и реальность',
      excerpt: 'Разбираемся, что такое детоксикация на самом деле и как правильно очищать организм от токсинов.',
      category: 'health',
      author: 'Д-р Иванова А.С.',
      date: '2024-01-15',
      readTime: '5 мин',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Правильное питание для здоровья кишечника',
      excerpt: 'Какие продукты способствуют здоровью ЖКТ, а какие могут навредить. Практические рекомендации.',
      category: 'nutrition',
      author: 'Нутрициолог Петрова М.В.',
      date: '2024-01-12',
      readTime: '7 мин',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Аптечка путешественника: что взять с собой',
      excerpt: 'Список необходимых препаратов для поездок, включая средства от расстройств пищеварения.',
      category: 'travel',
      author: 'Врач-терапевт Сидоров И.П.',
      date: '2024-01-10',
      readTime: '4 мин',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Энтеросорбенты: принципы выбора и применения',
      excerpt: 'Как выбрать правильный энтеросорбент и когда его применять. Сравнение различных препаратов.',
      category: 'expert',
      author: 'Проф. Козлов В.А.',
      date: '2024-01-08',
      readTime: '8 мин',
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Пищевая аллергия у детей: современный подход',
      excerpt: 'Диагностика, лечение и профилактика пищевой аллергии в детском возрасте.',
      category: 'health',
      author: 'Педиатр-аллерголог Морозова Е.Н.',
      date: '2024-01-05',
      readTime: '6 мин',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Диарея путешественников: профилактика и лечение',
      excerpt: 'Как избежать проблем с пищеварением в поездках и что делать при их возникновении.',
      category: 'travel',
      author: 'Инфекционист Волков А.Р.',
      date: '2024-01-03',
      readTime: '5 мин',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Микрофлора кишечника и иммунитет',
      excerpt: 'Связь между состоянием кишечной микрофлоры и работой иммунной системы.',
      category: 'health',
      author: 'Иммунолог Лебедева О.С.',
      date: '2024-01-01',
      readTime: '7 мин',
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Суперфуды для здоровья ЖКТ',
      excerpt: 'Продукты, которые особенно полезны для пищеварительной системы и общего здоровья.',
      category: 'nutrition',
      author: 'Диетолог Соколова Т.И.',
      date: '2023-12-28',
      readTime: '4 мин',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Библиотека знаний
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Полезные статьи о здоровье, питании и применении энтеросорбентов
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск статей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="flex items-center mb-6">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Категории</h2>
              </div>
              
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-3" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        article.category === 'health' ? 'bg-red-100 text-red-800' :
                        article.category === 'nutrition' ? 'bg-green-100 text-green-800' :
                        article.category === 'travel' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{article.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      
                      <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                        Читать
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Статьи не найдены</h3>
                <p className="text-gray-600">
                  Попробуйте изменить критерии поиска или выбрать другую категорию
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredArticles.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Загрузить еще статьи
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Подпишитесь на новости
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Получайте новые статьи о здоровье, питании и применении энтеросорбентов прямо на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;