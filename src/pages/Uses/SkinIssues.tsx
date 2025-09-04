import React from 'react';
import { Sparkles, Shield, Heart, Users, Droplets, Sun } from 'lucide-react';

const SkinIssues = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <Sparkles className="h-10 w-10 text-purple-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель при кожных проблемах
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Очищение организма изнутри для здоровой кожи
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Детоксикация</div>
              <div className="text-sm text-gray-600">Выводит токсины</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Улучшает кожу</div>
              <div className="text-sm text-gray-600">Уменьшает высыпания</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Здоровое сияние</div>
              <div className="text-sm text-gray-600">Естественная красота</div>
            </div>
          </div>
        </div>

        {/* Connection Skin-Gut */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Связь кожи и кишечника</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ось «кишечник-кожа»</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-606 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Токсины в кишечнике</div>
                    <div className="text-gray-600 text-sm">Накапливаются при нарушении пищеварения</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Всасывание в кровь</div>
                    <div className="text-gray-600 text-sm">При повышенной проницаемости кишечника</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Выведение через кожу</div>
                    <div className="text-gray-600 text-sm">Кожа как орган детоксикации</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Воспаление и высыпания</div>
                    <div className="text-gray-600 text-sm">Как результат интоксикации</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Как помогает Энтеросгель</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Связывает токсины в кишечнике</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Предотвращает их всасывание</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Снижает нагрузку на печень</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Уменьшает воспаление</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-800">Улучшает состояние кожи</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skin Conditions */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Кожные заболевания</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Droplets className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Акне и угревая сыпь</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-red-800">Причины:</div>
                  <ul className="text-red-700 text-sm space-y-1 mt-1">
                    <li>• Гормональные нарушения</li>
                    <li>• Неправильное питание</li>
                    <li>• Интоксикация организма</li>
                    <li>• Нарушение микрофлоры</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <div className="font-medium text-red-900">Схема применения:</div>
                  <div className="text-red-808 text-sm">15 г × 2 раза в день, курс 3-4 недели</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Атопический дерматит</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-blue-808">Проявления:</div>
                  <ul className="text-blue-707 text-sm space-y-1 mt-1">
                    <li>• Сухость и шелушение</li>
                    <li>• Зуд и покраснение</li>
                    <li>• Обострения весной/осенью</li>
                    <li>• Связь с пищевой аллергией</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded p-3">
                  <div className="font-medium text-blue-900">Схема применения:</div>
                  <div className="text-blue-800 text-sm">15 г × 3 раза в день при обострении</div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Sun className="h-6 w-6 text-yellow-606 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-900">Псориаз</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-yellow-808">Особенности:</div>
                  <ul className="text-yellow-707 text-sm space-y-1 mt-1">
                    <li>• Аутоиммунное заболевание</li>
                    <li>• Связь с состоянием кишечника</li>
                    <li>• Хроническое течение</li>
                    <li>• Стресс как триггер</li>
                  </ul>
                </div>
                <div className="bg-yellow-100 rounded p-3">
                  <div className="font-medium text-yellow-900">Схема применения:</div>
                  <div className="text-yellow-800 text-sm">15 г × 2 раза в день, курсами</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-green-606 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Экзема</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-green-808">Типы:</div>
                  <ul className="text-green-707 text-sm space-y-1 mt-1">
                    <li>• Истинная экзема</li>
                    <li>• Микробная экзема</li>
                    <li>• Себорейная экзема</li>
                    <li>• Профессиональная экзема</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <div className="font-medium text-green-900">Схема применения:</div>
                  <div className="text-green-800 text-sm">15 г × 3 раза в день в острой фазе</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Schemes */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Схемы лечения кожных проблем</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Острые кожные проявления</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-purple-100 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-800">22.5 г</div>
                      <div className="text-purple-700">3 раза в день</div>
                      <div className="text-sm text-purple-600 mt-1">Первые 7-10 дней</div>
                    </div>
                  </div>
                  <div className="text-sm text-purple-808">
                    При острых высыпаниях, сильном зуде, обострении хронических заболеваний
                  </div>
                </div>
                <div>
                  <div className="bg-purple-100 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-808">15 г</div>
                      <div className="text-purple-707">2 раза в день</div>
                      <div className="text-sm text-purple-606 mt-1">Поддерживающая терапия</div>
                    </div>
                  </div>
                  <div className="text-sm text-purple-808">
                    После улучшения состояния, еще 2-3 недели
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Профилактические курсы</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-808">10 г</div>
                  <div className="text-blue-707">2 раза в день</div>
                  <div className="text-sm text-blue-606 mt-1">Профилактическая доза</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-808">2 недели</div>
                  <div className="text-blue-707">Курс</div>
                  <div className="text-sm text-blue-606 mt-1">Каждые 3 месяца</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-808">4 раза</div>
                  <div className="text-blue-707">В год</div>
                  <div className="text-sm text-blue-606 mt-1">Сезонная профилактика</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complex Therapy */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Комплексная терапия</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Сочетание с другими методами</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="font-medium text-gray-900">Наружная терапия</div>
                  <p className="text-gray-606 text-sm">Кремы, мази, лосьоны по назначению дерматолога</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-medium text-gray-900">Диетотерапия</div>
                  <p className="text-gray-606 text-sm">Исключение аллергенных продуктов, противовоспалительная диета</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <div className="font-medium text-gray-900">Пробиотики</div>
                  <p className="text-gray-606 text-sm">Восстановление микрофлоры кишечника</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <div className="font-medium text-gray-900">Витаминотерапия</div>
                  <p className="text-gray-606 text-sm">Витамины А, Е, С, группы В, цинк, селен</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Правила приема</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-yellow-900">Время приема:</div>
                    <div className="text-yellow-808 text-sm">За 1-2 часа до еды или через 2 часа после</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-900">С другими препаратами:</div>
                    <div className="text-yellow-808 text-sm">Интервал 2 часа</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-900">Питьевой режим:</div>
                    <div className="text-yellow-808 text-sm">Не менее 2 литров воды в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-900">Курс лечения:</div>
                    <div className="text-yellow-808 text-sm">От 2 недель до 2 месяцев</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Recommendations */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендации по образу жизни</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-4">Что способствует здоровью кожи</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="space-y-3 text-green-808">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Достаточное потребление воды (30 мл/кг веса)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Сбалансированное питание с омега-3</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Регулярная физическая активность</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Полноценный сон 7-8 часов</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Управление стрессом</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Защита от UV-излучения</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-4">Что вредит коже</h3>
              <div className="bg-red-50 rounded-lg p-6">
                <ul className="space-y-3 text-red-808">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Курение и алкоголь</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Избыток сахара и трансжиров</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Хронический стресс</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Недостаток сна</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Агрессивная косметика</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Загрязненная экология</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ожидаемые результаты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-606 mb-2">3-5 дн</div>
              <div className="text-blue-808 font-medium">Уменьшение воспаления</div>
              <div className="text-blue-606 text-sm mt-1">Снижение покраснения</div>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-606 mb-2">1-2 нед</div>
              <div className="text-green-808 font-medium">Улучшение текстуры</div>
              <div className="text-green-606 text-sm mt-1">Меньше высыпаний</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-606 mb-2">3-4 нед</div>
              <div className="text-purple-808 font-medium">Заметное улучшение</div>
              <div className="text-purple-606 text-sm mt-1">Здоровый цвет лица</div>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-606 mb-2">2-3 мес</div>
              <div className="text-yellow-808 font-medium">Стойкий результат</div>
              <div className="text-yellow-606 text-sm mt-1">При регулярном приеме</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkinIssues;