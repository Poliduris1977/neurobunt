import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Точность',
    description: 'Каждое решение точно подстроено под задачи вашего бизнеса',
    iconClass: 'text-neon-cyan',
    borderClass: 'border-neon-cyan/30 bg-neon-cyan/5',
  },
  {
    icon: Heart,
    title: 'Забота',
    description: 'Мы заботимся о ваших сотрудниках, освобождая их от рутины',
    iconClass: 'text-red-400',
    borderClass: 'border-red-600/30 bg-red-600/5',
  },
  {
    icon: Lightbulb,
    title: 'Инновации',
    description: 'Используем передовые технологии ИИ для максимальной эффективности',
    iconClass: 'text-neon-purple',
    borderClass: 'border-neon-purple/30 bg-neon-purple/5',
  },
  {
    icon: Users,
    title: 'Партнёрство',
    description: 'Работаем как часть вашей команды, не просто как подрядчики',
    iconClass: 'text-neon-cyan',
    borderClass: 'border-neon-cyan/30 bg-neon-cyan/5',
  },
];

const Mission = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.2);

  return (
    <section id="mission" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="section-number mb-4 block">01</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
              Наша <span className="text-gradient">миссия</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600" />
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Мы верим, что искусственный интеллект — это не замена человеку,
              а инструмент для раскрытия его потенциала. Наша цель — освободить
              бизнес от рутинных задач, чтобы люди могли сосредоточиться на
              творчестве, стратегии и развитии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый день мы помогаем компаниям внедрять ИИ-решения, которые
              работают <span className="text-neon-cyan font-mono">24/7</span>, не устают
              и не совершают ошибок от усталости.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card-cyber group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 mb-4 flex items-center justify-center border ${value.borderClass} transition-all duration-300 group-hover:scale-110`}>
                <value.icon className={`w-6 h-6 ${value.iconClass}`} />
              </div>
              <h3 className="font-mono text-xl font-bold mb-2 text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Quote — собственный, не перефраз чужого */}
        <div className={`mt-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative border-l-2 border-red-600 pl-8 max-w-3xl mx-auto">
            <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-neon-cyan to-transparent" />
            <p className="text-xl md:text-2xl font-mono text-foreground leading-relaxed">
              Рутина — это не судьба. Это баг в системе.{' '}
              <span className="text-red-400">Мы его фиксим.</span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-6 h-px bg-neon-cyan" />
              <span className="font-mono text-sm text-muted-foreground">Команда НейроБунт, Санкт-Петербург</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
