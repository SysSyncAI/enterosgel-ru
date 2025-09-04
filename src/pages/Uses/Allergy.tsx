import React from 'react';
import { Heart, Shield, Zap, AlertTriangle, Flower, Apple } from 'lucide-react';

const Allergy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <Heart className="h-10 w-10 text-orange-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Энтеросгель при аллергии
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Эффективная помощь при пищевой аллергии и аллергических реакциях
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Выводит аллергены</div>
              <div className="text-sm text-gray-600">Из кишечника</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Быстрое действие</div>
              <div className="text-sm text-gray-600">Эффект через 2-4 часа</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Безопасен</div>
              <div className="text-sm text-gray-600">Для всех возрастов</div>
            </div>
          </div>
        </div>

        {/* How It Helps */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Как помогает при аллергии</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Механизм действия</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Связывает аллергены</div>
                    <div className="text-gray-600 text-sm">В кишечнике, не давая им всасываться</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Удаляет токсины</div>
                    <div className="text-gray-600 text-sm">Продукты аллергической реакции</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-orange-606 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Снижает нагрузку</div>
                    <div className="text-gray-600 text-sm">На иммунную систему</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Виды аллергенов</h3>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-red-900 mb-2">Пищевые:</div>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Молочные продукты</li>
                      <li>• Яйца</li>
                      <li>• Орехи</li>
                      <li>• Морепродукты</li>
                      <li>• Глютен</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-red-900 mb-2">Другие:</div>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Красители</li>
                      <li>• Консерванты</li>
                      <li>• Ароматизаторы</li>
                      <li>• Лекарства</li>
                      <li>• Пыльца (косвенно)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Показания при аллергии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Apple className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-900">Пищевая аллергия</h3>
              </div>
              <ul className="space-y-2 text-yellow-800">
                <li>• Крапивница после еды</li>
                <li>• Отек Квинке</li>
                <li>• Кожные высыпания</li>
                <li>• Расстройства ЖКТ</li>
                <li>• Атопический дерматит</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Flower className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-909">Лекарственная аллергия</h3>
              </div>
              <ul className="space-y-2 text-green-800">
                <li>• Реакции на антибиотики</li>
                <li>• Аллергия на НПВС</li>
                <li>• Непереносимость витаминов</li>
                <li>• Реакции на контрастные вещества</li>
                <li>• Побочные эффекты препаратов</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Кожные проявления</h3>
              </div>
              <ul className="space-y-2 text-blue-800">
                <li>• Экзема</li>
                <li>• Псориаз (в комплексной терапии)</li>
                <li>• Контактный дерматит</li>
                <li>• Нейродермит</li>
                <li>• Диатез у детей</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-900">Системные реакции</h3>
              </div>
              <ul className="space-y-2 text-purple-800">
                <li>• Анафилактические реакции (профилактика)</li>
                <li>• Множественная химическая чувствительность</li>
                <li>• Пищевая непереносимость</li>
                <li>• Гистаминоз</li>
                <li>• Синдром раздраженного кишечника</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dosage Schemes */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Схемы применения</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">При острых аллергических реакциях</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-red-100 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-800">22.5 г</div>
                      <div className="text-red-700">3 раза в день</div>
                      <div className="text-sm text-red-600 mt-1">Первые 3 дня</div>
                    </div>
                  </div>
                  <div className="text-sm text-red-800">
                    <strong>Взрослые:</strong> Увеличенная доза для быстрого выведения аллергенов
                  </div>
                </div>
                <div>
                  <div className="bg-red-100 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-800">15 г</div>
                      <div className="text-red-700">3 раза в день</div>
                      <div className="text-sm text-red-600 mt-1">Дети 5-14 лет</div>
                    </div>
                  </div>
                  <div className="text-sm text-red-800">
                    <strong>Дети:</strong> Дозировка по возрасту, увеличенная в 1.5 раза
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">При хронической аллергии</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-800">15 г</div>
                  <div className="text-blue-700">3 раза в день</div>
                  <div className="text-sm text-blue-600 mt-1">Взрослые</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-800">2-3 недели</div>
                  <div className="text-blue-700">Курс лечения</div>
                  <div className="text-sm text-blue-600 mt-1">Стандартный</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-blue-808">3-4 раза</div>
                  <div className="text-blue-700">В год</div>
                  <div className="text-sm text-blue-600 mt-1">Профилактика</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combination Therapy */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Комбинированная терапия</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Совместимость с препаратами</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800">Антигистаминные препараты</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800">Кортикостероиды</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800">Пробиотики</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800">Ферментные препараты</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Правила приема</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-yellow-900">Интервал 2 часа</div>
                      <div className="text-yellow-808 text-sm">С другими лекарствами</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-yellow-900">До еды за 1-2 часа</div>
                      <div className="text-yellow-800 text-sm">Для максимальной эффективности</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-yellow-900">Обильное питье</div>
                      <div className="text-yellow-800 text-sm">Для предотвращения запоров</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Профилактическое применение</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Сезонная профилактика</h3>
              <div className="space-y-3">
                <div className="font-medium text-green-800">Когда применять:</div>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Перед сезоном цветения</li>
                  <li>• При смене рациона питания</li>
                  <li>• Перед путешествиями</li>
                  <li>• При стрессовых ситуациях</li>
                </ul>
                <div className="bg-green-100 rounded p-3 mt-4">
                  <div className="font-medium text-green-900">Дозировка:</div>
                  <div className="text-green-800 text-sm">10 г × 2 раза в день, курс 10-14 дней</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Детоксикация организма</h3>
              <div className="space-y-3">
                <div className="font-medium text-blue-800">Показания:</div>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Проживание в загрязненных районах</li>
                  <li>• Работа с химическими веществами</li>
                  <li>• После курса антибиотиков</li>
                  <li>• При хронической усталости</li>
                </ul>
                <div className="bg-blue-100 rounded p-3 mt-4">
                  <div className="font-medium text-blue-900">Схема:</div>
                  <div className="text-blue-800 text-sm">15 г × 2 раза в день, курс 2-3 недели</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Эффективность при аллергии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-green-800 font-medium">Снижение кожных проявлений</div>
              <div className="text-green-600 text-sm mt-1">По данным клинических исследований</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-4 ч</div>
              <div className="text-blue-800 font-medium">Начало действия</div>
              <div className="text-blue-600 text-sm mt-1">При острых реакциях</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">7-10 дн</div>
              <div className="text-purple-800 font-medium">Стабилизация состояния</div>
              <div className="text-purple-600 text-sm mt-1">При регулярном приеме</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Allergy;