import React from 'react';
import { AlertTriangle, Shield, Clock, Zap, Thermometer, Droplets } from 'lucide-react';

const Poisoning = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель при отравлениях
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Экстренная помощь при различных видах интоксикации
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Быстрое действие</div>
              <div className="text-sm text-gray-600">В течение 1-2 часов</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-909">Безопасен</div>
              <div className="text-sm text-gray-600">Не всасывается в кровь</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Эффективен</div>
              <div className="text-sm text-gray-600">Против всех токсинов</div>
            </div>
          </div>
        </div>

        {/* Emergency Protocol */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-900">Экстренный протокол</h2>
          </div>
          
          <div className="bg-red-100 rounded-lg p-6 mb-6">
            <div className="font-bold text-red-900 mb-3">⚠️ При тяжелом отравлении НЕМЕДЛЕННО вызывайте скорую помощь!</div>
            <div className="text-red-800 text-sm">
              Энтеросгель - это дополнительная мера помощи, но не замена медицинской помощи при серьезных отравлениях.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-4">Первая помощь при отравлении:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">1</div>
                  <div>
                    <div className="font-medium text-red-900">Промыть желудок</div>
                    <div className="text-red-800 text-sm">Если с момента отравления прошло менее 2 часов</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">2</div>
                  <div>
                    <div className="font-medium text-red-900">Принять Энтеросгель</div>
                    <div className="text-red-800 text-sm">22.5 г (1.5 столовые ложки) немедленно</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">3</div>
                  <div>
                    <div className="font-medium text-red-900">Обильное питье</div>
                    <div className="text-red-800 text-sm">Вода комнатной температуры</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">4</div>
                  <div>
                    <div className="font-medium text-red-900">Вызвать врача</div>
                    <div className="text-red-800 text-sm">При ухудшении состояния</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-4">Когда СРОЧНО к врачу:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Рвота с кровью</li>
                <li>• Нарушение сознания</li>
                <li>• Судороги</li>
                <li>• Сильная боль в животе</li>
                <li>• Нарушение дыхания</li>
                <li>• Падение артериального давления</li>
                <li>• Температура выше 39°C</li>
                <li>• Обезвоживание</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Poisoning */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Виды отравлений</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Droplets className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-orange-900">Пищевые отравления</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-orange-800">Причины:</div>
                  <ul className="text-orange-700 text-sm space-y-1 mt-1">
                    <li>• Несвежие продукты</li>
                    <li>• Бактериальные токсины</li>
                    <li>• Грибы</li>
                    <li>• Консервы (ботулизм)</li>
                  </ul>
                </div>
                <div className="bg-orange-100 rounded p-3">
                  <div className="font-medium text-orange-900">Дозировка:</div>
                  <div className="text-orange-800 text-sm">22.5 г × 3 раза в день первые 3 дня</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Лекарственные отравления</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-red-800">Причины:</div>
                  <ul className="text-red-700 text-sm space-y-1 mt-1">
                    <li>• Передозировка препаратов</li>
                    <li>• Несовместимые лекарства</li>
                    <li>• Просроченные медикаменты</li>
                    <li>• Случайный прием детьми</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <div className="font-medium text-red-900">Дозировка:</div>
                  <div className="text-red-800 text-sm">30 г немедленно, затем по 15 г каждые 6 часов</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Thermometer className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Алкогольные отравления</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-blue-800">Виды:</div>
                  <ul className="text-blue-700 text-sm space-y-1 mt-1">
                    <li>• Этиловый спирт</li>
                    <li>• Метиловый спирт</li>
                    <li>• Суррогаты алкоголя</li>
                    <li>• Похмельный синдром</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded p-3">
                  <div className="font-medium text-blue-900">Дозировка:</div>
                  <div className="text-blue-800 text-sm">22.5 г × 3 раза в день, курс 3-5 дней</div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-900">Химические отравления</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-purple-800">Вещества:</div>
                  <ul className="text-purple-700 text-sm space-y-1 mt-1">
                    <li>• Бытовая химия</li>
                    <li>• Пестициды</li>
                    <li>• Тяжелые металлы</li>
                    <li>• Промышленные токсины</li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded p-3">
                  <div className="font-medium text-purple-900">Дозировка:</div>
                  <div className="text-purple-808 text-sm">30 г немедленно, затем по 22.5 г × 3 раза в день</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dosage Instructions */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Схемы приема при отравлениях</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Острое отравление (первые сутки)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-red-600">30 г</div>
                  <div className="text-red-800">Немедленно</div>
                  <div className="text-sm text-red-600 mt-1">2 столовые ложки</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-red-600">22.5 г</div>
                  <div className="text-red-800">Через 6 часов</div>
                  <div className="text-sm text-red-600 mt-1">1.5 столовые ложки</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-red-600">22.5 г</div>
                  <div className="text-red-800">Перед сном</div>
                  <div className="text-sm text-red-600 mt-1">1.5 столовые ложки</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Последующие дни (2-5 день)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">22.5 г</div>
                  <div className="text-blue-800">Утром</div>
                  <div className="text-sm text-blue-600 mt-1">За 2 часа до завтрака</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">22.5 г</div>
                  <div className="text-blue-800">Днем</div>
                  <div className="text-sm text-blue-600 mt-1">Между обедом и ужином</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">22.5 г</div>
                  <div className="text-blue-800">Вечером</div>
                  <div className="text-sm text-blue-600 mt-1">Через 2 часа после ужина</div>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Дети при отравлениях</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-green-900">0-1 год:</div>
                    <div className="text-green-800 text-sm">5 г × 3 раза в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-900">1-5 лет:</div>
                    <div className="text-green-800 text-sm">7.5 г × 3 раза в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-900">5-14 лет:</div>
                    <div className="text-green-800 text-sm">15 г × 3 раза в день</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <div className="text-sm text-green-800">
                    <strong>Важно:</strong> При отравлении ребенка обязательно вызвать врача!
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">При рвоте</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-yellow-900">Если рвота продолжается:</div>
                    <ul className="text-yellow-800 text-sm space-y-1 mt-1">
                      <li>• Давать препарат малыми порциями</li>
                      <li>• По 1 чайной ложке каждые 15 минут</li>
                      <li>• Охлажденная суспензия</li>
                      <li>• После прекращения рвоты - полная доза</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded">
                  <div className="text-sm text-yellow-800">
                    <strong>При неукротимой рвоте:</strong> срочная госпитализация!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Профилактика отравлений</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">В путешествиях</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• 10 г × 2 раза в день</li>
                <li>• За 3 дня до поездки</li>
                <li>• Во время путешествия</li>
                <li>• При смене климата и пищи</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">При работе с химикатами</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• 15 г × 2 раза в день</li>
                <li>• Курсами по 10 дней</li>
                <li>• Перерыв 10 дней</li>
                <li>• При вредных условиях труда</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">После курса лечения</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• 15 г × 2 раза в день</li>
                <li>• После антибиотиков</li>
                <li>• После химиотерапии</li>
                <li>• Курс 2-3 недели</li>
              </ul>
            </div>
          </div>
        </section>

        {/* When Not to Use */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-900">Когда Энтеросгель НЕ поможет</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Неэффективен при:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Отравлении кислотами и щелочами</li>
                <li>• Отравлении спиртами (метанол, этиленгликоль)</li>
                <li>• Отравлении железом</li>
                <li>• Отравлении литием</li>
                <li>• Цианидах</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Требуется специфическая терапия:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Ботулизм (антитоксин)</li>
                <li>• Отравление угарным газом (кислород)</li>
                <li>• Передозировка наркотиков (антидоты)</li>
                <li>• Укусы змей (сыворотка)</li>
                <li>• Отравление грибами (специфическое лечение)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Poisoning;