import React from 'react';
import { Baby, Users, Shield, Heart, Thermometer, Droplets } from 'lucide-react';

const Children = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <Baby className="h-10 w-10 text-blue-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель для детей
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Безопасное применение с рождения
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Baby className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">С рождения</div>
              <div className="text-sm text-gray-600">Разрешен с 0 месяцев</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Безопасен</div>
              <div className="text-sm text-gray-600">Не всасывается в кровь</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Без вкуса</div>
              <div className="text-sm text-gray-600">Есть сладкая форма</div>
            </div>
          </div>
        </div>

        {/* Age Groups */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Дозировки по возрастам</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Baby className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-lg font-semibold text-pink-900">0-1 год</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-pink-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-800">2.5 г</div>
                  <div className="text-pink-700">3 раза в день</div>
                  <div className="text-sm text-pink-600 mt-1">½ чайной ложки</div>
                </div>
                <div className="text-sm text-pink-800">
                  <strong>Способ приема:</strong> Развести в грудном молоке или смеси
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">1-5 лет</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-800">5 г</div>
                  <div className="text-blue-700">3 раза в день</div>
                  <div className="text-sm text-blue-600 mt-1">1 чайная ложка</div>
                </div>
                <div className="text-sm text-blue-800">
                  <strong>Способ приема:</strong> Развести в воде или соке
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-900">5-14 лет</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-800">10 г</div>
                  <div className="text-green-700">3 раза в день</div>
                  <div className="text-sm text-green-600 mt-1">1 десертная ложка</div>
                </div>
                <div className="text-sm text-green-800">
                  <strong>Способ приема:</strong> Развести в воде
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Показания для детей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">Острые состояния</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Thermometer className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Кишечные инфекции</div>
                    <div className="text-gray-600 text-sm">Ротавирус, сальмонеллез, дизентерия</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Droplets className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Пищевые отравления</div>
                    <div className="text-gray-600 text-sm">Некачественные продукты, токсины</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Диарея</div>
                    <div className="text-gray-600 text-sm">Острая и хроническая диарея</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Рвота и тошнота</div>
                    <div className="text-gray-600 text-sm">Различного происхождения</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-blue-600">Хронические состояния</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Пищевая аллергия</div>
                    <div className="text-gray-600 text-sm">Атопический дерматит, экзема</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Дисбактериоз</div>
                    <div className="text-gray-600 text-sm">Нарушения микрофлоры кишечника</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Гепатит</div>
                    <div className="text-gray-600 text-sm">В составе комплексной терапии</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Почечная недостаточность</div>
                    <div className="text-gray-600 text-sm">Снижение интоксикации</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Give */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Как давать детям</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Грудные дети (0-1 год)</h3>
              <div className="bg-pink-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">1</div>
                    <div>
                      <div className="font-medium text-pink-900">Смешать с молоком</div>
                      <div className="text-pink-800 text-sm">2.5 г пасты + 30 мл грудного молока или смеси</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">2</div>
                    <div>
                      <div className="font-medium text-pink-900">Хорошо размешать</div>
                      <div className="text-pink-800 text-sm">До получения однородной суспензии</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">3</div>
                    <div>
                      <div className="font-medium text-pink-900">Дать из ложечки</div>
                      <div className="text-pink-800 text-sm">За 1-2 часа до кормления</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Дети старше года</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">1</div>
                    <div>
                      <div className="font-medium text-blue-900">Развести в воде</div>
                      <div className="text-blue-800 text-sm">Необходимая доза + 50-100 мл воды</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">2</div>
                    <div>
                      <div className="font-medium text-blue-900">Можно добавить сок</div>
                      <div className="text-blue-800 text-sm">Для улучшения вкуса (яблочный, грушевый)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">3</div>
                    <div>
                      <div className="font-medium text-blue-900">Дать выпить</div>
                      <div className="text-blue-800 text-sm">За час до еды или через 2 часа после</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Особые случаи применения</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">При острых кишечных инфекциях</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-medium text-yellow-800 mb-2">Увеличенные дозы (первые 3 дня):</div>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• 0-1 год: 5 г × 3 раза в день</li>
                    <li>• 1-5 лет: 7.5 г × 3 раза в день</li>
                    <li>• 5-14 лет: 15 г × 3 раза в день</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-yellow-800 mb-2">Дополнительные меры:</div>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Обильное питье</li>
                    <li>• Регидратация при рвоте</li>
                    <li>• Контроль температуры</li>
                    <li>• Обращение к врачу</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">При пищевой аллергии</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-medium text-green-800 mb-2">Профилактический курс:</div>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Стандартные возрастные дозы</li>
                    <li>• Курс 2-3 недели</li>
                    <li>• 2-3 раза в год</li>
                    <li>• При введении прикорма</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-green-800 mb-2">При обострении:</div>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Увеличить дозу в 1.5 раза</li>
                    <li>• Курс 7-10 дней</li>
                    <li>• Исключить аллерген из рациона</li>
                    <li>• Консультация аллерголога</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Безопасность применения</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-4">Почему безопасен для детей?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-800">Не всасывается в кровь</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-800">Не влияет на рост и развитие</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-808">Не нарушает микрофлору</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-800">Полностью выводится из организма</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Контроль приема</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li>• Следить за стулом ребенка</li>
                  <li>• Обеспечить достаточное питье</li>
                  <li>• При запорах — увеличить количество воды</li>
                  <li>• При рвоте — уменьшить разовую дозу</li>
                  <li>• Консультироваться с педиатром</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Children;