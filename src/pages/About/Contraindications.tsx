import React from 'react';
import { AlertTriangle, Shield, Info, Phone } from 'lucide-react';

const Contraindications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Противопоказания и ограничения
          </h1>
          <p className="text-lg text-gray-600">
            Когда нельзя принимать Энтеросгель и особые случаи применения
          </p>
        </div>

        {/* Absolute Contraindications */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-900">Абсолютные противопоказания</h2>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <p className="text-red-800 font-medium mb-4">
              Энтеросгель категорически запрещен к применению при следующих состояниях:
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-100 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Повышенная чувствительность</h3>
                <p className="text-red-800 text-sm">
                  Индивидуальная непереносимость полиметилсилоксана полигидрата или других компонентов препарата. 
                  Может проявляться аллергическими реакциями.
                </p>
              </div>
              
              <div className="bg-red-100 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Атония кишечника</h3>
                <p className="text-red-800 text-sm">
                  Отсутствие тонуса кишечной мускулатуры, при котором нарушена перистальтика. 
                  Препарат может усугубить застойные явления в кишечнике.
                </p>
              </div>
              
              <div className="bg-red-100 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Кишечная непроходимость</h3>
                <p className="text-red-800 text-sm">
                  Механическая или динамическая непроходимость кишечника любой этиологии. 
                  Применение может привести к ухудшению состояния.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800">Важно знать:</p>
                <p className="text-yellow-700 text-sm mt-1">
                  При наличии любого из абсолютных противопоказаний применение Энтеросгель может быть опасным для здоровья. 
                  Обязательно проконсультируйтесь с врачом перед началом приема.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Relative Contraindications */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-orange-900">Относительные противопоказания</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Состояния, при которых применение возможно, но требует особой осторожности и медицинского наблюдения:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 mb-3">Тяжелая печеночная недостаточность</h3>
              <div className="space-y-3">
                <p className="text-orange-800 text-sm">
                  При серьезных нарушениях функции печени требуется коррекция дозы и контроль состояния.
                </p>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-orange-700">
                    <strong>Рекомендация:</strong> Начинать с минимальных доз под контролем врача
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 mb-3">Тяжелая почечная недостаточность</h3>  
              <div className="space-y-3">
                <p className="text-orange-800 text-sm">
                  При нарушении выделительной функции почек необходим контроль водно-электролитного баланса.
                </p>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-orange-700">
                    <strong>Рекомендация:</strong> Увеличить потребление жидкости, контроль диуреза
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 mb-3">Хронические запоры</h3>
              <div className="space-y-3">
                <p className="text-orange-800 text-sm">
                  Склонность к запорам может усилиться при недостаточном потреблении жидкости.
                </p>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-orange-700">
                    <strong>Рекомендация:</strong> Увеличить потребление воды до 2-2.5 л в день
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-900 mb-3">Язвенная болезнь в стадии обострения</h3>
              <div className="space-y-3">
                <p className="text-orange-800 text-sm">
                  При активной язве желудка или двенадцатиперстной кишки требуется осторожность.
                </p>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-orange-700">
                    <strong>Рекомендация:</strong> Применять после купирования острых симптомов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Populations */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Особые группы пациентов</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Беременность и лактация</h3>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-green-800 mb-2">
                    <strong>Разрешен к применению</strong> во время беременности и кормления грудью.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Не всасывается в кровь</li>
                    <li>• Не проникает через плацентарный барьер</li>
                    <li>• Не выделяется с грудным молоком</li>
                    <li>• Безопасен для плода и новорожденного</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Дети</h3>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 mb-2">
                    <strong>Разрешен с рождения</strong> с коррекцией дозы по возрасту.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                    <div className="bg-blue-100 rounded p-3">
                      <div className="font-medium text-blue-900">0-1 год</div>
                      <div className="text-sm text-blue-800">2.5 г 3 раза в день</div>
                    </div>
                    <div className="bg-blue-100 rounded p-3">
                      <div className="font-medium text-blue-900">1-5 лет</div>
                      <div className="text-sm text-blue-800">5 г 3 раза в день</div>
                    </div>
                    <div className="bg-blue-100 rounded p-3">
                      <div className="font-medium text-blue-900">5-14 лет</div>
                      <div className="text-sm text-blue-800">10 г 3 раза в день</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Пожилые пациенты</h3>
              <div className="flex items-start">
                <Info className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-purple-800 mb-2">
                    Корректировка дозы обычно не требуется, но необходимо учитывать сопутствующие заболевания.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Контроль функции почек и печени</li>
                    <li>• Достаточное потребление жидкости</li>
                    <li>• Мониторинг взаимодействий с другими препаратами</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side Effects */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Возможные побочные эффекты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Редкие побочные эффекты</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <div className="font-medium text-gray-900">Тошнота</div>
                  <p className="text-gray-600 text-sm">Обычно в первые дни приема, проходит самостоятельно</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <div className="font-medium text-gray-900">Запор</div>
                  <p className="text-gray-600 text-sm">При недостаточном потреблении жидкости</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <div className="font-medium text-gray-900">Отвращение к препарату</div>
                  <p className="text-gray-600 text-sm">Индивидуальная реакция на вкус или консистенцию</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Что делать при побочных эффектах</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="font-medium text-green-900">При тошноте:</div>
                  <p className="text-green-800 text-sm">Принимать охлажденную суспензию, уменьшить разовую дозу</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="font-medium text-blue-900">При запоре:</div>
                  <p className="text-blue-800 text-sm">Увеличить потребление воды, добавить клетчатку в рацион</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="font-medium text-orange-900">При отвращении:</div>
                  <p className="text-orange-800 text-sm">Попробовать сладкую форму, смешать с соком</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-xl font-bold text-red-900">Экстренные ситуации</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Немедленно обратитесь к врачу при:</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Аллергических реакциях (сыпь, зуд, отек)</li>
                <li>• Сильной тошноте и рвоте</li>
                <li>• Выраженных болях в животе</li>
                <li>• Нарушении стула более 3 дней</li>
                <li>• Ухудшении общего состояния</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Контакты для консультаций:</h3>
              <div className="space-y-2 text-red-800">
                <div>Горячая линия: <strong>8-800-123-45-67</strong></div>
                <div>Email: <strong>info@enterosgel.ru</strong></div>
                <div>Скорая помощь: <strong>103</strong></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contraindications;