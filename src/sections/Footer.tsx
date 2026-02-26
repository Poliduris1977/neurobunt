import { Cpu, Send, Instagram, Linkedin, Github, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Услуги',
      links: [
        { label: 'Чат-боты', href: '#services' },
        { label: 'ИИ-ассистенты', href: '#services' },
        { label: 'ИИ-агенты', href: '#services' },
        { label: 'Кастомные решения', href: '#contact' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { label: 'О нас', href: '#mission' },
        { label: 'Процесс работы', href: '#process' },
        { label: 'Кейсы', href: '#contact', note: true },
        { label: 'Карьера', href: '#contact', note: true },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { label: 'FAQ', href: '#contact', note: true },
        { label: 'Блог', href: '#contact', note: true },
        { label: 'Контакты', href: '#contact' },
      ],
    },
  ];

  const social = [
    { icon: Send, href: 'https://t.me/neurobunt', label: 'Telegram' },
    { icon: Instagram, href: 'https://instagram.com/neurobunt', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/neurobunt', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/neurobunt', label: 'GitHub' },
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quick contact strip */}
        <div className="mb-14 p-5 border border-red-600/20 bg-red-600/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-foreground font-bold">Готовы начать бунт?</p>
            <p className="text-sm text-muted-foreground mt-0.5">Первая консультация — бесплатно. Отвечаем за 24 часа.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+79957187519"
              className="btn-primary py-2.5 px-5 text-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              +7 995 718 7519
            </a>
            <a
              href="https://t.me/Neuro_bunt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber py-2.5 px-5 text-xs flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              @Neuro_bunt
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-5">
              <Cpu className="w-9 h-9 text-red-500 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <span className="font-mono font-bold text-xl tracking-tight">
                <span className="text-foreground">Нейро</span>
                <span className="text-red-500">Бунт</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-3 max-w-xs leading-relaxed">
              ИИ-агентство в Санкт-Петербурге. Создаём чат-ботов, ИИ-ассистентов
              и автономных агентов для бизнеса.
            </p>
            <p className="font-mono text-sm text-red-400 mb-5">
              "Рутина — это баг. Мы его фиксим."
            </p>
            <div className="flex items-center gap-2">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-border hover:border-red-500 hover:text-red-400 transition-all duration-300 text-muted-foreground"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs font-bold text-foreground mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-y border-border/30 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-mono text-sm font-bold text-foreground mb-1">Подпишитесь на новости ИИ</h4>
              <p className="text-sm text-muted-foreground">Кейсы и инсайты — раз в неделю, без спама</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-60 px-4 py-3 bg-dark-bg border border-border text-foreground font-mono text-sm focus:border-red-500 focus:outline-none transition-colors"
              />
              <button className="btn-primary py-3 px-5 text-xs">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>© {currentYear} НейроБунт. Все права защищены.</span>
            <a href="/privacy.html" className="hover:text-red-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-red-400 transition-colors">Условия использования</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">Санкт-Петербург</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
