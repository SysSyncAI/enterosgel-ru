import React from 'react';
import { Droplets, Shield, Clock, Users, Thermometer, Heart } from 'lucide-react';

const Diarrhea = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <Droplets className="h-10 w-10 text-blue-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель при диарее
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Эффективное лечение острой и хронической диареи
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-909">Связывает токсины</div>
              <div className="text-sm text-gray-600">Причину диареи</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Быстрый эффект</div>
              <div className="text-sm text-gray-600">За 4-6 часов</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Безопасен</div>
              <div className="text-sm text-gray-600">Для всех возрастов</div>
            </div>
          </div>
        </div>

        {/* Types of Diarrhea */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Виды диареи</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Thermometer className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Острая диарея</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-red-800">Причины:</div>
                  <ul className="text-red-700 text-sm space-y-1 mt-1">
                    <li>• Кишечные инфекции</li>
                    <li>• Пищевые отравления</li>
                    <li>• Лекарственная диарея</li>
                    <li>• Стрессовая диарея</li>
                    <li>• Алиментарная диарея</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <div className="font-medium text-red-900">Характеристики:</div>
                  <div className="text-red-800 text-sm">Внезапное начало, до 2-3 недель</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Хроническая диарея</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-blue-800">Причины:</div>
                  <ul className="text-blue-700 text-sm space-y-1 mt-1">
                    <li>• Синдром раздраженного кишечника</li>
                    <li>• Воспалительные заболевания кишечника</li>
                    <li>• Ферментная недостаточность</li>
                    <li>• Дисбактериоз</li>
                    <li>• Мальабсорбция</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded p-3">
                  <div className="font-medium text-blue-900">Характеристики:</div>
                  <div className="text-blue-800 text-sm">Более 4 недель, рецидивирующая</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Как действует при диарее</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Механизм действия</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Связывает токсины</div>
                    <div className="text-gray-600 text-sm">Бактериальные токсины, вызывающие диарею</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Нормализует стул</div>
                    <div className="text-gray-600 text-sm">Уменьшает частоту и объем стула</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Улучшает всасывание</div>
                    <div className="text-gray-600 text-sm">Восстанавливает всасывание воды и электролитов</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Защищает слизистую</div>
                    <div className="text-gray-600 text-sm">Предотвращает повреждение кишечника</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Преимущества перед другими средствами</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Не подавляет перистальтику</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Не влияет на микрофлору</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Можно сочетать с пробиотиками</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Безопасен для детей</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Не вызывает привыкания</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dosage Schemes */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Схемы лечения</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Острая диарея</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-red-100 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-red-900 mb-2">Взрослые:</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-800">22.5 г</div>
                      <div className="text-red-700">3 раза в день</div>
                      <div className="text-sm text-red-600 mt-1">Первые 3 дня</div>
                    </div>
                  </div>
                  <div className="text-sm text-red-800">
                    Затем переход на стандартную дозу 15 г × 3 раза в день
                  </div>
                </div>
                <div>
                  <div className="bg-red-100 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-red-900 mb-2">Дети 5-14 лет:</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-808">15 г</div>
                      <div className="text-red-700">3 раза в день</div>
                      <div className="text-sm text-red-600 mt-1">Весь курс</div>
                    </div>
                  </div>
                  <div className="text-sm text-red-800">
                    Курс лечения 5-7 дней
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Хроническая диарея</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-800">15 г</div>
                  <div className="text-blue-700">2 раза в день</div>
                  <div className="text-sm text-blue-600 mt-1">Поддерживающая доза</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-800">2-3 недели</div>
                  <div className="text-blue-700">Курс лечения</div>
                  <div className="text-sm text-blue-606 mt-1">Повторять по необходимости</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-800">1-2 мес</div>
                  <div className="text-blue-700">Перерыв</div>
                  <div className="text-sm text-blue-600 mt-1">Между курсами</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Особые случаи</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Диарея путешественников</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-yellow-900">Профилактика:</div>
                    <div className="text-yellow-800 text-sm">10 г × 2 раза в день во время поездки</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-900">Лечение:</div>
                    <div className="text-yellow-800 text-sm">15 г × 3 раза в день при появлении симптомов</div>
                  </div>
                  <div className="bg-yellow-100 rounded p-3">
                    <div className="text-sm text-yellow-800">
                      <strong>Важно:</strong> Начинать прием за 2-3 дня до поездки
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Лекарственная диарея</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-green-900">Причины:</div>
                    <ul className="text-green-800 text-sm space-y-1 mt-1">
                      <li>• Антибиотики</li>
                      <li>• Слабительные</li>
                      <li>• Цитостатики</li>
                      <li>• НПВС</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-green-900">Дозировка:</div>
                    <div className="text-green-800 text-sm">15 г × 2 раза в день во время лечения</div>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <div className="text-sm text-green-800">
                      <strong>Интервал:</strong> 2 часа между Энтеросгель и другими лекарствами
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Дозировки по возрастам</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-pink-50 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-pink-600 mx-auto mb-3" />
              <div className="font-semibold text-pink-900">0-1 год</div>
              <div className="text-2xl font-bold text-pink-800 my-2">2.5 г</div>
              <div className="text-pink-700 text-sm">3 раза в день</div>
              <div className="text-xs text-pink-600 mt-1">½ чайной ложки</div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-blue-900">1-5 лет</div>
              <div className="text-2xl font-bold text-blue-800 my-2">5 г</div>
              <div className="text-blue-700 text-sm">3 раза в день</div>
              <div className="text-xs text-blue-600 mt-1">1 чайная ложка</div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="font-semibold text-green-900">5-14 лет</div>
              <div className="text-2xl font-bold text-green-800 my-2">10 г</div>
              <div className="text-green-700 text-sm">3 раза в день</div>
              <div className="text-xs text-green-600 mt-1">1 десертная ложка</div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold text-purple-900">14+ лет</div>
              <div className="text-2xl font-bold text-purple-808 my-2">15 г</div>
              <div className="text-purple-700 text-sm">3 раза в день</div>
              <div className="text-xs text-purple-600 mt-1">1 столовая ложка</div>
            </div>
          </div>
        </section>

        {/* Additional Measures */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Дополнительные меры</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Регидратация</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-blue-900">Обязательно при диарее:</div>
                    <ul className="text-blue-800 text-sm space-y-1 mt-1">
                      <li>• Регидрон, Гидровит</li>
                      <li>• Минеральная вода без газа</li>
                      <li>• Некрепкий чай с сахаром</li>
                      <li>• Рисовый отвар</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded p-3">
                    <div className="text-sm text-blue-808">
                      <strong>Объем жидкости:</strong> 30-50 мл/кг массы тела в сутки дополнительно
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Диета</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-green-900">Рекомендуется:</div>
                    <ul className="text-green-800 text-sm space-y-1 mt-1">
                      <li>• Рисовая каша на воде</li>
                      <li>• Сухари, подсушенный хлеб</li>
                      <li>• Бананы</li>
                      <li>• Отварное мясо, рыба</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-green-900">Исключить:</div>
                    <ul className="text-green-808 text-sm space-y-1 mt-1">
                      <li>• Молочные продукты</li>
                      <li>• Жирная, острая пища</li>
                      <li>• Сырые овощи, фрукты</li>
                      <li>• Газированные напитки</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to See Doctor */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Thermometer className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-900">Когда обратиться к врачу</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Срочно к врачу при:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Температуре выше 38.5°C</li>
                <li>• Крови в стуле</li>
                <li>• Сильных болях в животе</li>
                <li>• Признаках обезвоживания</li>
                <li>• Рвоте, мешающей приему жидкости</li>
                <li>• Ухудшении состояния</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-900 mb-3">У детей особенно важно:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Вялость, сонливость</li>
                <li>• Сухость слизистых</li>
                <li>• Западение родничка (у грудничков)</li>
                <li>• Отсутствие мочеиспускания более 6 часов</li>
                <li>• Диарея более 3 дней</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Diarrhea;