import { useEffect, useState } from 'react';
import { ArrowDownRight, Terminal, Cpu, Activity, Phone, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const codeLines = [
  { text: 'const routine = await Business.scan();', color: 'text-muted-foreground' },
  { text: 'const ai = new NeuroBunt.Agent({ mode: "full" });', color: 'text-neon-cyan' },
  { text: 'await ai.eliminate(routine.bottlenecks);', color: 'text-red-400' },
  { text: 'await ai.automate(routine.repetitive);', color: 'text-red-400' },
  { text: 'team.focus(STRATEGY | CREATIVITY);', color: 'text-neon-cyan' },
  { text: '// Routine: ELIMINATED. ROI: +340%', color: 'text-green-400' },
];

const TYPED_TEXT = 'import { Freedom } from "@neurobunt/core";';

const Hero = () => {
  const [heroRef, isVisible] = useIntersectionObserver<HTMLElement>(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= TYPED_TEXT.length) {
        setTypedText(TYPED_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-bg to-red-950/15" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-red-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-0 w-28 h-px bg-red-600" />
      <div className="absolute top-24 left-0 w-px h-28 bg-red-600" />
      <div className="absolute bottom-24 right-0 w-28 h-px bg-neon-cyan/60" />
      <div className="absolute bottom-24 right-0 w-px h-28 bg-neon-cyan/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left Column */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs">
              <Activity className="w-3.5 h-3.5 text-neon-cyan animate-pulse" aria-hidden="true" />
              <span className="text-neon-cyan tracking-widest">SPB://NEUROBUNT.AGENCY</span>
              <span className="text-border" aria-hidden="true">|</span>
              <span className="text-green-400 font-mono">● ONLINE</span>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
                {'>'} SYSTEM.INIT() — v2.6.0
              </div>
              <h1 className="font-mono font-bold tracking-tighter leading-none">
                <span className="block text-6xl sm:text-7xl lg:text-8xl text-foreground glitch-text" data-text="НЕЙРО">
                  НЕЙРО
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl -mt-2 glitch-text glow-red" style={{ color: '#ef4444' }} data-text="БУНТ">
                  БУНТ
                </span>
                {/* SEO: ключевая фраза в H1, визуально как подзаголовок */}
                <span className="block text-base sm:text-lg font-normal text-muted-foreground mt-4 tracking-normal font-sans">
                  ИИ-агенты и чат-боты для автоматизации бизнеса — Санкт-Петербург
                </span>
              </h1>
            </div>

            <div className="border-l-2 border-red-600 pl-4 space-y-1">
              <p className="font-mono text-lg sm:text-xl text-muted-foreground">
                <span className="text-red-500" aria-hidden="true">//</span> Мы не против людей.
              </p>
              <p className="font-mono text-lg sm:text-xl text-foreground">
                <span className="text-red-500" aria-hidden="true">//</span> Мы против их <span className="text-neon-cyan">рутины</span>.
              </p>
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              Внедряем ИИ-агентов и чат-ботов, которые берут рутину на себя.
              Сотрудники освобождаются — бизнес растёт.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary group flex items-center gap-2">
                ⚡ Запустить бунт
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="tel:+78125550000"
                className="btn-cyber flex items-center gap-2 py-4 px-6"
                aria-label="Позвонить нам: +7 995 718 7519"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+7 995 718 7519</span>
              </a>

              <a
                href="https://t.me/Neuro_bunt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 border border-border font-mono text-sm text-muted-foreground hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300"
                aria-label="Написать в Telegram @Neuro_bunt"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Telegram
              </a>
            </div>

            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border/40">
              {[
                { value: '50+', label: 'проектов' },
                { value: '30+', label: 'клиентов' },
                { value: '40%', label: 'экономия' },
                { value: '24/7', label: 'работа' },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — terminal */}
          <div className={`hidden lg:block relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative bg-dark-card border border-border overflow-hidden shadow-2xl" role="img" aria-label="Демо кода НейроБунт агента">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/40">
                <div className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" aria-hidden="true" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">neurobunt@spb:~/eliminate-routine</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-neon-cyan" aria-hidden="true">$</span>
                  <span className="text-foreground">{typedText}</span>
                  <span className="w-2 h-4 bg-neon-cyan animate-pulse" aria-hidden="true" />
                </div>

                <div className="space-y-1" aria-hidden="true">
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${900 + i * 120}ms` }}
                    >
                      <span className="text-muted-foreground/40 select-none w-4 text-right flex-shrink-0">{i + 1}</span>
                      <span className={line.color}>{line.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
                  neurobunt@spb:~$ _
                </div>
              </div>

              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                aria-hidden="true"
                style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)' }}
              />
            </div>

            <div className="absolute -top-6 -right-6 p-3 bg-dark-card/80 border border-red-600/20 backdrop-blur-sm transform rotate-3" aria-hidden="true">
              <Terminal className="w-5 h-5 text-red-500/40" />
            </div>
            <div className="absolute -bottom-4 -left-6 p-3 bg-dark-card/80 border border-neon-cyan/20 backdrop-blur-sm transform -rotate-6" aria-hidden="true">
              <Cpu className="w-5 h-5 text-neon-cyan/40" />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-2 text-muted-foreground" aria-hidden="true">
        <div className="w-px h-8 bg-gradient-to-b from-red-600/60 to-transparent" />
        <span className="font-mono text-xs tracking-wider">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
