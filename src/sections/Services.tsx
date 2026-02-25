import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MessageSquare, UserCog, Brain, ArrowRight, Check } from 'lucide-react';

// Static service definitions — NO dynamic Tailwind classes (purge-safe)
const services = [
  {
    icon: MessageSquare,
    title: 'Чат-боты',
    subtitle: 'Автоматизация коммуникаций',
    description:
      'Интеллектуальные чат-боты для Telegram, WhatsApp, ВКонтакте и сайта. Обрабатывают запросы клиентов круглосуточно, отвечают на вопросы, принимают заказы и собирают заявки.',
    features: [
      'Интеграция с популярными мессенджерами',
      'Обучение на ваших данных',
      'Подключение к CRM и базам данных',
      'Аналитика и отчётность',
      'Эскалация сложных запросов оператору',
    ],
    price: 'от 45 000 ₽',
    // Static classes only — not assembled dynamically
    iconColor: 'text-neon-cyan',
    iconBorder: 'border-neon-cyan/30 bg-neon-cyan/5',
    priceColor: 'text-neon-cyan',
    hoverGradient: 'from-neon-cyan/10 to-transparent',
    accentLine: 'bg-neon-cyan',
  },
  {
    icon: UserCog,
    title: 'ИИ-ассистенты',
    subtitle: 'Персональный помощник',
    description:
      'Виртуальные ассистенты для сотрудников компании. Помогают с документами, отвечают на внутренние вопросы, планируют встречи и оптимизируют рабочие процессы.',
    features: [
      'Доступ к корпоративным знаниям',
      'Генерация документов и писем',
      'Планирование и напоминания',
      'Мультиязычная поддержка',
      'Интеграция с корпоративными системами',
    ],
    price: 'от 75 000 ₽',
    iconColor: 'text-neon-purple',
    iconBorder: 'border-neon-purple/30 bg-neon-purple/5',
    priceColor: 'text-neon-purple',
    hoverGradient: 'from-neon-purple/10 to-transparent',
    accentLine: 'bg-neon-purple',
  },
  {
    icon: Brain,
    title: 'ИИ-агенты',
    subtitle: 'Полная автоматизация',
    description:
      'Автономные ИИ-агенты, способные выполнять комплексные бизнес-процессы. От первичного контакта до закрытия сделки — без участия человека.',
    features: [
      'Автоматизация полного цикла продаж',
      'Обработка заказов и платежей',
      'Управление складом и логистикой',
      'Принятие решений на основе данных',
      'Самообучение и оптимизация',
    ],
    price: 'от 150 000 ₽',
    iconColor: 'text-red-400',
    iconBorder: 'border-red-600/30 bg-red-600/5',
    priceColor: 'text-red-400',
    hoverGradient: 'from-red-600/10 to-transparent',
    accentLine: 'bg-red-500',
  },
];

const Services = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.1);
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-950/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="section-number mb-4 block">02</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            От простых чат-ботов до сложных ИИ-агентов — создаём решения под задачи вашего бизнеса.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mx-auto mt-6" />
        </div>

        {/* Mobile tabs */}
        <div className="lg:hidden mb-8">
          <div className="flex gap-2 justify-center flex-wrap">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                  activeService === index
                    ? 'border-red-500 bg-red-600/10 text-red-400'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile active card */}
        <div className="lg:hidden">
          {services.map((service, index) =>
            activeService === index && (
              <div key={index} className="card-cyber cyber-border">
                <div className={`w-16 h-16 mb-6 flex items-center justify-center border ${service.iconBorder}`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="font-mono text-2xl font-bold mb-1">{service.title}</h3>
                <p className={`${service.iconColor} font-mono text-sm mb-4`}>{service.subtitle}</p>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Стоимость:</span>
                    <p className={`font-mono text-xl font-bold ${service.priceColor}`}>{service.price}</p>
                  </div>
                  <a href="#contact" className="btn-primary py-3 px-6 text-xs">
                    Заказать <ArrowRight className="inline-block w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-cyber cyber-border group overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Subtle gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Accent top line */}
              <div className={`absolute top-0 left-0 right-0 h-px ${service.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 flex items-center justify-center border ${service.iconBorder} transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="font-mono text-2xl font-bold mb-1 text-foreground">{service.title}</h3>
                <p className={`font-mono text-sm ${service.iconColor} mb-4`}>{service.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Стоимость</span>
                    <p className={`font-mono text-xl font-bold ${service.priceColor}`}>{service.price}</p>
                  </div>
                  <a href="#contact" className="btn-primary py-3 px-5 text-xs">
                    Заказать <ArrowRight className="inline-block w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-muted-foreground mb-4">
            Не нашли подходящее решение? Разработаем индивидуальный проект.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-sm text-red-400 hover:text-red-300 transition-colors">
            Обсудить кастомное решение <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
