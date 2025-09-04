import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Filter, User, Calendar, Send } from 'lucide-react';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    category: 'general',
    title: '',
    text: ''
  });

  const categories = [
    { id: 'all', name: 'Все отзывы' },
    { id: 'general', name: 'Общие' },
    { id: 'pregnancy', name: 'При беременности' },
    { id: 'children', name: 'Для детей' },
    { id: 'allergy', name: 'При аллергии' },
    { id: 'poisoning', name: 'При отравлениях' },
    { id: 'travel', name: 'В путешествиях' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна К.',
      location: 'Москва',
      date: '2024-01-15',
      rating: 5,
      category: 'general',
      title: 'Отличный препарат для всей семьи',
      text: 'Энтеросгель всегда есть в нашей домашней аптечке. Помогает при различных проблемах с пищеварением. Особенно выручает в путешествиях и при смене питания. Безопасен для детей, что очень важно.',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      name: 'Елена М.',
      location: 'Санкт-Петербург',
      date: '2024-01-12',
      rating: 5,
      category: 'pregnancy',
      title: 'Спасение при токсикозе',
      text: 'Во время беременности мучил сильный токсикоз. Врач посоветовала Энтеросгель. Уже через несколько дней стало намного легче. Тошнота практически прошла. Очень благодарна за этот препарат!',
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      name: 'Дмитрий С.',
      location: 'Екатеринбург',
      date: '2024-01-10',
      rating: 4,
      category: 'poisoning',
      title: 'Быстро помог при отравлении',
      text: 'Отравился в кафе, состояние было ужасное. Принял Энтеросгель по инструкции. Уже к вечеру стало значительно лучше. На следующий день был практически здоров. Рекомендую иметь дома.',
      helpful: 15,
      verified: false
    },
    {
      id: 4,
      name: 'Мария В.',
      location: 'Новосибирск',
      date: '2024-01-08',
      rating: 5,
      category: 'children',
      title: 'Безопасно для малышей',
      text: 'У ребенка (2 года) была диарея после антибиотиков. Педиатр назначил Энтеросгель. Очень переживала, но препарат оказался абсолютно безопасным. Ребенок нормально его принимал, и проблема быстро решилась.',
      helpful: 22,
      verified: true
    },
    {
      id: 5,
      name: 'Игорь Л.',
      location: 'Казань',
      date: '2024-01-05',
      rating: 4,
      category: 'allergy',
      title: 'Помогает при пищевой аллергии',
      text: 'Страдаю пищевой аллергией. Энтеросгель принимаю курсами для профилактики и при обострениях. Заметно уменьшает кожные проявления и улучшает общее самочувствие. Эффект накопительный.',
      helpful: 12,
      verified: false
    },
    {
      id: 6,
      name: 'Ольга Р.',
      location: 'Ростов-на-Дону',
      date: '2024-01-03',
      rating: 5,
      category: 'travel',
      title: 'Незаменим в поездках',
      text: 'Всегда беру Энтеросгель в поездки. В Турции у всей семьи началось расстройство желудка. Энтеросгель быстро поставил всех на ноги. Отпуск был спасен! Теперь это обязательный пункт в дорожной аптечке.',
      helpful: 19,
      verified: true
    },
    {
      id: 7,
      name: 'Александр П.',
      location: 'Челябинск',
      date: '2024-01-01',
      rating: 3,
      category: 'general',
      title: 'Помогает, но вкус не очень',
      text: 'Препарат эффективный, это точно. Помог при пищевом отравлении. Но вкус и консистенция не очень приятные. Приходится заставлять себя принимать. Может, стоит выпустить в капсулах?',
      helpful: 8,
      verified: false
    },
    {
      id: 8,
      name: 'Татьяна К.',
      location: 'Воронеж',
      date: '2023-12-28',
      rating: 5,
      category: 'children',
      title: 'Врач рекомендует',
      text: 'Я педиатр с 15-летним стажем. Энтеросгель часто назначаю маленьким пациентам. Препарат безопасный, эффективный, хорошо переносится детьми. Родители довольны результатами.',
      helpful: 31,
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
    return matchesRating && matchesCategory;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review:', newReview);
    // Reset form
    setNewReview({
      name: '',
      email: '',
      rating: 5,
      category: 'general',
      title: '',
      text: ''
    });
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.');
  };

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Отзывы пациентов
          </h1>
          <p className="text-lg text-gray-600">
            Реальные отзывы людей, которые использовали Энтеросгель
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Общая оценка</h2>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                {renderStars(Math.round(averageRating), 'lg')}
                <div className="text-sm text-gray-600 mt-2">
                  На основе {reviews.length} отзывов
                </div>
              </div>

              <div className="space-y-2">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center text-sm">
                    <span className="w-3 text-gray-600">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current mx-1" />
                    <div className="flex-1 mx-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-8 text-gray-600">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    По рейтингу
                  </label>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Все оценки</option>
                    <option value="5">5 звезд</option>
                    <option value="4">4 звезды</option>
                    <option value="3">3 звезды</option>
                    <option value="2">2 звезды</option>
                    <option value="1">1 звезда</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    По категории
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">{review.name}</span>
                          {review.verified && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              Проверен
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{review.location}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {renderStars(review.rating)}
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(review.date).toLocaleDateString('ru-RU')}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-2">
                      {categories.find(c => c.id === review.category)?.name}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Полезно ({review.helpful})
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Ответить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Отзывы не найдены</h3>
                <p className="text-gray-600">
                  Попробуйте изменить фильтры поиска
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredReviews.length > 0 && (
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Загрузить еще отзывы
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Write Review Form */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Оставить отзыв</h2>
          
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={newReview.email}
                  onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваш email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Оценка *
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating: star})}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= newReview.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 hover:text-yellow-400'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Категория
                </label>
                <select
                  value={newReview.category}
                  onChange={(e) => setNewReview({...newReview, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.filter(c => c.id !== 'all').map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Заголовок отзыва *
              </label>
              <input
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Краткое описание вашего опыта"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ваш отзыв *
              </label>
              <textarea
                value={newReview.text}
                onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Расскажите о вашем опыте использования препарата..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Send className="h-5 w-5 mr-2" />
              Отправить отзыв
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;