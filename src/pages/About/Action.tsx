import React from 'react';
import { Filter, Target, Shield, Zap, ArrowRight, Microscope } from 'lucide-react';

const Action = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Механизм действия Энтеросгель
          </h1>
          <p className="text-lg text-gray-600">
            Как работает селективная сорбция и почему Энтеросгель эффективен
          </p>
        </div>

        {/* Main Mechanism */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Принцип селективной сорбции</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Filter className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Размер имеет значение</h3>
                </div>
                <p className="text-blue-800 mb-4">
                  Энтеросгель имеет трехмерную кремнийорганическую матрицу с порами определенного размера, 
                  которые селективно связывают молекулы средней массы.
                </p>
                <div className="bg-blue-200 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">Размер пор: 0.7-1.5 нм</div>
                  <div className="text-sm text-blue-800">Молекулярная масса: 70-1000 Дальтон</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-900">Что связывается</h3>
                </div>
                <ul className="space-y-2 text-green-800">
                  <li>• Токсины и яды</li>
                  <li>• Бактериальные эндотоксины</li>
                  <li>• Аллергены пищевые</li>
                  <li>• Продукты метаболизма</li>
                  <li>• Билирубин, мочевина</li>
                  <li>• Холестерин, гистамин</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Что НЕ связывается</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-2">Витамины и минералы</div>
                <div className="text-sm text-gray-600">Слишком малый размер молекул</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-2">Полезные бактерии</div>
                <div className="text-sm text-gray-600">Слишком большой размер</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-2">Пищеварительные ферменты</div>
                <div className="text-sm text-gray-600">Крупные белковые молекулы</div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Этапы действия препарата</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Поступление в ЖКТ</h3>
                <p className="text-gray-600">
                  Энтеросгель попадает в желудочно-кишечный тракт и равномерно распределяется 
                  по всей длине кишечника, не всасываясь в кровь.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-green-600">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Селективная сорбция</h3>
                <p className="text-gray-600">
                  Пористая структура препарата избирательно связывает токсины, аллергены и вредные вещества, 
                  не затрагивая полезные компоненты пищи.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-orange-600">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Выведение из организма</h3>
                <p className="text-gray-600">
                  Связанные токсины вместе с препаратом в неизменном виде выводятся из организма 
                  естественным путем в течение 12 часов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Научные исследования</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Microscope className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Клинические исследования</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Более 100 клинических исследований</li>
                <li>• Доказанная эффективность при интоксикациях</li>
                <li>• Безопасность применения у детей с рождения</li>
                <li>• Отсутствие влияния на микрофлору кишечника</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Профиль безопасности</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Не всасывается в кровь</li>
                <li>• Не изменяется в ЖКТ</li>
                <li>• Не влияет на перистальтику</li>
                <li>• Совместим с другими лекарствами</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Преимущества перед другими сорбентами</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Характеристика</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Энтеросгель</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Активированный уголь</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Смектит</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-700">Селективность действия</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 font-semibold">Высокая</span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">Низкая</td>
                  <td className="py-3 px-4 text-center text-gray-600">Средняя</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Влияние на микрофлору</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 font-semibold">Не влияет</span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">Нарушает</td>
                  <td className="py-3 px-4 text-center text-gray-600">Не влияет</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Удобство приема</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 font-semibold">Высокое</span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">Низкое</td>
                  <td className="py-3 px-4 text-center text-gray-600">Среднее</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Риск запоров</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 font-semibold">Минимальный</span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">Высокий</td>
                  <td className="py-3 px-4 text-center text-gray-600">Средний</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mechanism Visualization */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Визуализация механизма действия</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Токсины попадают в ЖКТ</h3>
                <p className="text-sm text-gray-600">
                  Вредные вещества различного происхождения поступают в организм
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Энтеросгель связывает токсины</h3>
                <p className="text-sm text-gray-600">
                  Селективная сорбция захватывает только вредные молекулы
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Безопасное выведение</h3>
                <p className="text-sm text-gray-600">
                  Токсины выводятся, полезные вещества остаются в организме
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Action;