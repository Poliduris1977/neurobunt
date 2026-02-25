import { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';

/**
 * Sticky bar: appears when user scrolls into the #testimonials section,
 * meaning they're already engaged and considering. NOT a time-based popup.
 */
const StickyAuditBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Trigger when testimonials section enters viewport
    const target = document.getElementById('benefits');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isDismissed) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
      role="complementary"
      aria-label="Предложение аудита"
    >
      <div className="bg-black border-t-2 border-red-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-red-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white">
                Бесплатный аудит рутины — 15 минут
              </p>
              <p className="font-mono text-xs text-muted-foreground hidden sm:block">
                Покажем, что автоматизировать прямо сейчас. Без обязательств и продаж.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              onClick={handleDismiss}
              className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-mono text-xs tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 whitespace-nowrap"
            >
              Записаться →
            </a>
            <button
              onClick={handleDismiss}
              className="p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyAuditBar;
