import React from 'react';
import { Atom, Shield, Droplets, Zap } from 'lucide-react';

const Composition = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Состав Энтеросгель
          </h1>
          <p className="text-lg text-gray-600">
            Подробная информация об активном веществе и компонентах препарата
          </p>
        </div>

        {/* Active Ingredient */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Активное вещество</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <Atom className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">Полиметилсилоксана полигидрат</h3>
                <p className="text-blue-700">Polymethylsiloxane polyhydrate</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Концентрация</h4>
                <p className="text-blue-800">70 г в 100 г пасты</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Химическая формула</h4>
                <p className="text-blue-800 font-mono">[SiO(CH₃)₂]ₙ • xH₂O</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Свойства активного вещества</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Не всасывается в желудочно-кишечном тракте</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Не изменяется под действием пищеварительных ферментов</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Выводится из организма в неизменном виде через 12 часов</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Обладает селективным сорбционным действием</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Механизм селективности</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Полиметилсилоксана полигидрат имеет глобулярную структуру с порами определенного размера. 
                  Это позволяет селективно связывать молекулы средней массы (от 70 до 1000 Дальтон), 
                  к которым относятся большинство токсинов, не затрагивая полезные вещества.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Auxiliary Substances */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Вспомогательные вещества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Droplets className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Вода очищенная</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Обеспечивает необходимую консистенцию пасты и облегчает прием препарата
              </p>
              <div className="bg-blue-50 rounded p-3">
                <div className="text-sm text-blue-800">
                  <strong>Функция:</strong> Формирование пастообразной консистенции
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Zap className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Подсластитель (сукралоза)</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Добавляется в сладкую форму препарата для улучшения вкусовых качеств
              </p>
              <div className="bg-green-50 rounded p-3">
                <div className="text-sm text-green-800">
                  <strong>Примечание:</strong> Только в сладкой форме препарата
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Properties */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Физико-химические свойства</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Цвет</h3>
              <p className="text-gray-600 text-sm">Белый</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Консистенция</h3>
              <p className="text-gray-600 text-sm">Однородная паста</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Запах</h3>
              <p className="text-gray-600 text-sm">Без запаха</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Сравнение форм выпуска</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Характеристика</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Паста обычная</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Паста сладкая</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-gray-700">Активное вещество</td>
                  <td className="py-3 px-4 text-center text-gray-600">70 г/100 г</td>
                  <td className="py-3 px-4 text-center text-gray-600">70 г/100 г</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Подсластитель</td>
                  <td className="py-3 px-4 text-center text-gray-600">—</td>
                  <td className="py-3 px-4 text-center text-gray-600">Сукралоза</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Вкус</td>
                  <td className="py-3 px-4 text-center text-gray-600">Нейтральный</td>
                  <td className="py-3 px-4 text-center text-gray-600">Сладкий</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Рекомендуется</td>
                  <td className="py-3 px-4 text-center text-gray-600">Взрослые</td>
                  <td className="py-3 px-4 text-center text-gray-600">Дети</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Контроль качества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Стандарты производства</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">GMP (Good Manufacturing Practice)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">ISO 9001:2015</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Европейская фармакопея</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Государственная фармакопея РФ</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Контролируемые параметры</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Содержание активного вещества</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Микробиологическая чистота</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Сорбционная активность</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Однородность массы</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Composition;