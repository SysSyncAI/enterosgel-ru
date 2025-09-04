import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Search, Filter, Star, ShoppingCart } from 'lucide-react';

const WhereToBuy = () => {
  const [selectedCity, setSelectedCity] = useState('moscow');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const cities = [
    { id: 'moscow', name: 'Москва' },
    { id: 'spb', name: 'Санкт-Петербург' },
    { id: 'ekaterinburg', name: 'Екатеринбург' },
    { id: 'novosibirsk', name: 'Новосибирск' },
    { id: 'kazan', name: 'Казань' },
    { id: 'nizhny', name: 'Нижний Новгород' }
  ];

  const pharmacies = [
    {
      id: 1,
      name: 'Аптека №1',
      type: 'pharmacy',
      city: 'moscow',
      address: 'ул. Тверская, 15',
      phone: '+7 (495) 123-45-67',
      hours: '08:00 - 22:00',
      rating: 4.5,
      price: '450 ₽',
      inStock: true,
      distance: '0.5 км'
    },
    {
      id: 2,
      name: 'Ригла',
      type: 'pharmacy',
      city: 'moscow',
      address: 'Красная площадь, 1',
      phone: '+7 (495) 234-56-78',
      hours: '24 часа',
      rating: 4.3,
      price: '465 ₽',
      inStock: true,
      distance: '1.2 км'
    },
    {
      id: 3,
      name: 'Горздрав',
      type: 'pharmacy',
      city: 'moscow',
      address: 'пр. Мира, 45',
      phone: '+7 (495) 345-67-89',
      hours: '09:00 - 21:00',
      rating: 4.7,
      price: '440 ₽',
      inStock: false,
      distance: '2.1 км'
    },
    {
      id: 4,
      name: 'Аптека Столички',
      type: 'pharmacy',
      city: 'spb',
      address: 'Невский пр., 28',
      phone: '+7 (812) 123-45-67',
      hours: '08:00 - 23:00',
      rating: 4.4,
      price: '455 ₽',
      inStock: true,
      distance: '0.8 км'
    },
    {
      id: 5,
      name: 'Петрофарм',
      type: 'pharmacy',
      city: 'spb',
      address: 'ул. Рубинштейна, 12',
      phone: '+7 (812) 234-56-78',
      hours: '09:00 - 22:00',
      rating: 4.6,
      price: '448 ₽',
      inStock: true,
      distance: '1.5 км'
    }
  ];

  const onlineStores = [
    {
      id: 1,
      name: 'Apteka.ru',
      url: 'https://apteka.ru',
      price: '420 ₽',
      rating: 4.6,
      delivery: 'Доставка от 2 часов',
      description: 'Крупнейшая сеть онлайн-аптек России'
    },
    {
      id: 2,
      name: 'Здравсити',
      url: 'https://zdravcity.ru',
      price: '435 ₽',
      rating: 4.4,
      delivery: 'Доставка в день заказа',
      description: 'Быстрая доставка лекарств по Москве и регионам'
    },
    {
      id: 3,
      name: 'ЗдравЗона',
      url: 'https://zdravzona.ru',
      price: '445 ₽',
      rating: 4.3,
      delivery: 'Доставка от 3 часов',
      description: 'Онлайн-аптека с широким ассортиментом'
    },
    {
      id: 4,
      name: 'Еаптека',
      url: 'https://eapteka.ru',
      price: '428 ₽',
      rating: 4.5,
      delivery: 'Доставка от 1 часа',
      description: 'Быстрая доставка и выгодные цены'
    }
  ];

  const filteredPharmacies = pharmacies.filter(pharmacy => {
    const matchesCity = pharmacy.city === selectedCity;
    const matchesType = selectedType === 'all' || 
                       (selectedType === 'instock' && pharmacy.inStock) ||
                       (selectedType === '24h' && pharmacy.hours.includes('24'));
    const matchesSearch = pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesType && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Где купить Энтеросгель
          </h1>
          <p className="text-lg text-gray-600">
            Найдите ближайшую аптеку или закажите онлайн с доставкой
          </p>
        </div>

        {/* Online Stores */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Онлайн-аптеки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineStores.map((store) => (
              <div key={store.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <div className="text-xl font-bold text-green-600">{store.price}</div>
                </div>
                
                <div className="mb-3">
                  {renderStars(store.rating)}
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{store.description}</p>
                
                <div className="flex items-center text-sm text-blue-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {store.delivery}
                </div>
                
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center flex items-center justify-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Купить онлайн
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Physical Pharmacies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Аптеки в городе</h2>
          
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Фильтр
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Все аптеки</option>
                  <option value="instock">В наличии</option>
                  <option value="24h">Круглосуточные</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Поиск
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Название или адрес..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Интерактивная карта аптек</p>
                <p className="text-sm text-gray-500">Здесь будет отображаться карта с местоположением аптек</p>
              </div>
            </div>
          </div>

          {/* Pharmacy List */}
          <div className="space-y-4">
            {filteredPharmacies.map((pharmacy) => (
              <div key={pharmacy.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {pharmacy.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {pharmacy.address}
                          <span className="ml-4 text-sm text-blue-600">{pharmacy.distance}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Phone className="h-4 w-4 mr-2" />
                          {pharmacy.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {pharmacy.hours}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {renderStars(pharmacy.rating)}
                        <div className="mt-2">
                          {pharmacy.inStock ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              В наличии
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Нет в наличии
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {pharmacy.price}
                      </div>
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Забронировать
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                          Маршрут
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPharmacies.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Аптеки не найдены</h3>
              <p className="text-gray-600">
                Попробуйте изменить фильтры поиска или выбрать другой город
              </p>
            </div>
          )}
        </section>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Полезная информация</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Формы выпуска:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Паста для приема внутрь 225 г</li>
                <li>• Паста сладкая для детей 225 г</li>
                <li>• Гель для наружного применения 50 г</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Средние цены:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Паста 225 г: 420-480 ₽</li>
                <li>• Паста сладкая 225 г: 450-510 ₽</li>
                <li>• Гель 50 г: 180-220 ₽</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Важно:</strong> Цены могут отличаться в зависимости от региона и аптечной сети. 
              Рекомендуем уточнять наличие и стоимость по телефону перед посещением аптеки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;