import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Send, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', name: 'Все вопросы' },
    { id: 'general', name: 'Общие вопросы' },
    { id: 'dosage', name: 'Дозировка и применение' },
    { id: 'safety', name: 'Безопасность' },
    { id: 'children', name: 'Для детей' },
    { id: 'pregnancy', name: 'При беременности' },
    { id: 'side-effects', name: 'Побочные эффекты' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'Что такое Энтеросгель и как он работает?',
      answer: 'Энтеросгель — это современный энтеросорбент на основе полиметилсилоксана полигидрата. Он работает как молекулярная губка, селективно связывая и выводя из организма токсины, аллергены, бактерии и вредные вещества, не затрагивая полезные компоненты пищи и микрофлору кишечника.'
    },
    {
      id: 2,
      category: 'dosage',
      question: 'Как правильно принимать Энтеросгель?',
      answer: 'Взрослым рекомендуется принимать по 15 г (1 столовая ложка) 3 раза в день. Пасту необходимо развести в 100 мл воды до образования суспензии и принимать за 1-2 часа до еды или через 2 часа после еды. Курс лечения обычно составляет от 3-5 дней при острых состояниях до 2-3 недель при хронических заболеваниях.'
    },
    {
      id: 3,
      category: 'safety',
      question: 'Безопасен ли Энтеросгель для длительного применения?',
      answer: 'Да, Энтеросгель безопасен для длительного применения, так как не всасывается в кровь и полностью выводится из организма в неизменном виде через 12 часов. Однако при длительном применении рекомендуется делать перерывы и консультироваться с врачом.'
    },
    {
      id: 4,
      category: 'children',
      question: 'С какого возраста можно давать Энтеросгель детям?',
      answer: 'Энтеросгель разрешен к применению с рождения. Дозировки: детям до 1 года — 2,5 г 3 раза в день, от 1 до 5 лет — 5 г 3 раза в день, от 5 до 14 лет — 10 г 3 раза в день. Для грудных детей препарат можно развести в грудном молоке или смеси.'
    },
    {
      id: 5,
      category: 'pregnancy',
      question: 'Можно ли принимать Энтеросгель во время беременности и кормления грудью?',
      answer: 'Да, Энтеросгель полностью безопасен во время беременности и лактации. Он не всасывается в кровь, не проникает через плацентарный барьер и не выделяется с грудным молоком. Препарат часто назначают беременным при токсикозе и других состояниях.'
    },
    {
      id: 6,
      category: 'side-effects',
      question: 'Какие побочные эффекты может вызвать Энтеросгель?',
      answer: 'Побочные эффекты встречаются редко и могут включать: тошноту (особенно в первые дни приема), запор при недостаточном потреблении жидкости, отвращение к препарату. Для предотвращения запоров рекомендуется увеличить потребление воды до 2-2,5 литров в день.'
    },
    {
      id: 7,
      category: 'dosage',
      question: 'Можно ли принимать Энтеросгель одновременно с другими лекарствами?',
      answer: 'Энтеросгель следует принимать с интервалом 1-2 часа до или после приема других лекарственных препаратов, чтобы избежать снижения их эффективности. Препарат совместим с большинством лекарств, но интервал необходимо соблюдать.'
    },
    {
      id: 8,
      category: 'general',
      question: 'В чем отличие Энтеросгель от активированного угля?',
      answer: 'Энтеросгель обладает селективным действием — связывает только вредные вещества, не затрагивая витамины, минералы и полезную микрофлору. Активированный уголь действует неселективно, может связывать полезные вещества и нарушать микрофлору кишечника. Энтеросгель также более удобен в применении и реже вызывает запоры.'
    },
    {
      id: 9,
      category: 'dosage',
      question: 'Что делать, если забыл принять дозу?',
      answer: 'Если вы забыли принять дозу, примите ее как можно скорее. Если время приема следующей дозы уже близко, пропустите забытую дозу и продолжайте обычный режим приема. Не принимайте двойную дозу для компенсации пропущенной.'
    },
    {
      id: 10,
      category: 'safety',
      question: 'Есть ли противопоказания к применению Энтеросгель?',
      answer: 'Абсолютные противопоказания: повышенная чувствительность к компонентам препарата, атония кишечника, кишечная непроходимость. С осторожностью применять при тяжелой печеночной или почечной недостаточности, хронических запорах.'
    },
    {
      id: 11,
      category: 'general',
      question: 'Как хранить Энтеросгель?',
      answer: 'Хранить при температуре от +4°C до +30°C в сухом месте, недоступном для детей. После вскрытия тубы хранить плотно закрытой. Срок годности — 3 года. Не использовать по истечении срока годности.'
    },
    {
      id: 12,
      category: 'children',
      question: 'Как давать Энтеросгель ребенку, если он отказывается его принимать?',
      answer: 'Для детей рекомендуется использовать сладкую форму Энтеросгель. Также можно развести препарат в небольшом количестве сока (яблочного, грушевого), компота или добавить в детское питание. Главное — соблюдать дозировку и не смешивать с горячими жидкостями.'
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, question });
    // Reset form
    setName('');
    setEmail('');
    setQuestion('');
    alert('Ваш вопрос отправлен! Мы ответим в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Вопросы и ответы
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ответы на часто задаваемые вопросы о препарате Энтеросгель
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Категории</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Вопросы не найдены</h3>
            <p className="text-gray-600">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
          </div>
        )}

        {/* Ask Question Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Задать вопрос</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Не нашли ответ на свой вопрос? Задайте его нашим специалистам, и мы ответим в ближайшее время.
          </p>
          
          <form onSubmit={handleSubmitQuestion} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваш email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Ваш вопрос *
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Опишите ваш вопрос подробно..."
              />
            </div>
            
            <button
              type="submit"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Send className="h-5 w-5 mr-2" />
              Отправить вопрос
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Другие способы связи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Горячая линия</div>
                <div className="text-blue-600">8-800-123-45-67</div>
                <div className="text-sm text-gray-600">Бесплатно по России</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Email поддержка</div>
                <div className="text-blue-600">support@enterosgel.ru</div>
                <div className="text-sm text-gray-600">Ответ в течение 24 часов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;