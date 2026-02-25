import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Александр Петров',
    initials: 'АП',
    role: 'CEO',
    company: 'TechFlow',
    industry: 'IT-консалтинг',
    avatarColor: 'bg-neon-cyan/20 border-neon-cyan/40 text-neon-cyan',
    content:
      'НейроБунт создал для нас ИИ-ассистента, который обрабатывает 80% первичных обращений клиентов. Это сократило нагрузку на отдел продаж и позволило им сосредоточиться на сложных сделках. Результат превзошёл ожидания.',
    rating: 5,
    metric: '80%',
    metricLabel: 'обращений автоматизировано',
    metricClass: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
  },
  {
    name: 'Елена Смирнова',
    initials: 'ЕС',
    role: 'Директор по маркетингу',
    company: 'StyleMarket',
    industry: 'E-commerce',
    avatarColor: 'bg-red-600/20 border-red-600/40 text-red-400',
    content:
      'Чат-бот для ВКонтакте и Telegram стал нашим самым эффективным "сотрудником". Работает круглосуточно, мгновенно отвечает на вопросы и помогает оформлять заказы. Конверсия выросла на 45%.',
    rating: 5,
    metric: '+45%',
    metricLabel: 'к конверсии',
    metricClass: 'text-red-400 border-red-600/30 bg-red-600/5',
  },
  {
    name: 'Дмитрий Волков',
    initials: 'ДВ',
    role: 'Основатель',
    company: 'LogiChain',
    industry: 'Логистика',
    avatarColor: 'bg-neon-purple/20 border-neon-purple/40 text-neon-purple',
    content:
      'ИИ-агент для управления складом изменил наш бизнес. Он прогнозирует спрос, оптимизирует запасы и автоматически формирует заказы поставщикам. Экономия составила 30% за первый квартал.',
    rating: 5,
    metric: '30%',
    metricLabel: 'экономии на логистике',
    metricClass: 'text-neon-purple border-neon-purple/30 bg-neon-purple/5',
  },
  {
    name: 'Мария Козлова',
    initials: 'МК',
    role: 'HR-директор',
    company: 'FinGroup',
    industry: 'Финансы',
    avatarColor: 'bg-neon-cyan/20 border-neon-cyan/40 text-neon-cyan',
    content:
      'Внедрили ИИ-ассистента для HR-отдела. Теперь он отвечает на вопросы сотрудников, помогает с документами и проводит первичный скрининг резюме. Команда освободила почти половину рабочего времени.',
    rating: 5,
    metric: '-50%',
    metricLabel: 'времени на рутину',
    metricClass: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
  },
  {
    name: 'Игорь Новиков',
    initials: 'ИН',
    role: 'Управляющий партнёр',
    company: 'LegalPro',
    industry: 'Юридические услуги',
    avatarColor: 'bg-red-600/20 border-red-600/40 text-red-400',
    content:
      'ИИ-ассистент помогает анализировать входящие документы и готовить первичные консультации. Время обработки запроса сократилось вдвое, а качество первичных ответов выросло заметно.',
    rating: 5,
    metric: '2×',
    metricLabel: 'быстрее обработка',
    metricClass: 'text-red-400 border-red-600/30 bg-red-600/5',
  },
];

// Avatar component: colored initials, no external images
const Avatar = ({ initials, colorClass }: { initials: string; colorClass: string }) => (
  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-mono font-bold text-lg flex-shrink-0 ${colorClass}`}>
    {initials}
  </div>
);

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="section-number mb-4 block">05</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            Истории <span className="text-gradient">успеха</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Компании, которые уже запустили бунт против рутины.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mx-auto mt-6" />
        </div>

        {/* Desktop featured testimonial */}
        <div className={`hidden lg:block transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="card-cyber cyber-border relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-red-600/10" />

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Author */}
              <div className="text-center md:text-left">
                <Avatar initials={active.initials} colorClass={active.avatarColor} />
                <h3 className="font-mono text-xl font-bold text-foreground mt-4 mb-1">{active.name}</h3>
                <p className="text-sm text-red-400 font-mono">{active.role}</p>
                <p className="text-sm text-muted-foreground font-mono">{active.company}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{active.industry}</p>
                <div className="flex items-center gap-1 mt-3 justify-center md:justify-start">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{active.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 border ${active.metricClass}`}>
                    <span className="font-mono text-2xl font-bold">{active.metric}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{active.metricLabel}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Отзыв ${index + 1}`}
                    className={`h-2 transition-all duration-300 ${
                      index === activeIndex ? 'w-8 bg-red-500' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} aria-label="Предыдущий" className="p-2 border border-border hover:border-red-500 hover:text-red-400 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} aria-label="Следующий" className="p-2 border border-border hover:border-red-500 hover:text-red-400 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: all cards */}
        <div className="lg:hidden grid gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`card-cyber transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar initials={t.initials} colorClass={t.avatarColor} />
                <div>
                  <h3 className="font-mono font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm text-red-400 font-mono">{t.role}</p>
                  <p className="text-xs text-muted-foreground font-mono">{t.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className={`flex items-center gap-2 px-3 py-1 border ${t.metricClass}`}>
                  <span className="font-mono text-lg font-bold">{t.metric}</span>
                  <span className="text-xs text-muted-foreground">{t.metricLabel}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
