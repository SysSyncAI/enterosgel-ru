import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Clock, User, AlertTriangle, CheckCircle } from 'lucide-react';

const Instruction = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Инструкция по применению Энтеросгель
              </h1>
              <p className="text-lg text-gray-600">
                Полная официальная инструкция к препарату
              </p>
            </div>
            <button className="mt-4 lg:mt-0 flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Скачать PDF
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">225г</div>
              <div className="text-sm text-gray-600">Паста в тубе</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0+</div>
              <div className="text-sm text-gray-600">С рождения</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">3 раза</div>
              <div className="text-sm text-gray-600">В день</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Содержание</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#composition" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Состав и форма выпуска
            </a>
            <a href="#indications" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Показания к применению
            </a>
            <a href="#dosage" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Способ применения и дозы
            </a>
            <a href="#contraindications" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Противопоказания
            </a>
            <a href="#side-effects" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Побочные действия
            </a>
            <a href="#storage" className="flex items-center text-blue-600 hover:text-blue-700 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Условия хранения
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Composition */}
          <section id="composition" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Состав и форма выпуска</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Активное вещество</h3>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="font-medium text-blue-900">Полиметилсилоксана полигидрат</div>
                  <div className="text-blue-700 text-sm mt-1">70 г в 100 г пасты</div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Вспомогательные вещества</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Вода очищенная</li>
                  <li>• Подсластитель сукралоза (по показаниям)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Форма выпуска</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="font-medium text-gray-900">Паста для приема внутрь</div>
                    <div className="text-gray-600 text-sm mt-1">
                      Однородная масса белого цвета без запаха
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-medium text-gray-900">Упаковка</div>
                    <div className="text-gray-600 text-sm mt-1">
                      Туба алюминиевая 225 г в картонной пачке
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section id="indications" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Показания к применению</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">
                  Острые состояния
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Острые отравления лекарственными средствами</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Острые пищевые отравления</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Острая алкогольная интоксикация</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Острые кишечные инфекции</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-blue-600">
                  Хронические состояния
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Пищевая и лекарственная аллергия</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Атопический дерматит</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Хронические заболевания печени</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Хронические заболевания почек</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dosage */}
          <section id="dosage" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Способ применения и дозы</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-yellow-800">Важно!</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Принимать за 1-2 часа до или после еды и приема других лекарственных средств
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900">Взрослые</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-blue-900">15 г (1 столовая ложка)</div>
                    <div className="text-blue-700 text-sm">3 раза в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-blue-900">При тяжелых отравлениях</div>
                    <div className="text-blue-700 text-sm">22,5 г 3 раза в день</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-900">Дети 5-14 лет</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-green-900">10 г (1 десертная ложка)</div>
                    <div className="text-green-700 text-sm">3 раза в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-900">При тяжелых отравлениях</div>
                    <div className="text-green-700 text-sm">15 г 3 раза в день</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="text-lg font-semibold text-orange-900">Дети до 5 лет</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-orange-900">5 г (1 чайная ложка)</div>
                    <div className="text-orange-700 text-sm">3 раза в день</div>
                  </div>
                  <div>
                    <div className="font-medium text-orange-900">При тяжелых отравлениях</div>
                    <div className="text-orange-700 text-sm">7,5 г 3 раза в день</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Способ приготовления</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Отмерить необходимую дозу пасты</li>
                <li>2. Размешать в стакане воды (100 мл) до образования суспензии</li>
                <li>3. Выпить немедленно после приготовления</li>
                <li>4. Запить дополнительным количеством воды</li>
              </ol>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium text-blue-900">Курс лечения:</span>
                  <span className="text-blue-700 ml-2">
                    При острых отравлениях 3-5 дней, при хронических состояниях 2-3 недели
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Contraindications */}
          <section id="contraindications" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Противопоказания</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-3">Абсолютные противопоказания:</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Повышенная чувствительность к препарату</li>
                    <li>• Атония кишечника</li>
                    <li>• Кишечная непроходимость</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-3">Особые указания:</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• При тяжелой печеночной или почечной недостаточности применять с осторожностью</li>
                    <li>• При хронических запорах увеличить потребление жидкости</li>
                    <li>• Не влияет на способность управлять транспортными средствами</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Side Effects */}
          <section id="side-effects" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Побочные действия</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Редко наблюдаются:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Тошнота</li>
                  <li>• Запор</li>
                  <li>• Отвращение к препарату</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Что делать:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Увеличить потребление жидкости</li>
                  <li>• При запорах — временно уменьшить дозу</li>
                  <li>• При тошноте — принимать охлажденную суспензию</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Storage */}
          <section id="storage" className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Условия хранения</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">+4°C до +30°C</div>
                <div className="text-sm text-blue-800">Температура хранения</div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">3 года</div>
                <div className="text-sm text-green-800">Срок годности</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Сухое место</div>
                <div className="text-sm text-purple-800">Условия хранения</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 text-sm">
                Хранить в недоступном для детей месте. После вскрытия тубы хранить плотно закрытой. 
                Не использовать по истечении срока годности.
              </p>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Дополнительная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="/composition" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-900">Состав</div>
              <div className="text-sm text-gray-600 mt-1">Подробно о компонентах</div>
            </Link>
            <Link 
              to="/action" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-900">Механизм действия</div>
              <div className="text-sm text-gray-600 mt-1">Как работает препарат</div>
            </Link>
            <Link 
              to="/faq" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-900">Вопросы и ответы</div>
              <div className="text-sm text-gray-600 mt-1">Часто задаваемые вопросы</div>
            </Link>
            <Link 
              to="/where-to-buy" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="font-medium text-gray-900">Где купить</div>
              <div className="text-sm text-gray-600 mt-1">Аптеки и магазины</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;