import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Clock, TrendingUp, Shield, Zap, Users, BarChart3, Headphones, Wallet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const benefits = [
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Освободите до 40% рабочего времени сотрудников от рутинных задач',
    stat: '40%',
    statLabel: 'времени свободно',
    iconClass: 'text-neon-cyan',
    borderClass: 'border-neon-cyan/20 bg-neon-cyan/5',
  },
  {
    icon: TrendingUp,
    title: 'Рост продаж',
    description: 'Увеличьте конверсию за счёт мгновенной обработки заявок 24/7',
    stat: '+35%',
    statLabel: 'к конверсии',
    iconClass: 'text-red-400',
    borderClass: 'border-red-600/20 bg-red-600/5',
  },
  {
    icon: Shield,
    title: 'Стабильность',
    description: 'ИИ не устаёт, не болеет и работает с постоянной эффективностью',
    stat: '99.9%',
    statLabel: 'аптайм',
    iconClass: 'text-neon-purple',
    borderClass: 'border-neon-purple/20 bg-neon-purple/5',
  },
  {
    icon: Wallet,
    title: 'Снижение затрат',
    description: 'Сократите расходы на рутинные операции и обучение персонала',
    stat: '-30%',
    statLabel: 'к затратам',
    iconClass: 'text-neon-cyan',
    borderClass: 'border-neon-cyan/20 bg-neon-cyan/5',
  },
  {
    icon: Users,
    title: 'Лояльность клиентов',
    description: 'Мгновенные ответы и персонализированный сервис повышают NPS',
    stat: '+50%',
    statLabel: 'к NPS',
    iconClass: 'text-red-400',
    borderClass: 'border-red-600/20 bg-red-600/5',
  },
  {
    icon: BarChart3,
    title: 'Аналитика данных',
    description: 'Получайте ценные инсайты из каждого взаимодействия с клиентами',
    stat: '100%',
    statLabel: 'данных в работе',
    iconClass: 'text-neon-purple',
    borderClass: 'border-neon-purple/20 bg-neon-purple/5',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Круглосуточный сервис без перерывов, выходных и человеческого фактора',
    stat: '24/7',
    statLabel: 'доступность',
    iconClass: 'text-neon-cyan',
    borderClass: 'border-neon-cyan/20 bg-neon-cyan/5',
  },
  {
    icon: Zap,
    title: 'Масштабируемость',
    description: 'ИИ легко масштабируется с ростом бизнеса — без найма и обучения',
    stat: '∞',
    statLabel: 'масштаб',
    iconClass: 'text-red-400',
    borderClass: 'border-red-600/20 bg-red-600/5',
  },
];

// Chart: concrete before/after numbers, not abstract indices
const chartData = [
  { label: 'Время на рутину, ч/д', before: 4.5, after: 2.7 },
  { label: 'Конверсия заявок, %', before: 18, after: 24 },
  { label: 'Затраты на поддержку', before: 100, after: 70 },
  { label: 'Скорость ответа, мин', before: 45, after: 2 },
];

const COLORS = ['#ef4444', '#06b6d4', '#a855f7', '#ef4444'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-dark-card border border-red-600/20 p-3 font-mono text-xs shadow-xl">
      <p className="text-foreground mb-2 font-bold">{label}</p>
      <p className="text-muted-foreground">До ИИ: <span className="text-red-400 font-bold">{payload[0]?.value}</span></p>
      <p className="text-muted-foreground">После ИИ: <span className="text-neon-cyan font-bold">{payload[1]?.value}</span></p>
    </div>
  );
};

const Benefits = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.1);

  return (
    <section id="benefits" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/8 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="section-number mb-4 block">04</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            Ваши <span className="text-gradient">результаты</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Реальные данные по нашим проектам. Не маркетинг — метрики.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mx-auto mt-6" />
        </div>

        {/* Chart */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="card-cyber border border-red-600/15 p-6">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
              {'// BEFORE_VS_AFTER: Средние показатели по клиентам НейроБунт'}
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              * Значения нормированы для отображения на одной шкале. Полные кейсы — по запросу.
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }} barGap={6}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis
                  dataKey="label"
                  tick={{ fill: '#6b7280', fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#6b7280', fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                <Bar dataKey="before" name="До ИИ" fill="#374151" radius={[3, 3, 0, 0]} maxBarSize={36} />
                <Bar dataKey="after" name="После ИИ" radius={[3, 3, 0, 0]} maxBarSize={36}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} opacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-6 mt-3 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-2 bg-[#374151] rounded-sm" />
                <span>До внедрения ИИ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-2 bg-red-500 rounded-sm" />
                <span>После внедрения ИИ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`card-cyber group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 flex items-center justify-center border ${b.borderClass} group-hover:scale-110 transition-transform duration-300`}>
                  <b.icon className={`w-5 h-5 ${b.iconClass}`} />
                </div>
                <div className="text-right">
                  <div className={`font-mono text-xl font-bold text-foreground`}>
                    {b.stat}
                  </div>
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                    {b.statLabel}
                  </div>
                </div>
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground mb-1.5">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
