import React from 'react';
import { Heart, Shield, Baby, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const Pregnancy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <Heart className="h-10 w-10 text-pink-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель при беременности
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Безопасное применение во время беременности и лактации
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">100% безопасен</div>
              <div className="text-sm text-gray-600">Не всасывается в кровь</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Baby className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Для плода</div>
              <div className="text-sm text-gray-600">Не проникает через плаценту</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">При лактации</div>
              <div className="text-sm text-gray-600">Не попадает в молоко</div>
            </div>
          </div>
        </div>

        {/* Safety Profile */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Профиль безопасности</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Почему безопасен?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Не всасывается в кровь</div>
                    <div className="text-gray-600 text-sm">Препарат действует только в кишечнике</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Не проникает через плаценту</div>
                    <div className="text-gray-600 text-sm">Крупные молекулы не могут пройти плацентарный барьер</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Полностью выводится</div>
                    <div className="text-gray-600 text-sm">В неизменном виде через 12 часов</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Не влияет на гормоны</div>
                    <div className="text-gray-600 text-sm">Не изменяет гормональный фон</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Клинические данные</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3 text-blue-800">
                  <li>• Более 20 лет применения у беременных</li>
                  <li>• Исследования на 2000+ беременных женщин</li>
                  <li>• Отсутствие тератогенного эффекта</li>
                  <li>• Не влияет на развитие плода</li>
                  <li>• Безопасен на всех сроках беременности</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Показания при беременности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">Ранние сроки (1-3 триместр)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-yellow-800">Токсикоз беременных</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-yellow-800">Тошнота и рвота</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-yellow-800">Пищевые отравления</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-yellow-800">Аллергические реакции</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Поздние сроки (2-3 триместр)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-800">Гестоз</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-800">Нарушения пищеварения</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-800">Изжога</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-808">Подготовка к родам</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dosage */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Дозировка для беременных</h2>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Стандартная дозировка</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">15 г</div>
                    <div className="text-gray-600">3 раза в день</div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    1 столовая ложка на прием
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">При токсикозе</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">10 г</div>
                    <div className="text-gray-600">2-3 раза в день</div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    Начальная доза, можно увеличить
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-100 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-800">Важные рекомендации:</p>
                  <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                    <li>• Принимать за 1-2 часа до еды</li>
                    <li>• Разводить в воде комнатной температуры</li>
                    <li>• Запивать дополнительным количеством воды</li>
                    <li>• Курс лечения 7-14 дней</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toxicosis Help */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Помощь при токсикозе</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Как помогает Энтеросгель?</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="font-medium text-gray-900">Связывает токсины</div>
                  <p className="text-gray-600 text-sm">Удаляет продукты метаболизма, вызывающие тошноту</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-medium text-gray-900">Улучшает пищеварение</div>
                  <p className="text-gray-600 text-sm">Нормализует работу ЖКТ</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <div className="font-medium text-gray-900">Снижает интоксикацию</div>
                  <p className="text-gray-600 text-sm">Уменьшает проявления токсикоза</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Схема приема при токсикозе</h3>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                    <span className="text-green-800">Утром натощак - 10 г</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                    <span className="text-green-800">За 1 час до обеда - 10 г</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                    <span className="text-green-800">Перед сном - 10 г</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <p className="text-green-800 text-sm">
                    При сильной тошноте можно принимать охлажденную суспензию
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breastfeeding */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">При грудном вскармливании</h2>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <Baby className="h-8 w-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Полностью безопасен при лактации</h3>
                <p className="text-blue-800 mt-2">
                  Энтеросгель не попадает в грудное молоко и не влияет на его качество и количество
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Показания при лактации:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Пищевые отравления</li>
                  <li>• Кишечные инфекции</li>
                  <li>• Аллергические реакции</li>
                  <li>• Нарушения пищеварения</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Дозировка:</h4>
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">15 г</div>
                    <div className="text-blue-600">3 раза в день</div>
                    <div className="text-sm text-blue-600 mt-1">Стандартная взрослая доза</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precautions */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Меры предосторожности</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900">Важные моменты:</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-yellow-900 mb-3">Консультация врача необходима:</h4>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• При планировании длительного курса</li>
                  <li>• При сочетании с другими препаратами</li>
                  <li>• При наличии хронических заболеваний</li>
                  <li>• При осложненной беременности</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-yellow-900 mb-3">Особенности приема:</h4>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Увеличить потребление воды</li>
                  <li>• Не принимать одновременно с витаминами</li>
                  <li>• Соблюдать интервал с едой</li>
                  <li>• Контролировать стул</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pregnancy;