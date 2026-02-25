import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MessageSquare, Code, Rocket, Settings, Search, CheckCircle, ChevronDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Консультация',
    description:
      'Проводим бесплатную консультацию: изучаем ваши бизнес-процессы, боли и цели. Определяем, какое ИИ-решение подойдёт лучше всего.',
    details: ['Анализ текущих процессов', 'Выявление точек роста', 'Определение метрик успеха', 'Презентация возможностей'],
    iconColor: 'text-neon-cyan',
    iconBorder: 'border-neon-cyan/30 bg-neon-cyan/5',
    dotColor: 'bg-neon-cyan border-neon-cyan',
    numberColor: 'text-neon-cyan',
    bulletColor: 'bg-neon-cyan',
  },
  {
    number: '02',
    icon: Search,
    title: 'Аудит и планирование',
    description:
      'Проводим детальный аудит, составляем техническое задание и разрабатываем стратегию внедрения с чёткими сроками и этапами.',
    details: ['Технический аудит', 'Разработка ТЗ', 'Планирование интеграций', 'Согласование бюджета'],
    iconColor: 'text-red-400',
    iconBorder: 'border-red-600/30 bg-red-600/5',
    dotColor: 'bg-red-500 border-red-500',
    numberColor: 'text-red-400',
    bulletColor: 'bg-red-500',
  },
  {
    number: '03',
    icon: Code,
    title: 'Разработка',
    description:
      'Создаём ИИ-решение с учётом ваших требований. Обучаем модели на ваших данных, настраиваем интеграции и проводим тестирование.',
    details: ['Прототипирование', 'Обучение ИИ-моделей', 'Настройка интеграций', 'Внутреннее тестирование'],
    iconColor: 'text-neon-purple',
    iconBorder: 'border-neon-purple/30 bg-neon-purple/5',
    dotColor: 'bg-neon-purple border-neon-purple',
    numberColor: 'text-neon-purple',
    bulletColor: 'bg-neon-purple',
  },
  {
    number: '04',
    icon: Settings,
    title: 'Внедрение',
    description:
      'Плавно внедряем решение в ваши процессы. Обучаем сотрудников, переносим данные и настраиваем мониторинг.',
    details: ['Обучение команды', 'Миграция данных', 'Настройка мониторинга', 'Документация'],
    iconColor: 'text-neon-cyan',
    iconBorder: 'border-neon-cyan/30 bg-neon-cyan/5',
    dotColor: 'bg-neon-cyan border-neon-cyan',
    numberColor: 'text-neon-cyan',
    bulletColor: 'bg-neon-cyan',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Запуск',
    description:
      'Запускаем решение в продакшн. Обеспечиваем стабильную работу и собираем первую обратную связь для оптимизации.',
    details: ['Продакшн-запуск', 'Мониторинг метрик', 'Сбор обратной связи', 'Первые улучшения'],
    iconColor: 'text-red-400',
    iconBorder: 'border-red-600/30 bg-red-600/5',
    dotColor: 'bg-red-500 border-red-500',
    numberColor: 'text-red-400',
    bulletColor: 'bg-red-500',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Поддержка',
    description:
      'Техническая поддержка, регулярные обновления и постоянное улучшение ИИ-моделей на основе новых данных.',
    details: ['Техподдержка 24/7', 'Регулярные обновления', 'Обучение на новых данных', 'Масштабирование'],
    iconColor: 'text-neon-purple',
    iconBorder: 'border-neon-purple/30 bg-neon-purple/5',
    dotColor: 'bg-neon-purple border-neon-purple',
    numberColor: 'text-neon-purple',
    bulletColor: 'bg-neon-purple',
  },
];

// Mobile accordion item
const AccordionStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border ${step.iconBorder}`}>
          <step.icon className={`w-5 h-5 ${step.iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`font-mono text-xs ${step.numberColor}`}>{step.number}</span>
          <p className="font-mono text-sm font-bold text-foreground">{step.title}</p>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
          <ul className="space-y-2">
            {step.details.map((detail, di) => (
              <li key={di} className="flex items-center gap-2 text-sm">
                <div className={`w-1.5 h-1.5 flex-shrink-0 ${step.bulletColor}`} />
                <span className="text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.1);
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section id="process" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="section-number mb-4 block">03</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            Как мы <span className="text-gradient">работаем</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Прозрачный процесс от первой встречи до запуска. Вы всегда знаете, на каком этапе находится проект.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mx-auto mt-6" />
        </div>

        {/* Mobile: accordion — much better than 6 full cards */}
        <div className="lg:hidden space-y-2">
          {steps.map((step, index) => (
            <AccordionStep key={index} step={step} index={index} />
          ))}
        </div>

        {/* Desktop: interactive tabs */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-3 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative p-4 text-left transition-all duration-300 border ${
                  activeStep === index
                    ? 'bg-dark-card border-red-500/50'
                    : 'bg-dark-card border-border hover:border-muted-foreground/50'
                }`}
              >
                {activeStep === index && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-red-500" />
                )}
                <span className={`font-mono text-xs ${activeStep === index ? step.numberColor : 'text-muted-foreground'}`}>
                  {step.number}
                </span>
                <div className="mt-2">
                  <step.icon className={`w-6 h-6 ${activeStep === index ? step.iconColor : 'text-muted-foreground'}`} />
                </div>
                <p className={`mt-2 font-mono text-xs font-semibold ${activeStep === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className={`card-cyber cyber-border transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center border ${active.iconBorder}`}>
                    <active.icon className={`w-8 h-8 ${active.iconColor}`} />
                  </div>
                  <div>
                    <span className={`font-mono text-sm ${active.numberColor}`}>Этап {active.number}</span>
                    <h3 className="font-mono text-2xl font-bold text-foreground">{active.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{active.description}</p>
              </div>
              <div className="bg-dark-bg/50 p-6 border border-border">
                <h4 className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Что включает этап:</h4>
                <ul className="space-y-3">
                  {active.details.map((detail, di) => (
                    <li key={di} className="flex items-center gap-3">
                      <div className={`w-2 h-2 flex-shrink-0 ${active.bulletColor}`} />
                      <span className="text-sm text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline dots */}
          <div className="mt-8 flex items-center justify-between px-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index <= activeStep ? step.dotColor : 'border-muted-foreground/30 bg-transparent'
                }`} />
                {index < steps.length - 1 && (
                  <div className={`h-px transition-all duration-500 ${index < activeStep ? 'bg-red-500' : 'bg-border'}`}
                    style={{ width: '80px' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
