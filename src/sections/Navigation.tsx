import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#mission',   label: 'Миссия',        id: 'mission' },
  { href: '/#services',  label: 'Услуги',         id: 'services' },
  { href: '/#process',   label: 'Процесс',        id: 'process' },
  { href: '/#benefits',  label: 'Преимущества',   id: 'benefits' },
  { href: '/#contact',   label: 'Контакты',       id: 'contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHomePage) return; // на страницах блога не отслеживаем секции

      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollMid = window.scrollY + window.innerHeight * 0.4;

      let current = '';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollMid) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cpu
                className="w-8 h-8 text-red-500 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
            </div>
            <span className="font-mono font-bold text-xl tracking-tight">
              <span className="text-foreground">Нейро</span>
              <span className="text-red-500">Бунт</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-mono text-sm transition-colors duration-300 group ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-red-500'
                        : 'w-0 bg-neon-cyan group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="/blog"
              className={`relative font-mono text-sm transition-colors duration-300 group ${
                location.pathname.startsWith('/blog')
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Блог
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  location.pathname.startsWith('/blog')
                    ? 'w-full bg-red-500'
                    : 'w-0 bg-neon-cyan group-hover:w-full'
                }`}
              />
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="/#contact" className="btn-primary text-sm py-3 px-6">
              Начать проект
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6" aria-hidden />
              : <Menu className="w-6 h-6" aria-hidden />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block font-mono text-lg transition-colors ${
                isHomePage && activeSection === link.id
                  ? 'text-red-400'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isHomePage && activeSection === link.id && (
                <span className="text-red-500 mr-2">›</span>
              )}
              {link.label}
            </a>
          ))}
          <a
            href="/blog"
            className={`block font-mono text-lg transition-colors ${
              location.pathname.startsWith('/blog')
                ? 'text-red-400'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {location.pathname.startsWith('/blog') && (
              <span className="text-red-500 mr-2">›</span>
            )}
            Блог
          </a>
          <a
            href="/#contact"
            className="block btn-primary text-center mt-6 py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Начать проект
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;