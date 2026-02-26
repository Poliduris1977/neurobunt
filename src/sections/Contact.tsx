import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Имя — минимум 2 символа'),
  company: z.string().optional(),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  service: z.string().min(1, 'Выберите услугу'),
  task: z.string().min(10, 'Опишите задачу — минимум 10 символов'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@neurobunt.ru', href: 'mailto:hello@neurobunt.ru' },
  { icon: Phone, label: 'Телефон', value: '+7 (812) 555-00-00', href: 'tel:+78125550000' },
  { icon: MapPin, label: 'Адрес', value: 'Санкт-Петербург', href: '#' },
  { icon: Clock, label: 'Режим работы', value: 'Пн–Пт: 9:00–19:00', href: '#' },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Vercel API endpoint — бэкенд который шлёт в Telegram
      const response = await fetch('https://neurobunt.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        handleSuccess(data);
      } else {
        const err = await response.json();
        toast.error('Ошибка отправки', {
          description: err.error || 'Позвоните нам: +7 (812) 555-00-00',
        });
      }
    } catch {
      toast.error('Нет соединения', {
        description: 'Позвоните нам: +7 (812) 555-00-00',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccess = (data: ContactFormData) => {
    setSubmitted(true);
    reset();
    toast.success('Заявка отправлена! Мы свергнем твою рутину за 24 часа ⚡', {
      description: `Ждите: ${data.phone} или ${data.email}`,
      duration: 7000,
    });
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-dark-bg border ${
      hasError ? 'border-red-500 focus:border-red-400' : 'border-border focus:border-neon-cyan'
    } text-foreground font-mono text-sm focus:outline-none transition-colors placeholder:text-muted-foreground/40`;

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="section-number mb-4 block">06</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            Начнём <span className="text-gradient">проект</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Расскажите о задаче — первая консультация бесплатно.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            {submitted ? (
              <div className="card-cyber cyber-border border-neon-cyan/30 text-center py-12">
                <div className="w-16 h-16 bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mx-auto mb-6">
                  <span className="font-mono text-3xl text-neon-cyan">✓</span>
                </div>
                <h3 className="font-mono text-2xl font-bold text-foreground mb-3">Заявка принята!</h3>
                <p className="text-muted-foreground mb-8">
                  Мы свяжемся с вами в течение 24 часов. Пока ждёте — подписывайтесь на наш Telegram.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://t.me/neurobunt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber text-neon-cyan py-3 px-6 text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Подписаться на Telegram
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-cyber cyber-border">
                <h3 className="font-mono text-xl font-bold text-foreground mb-6">
                  <span className="text-red-500">{'>'}</span> Оставить заявку
                </h3>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Имя *</label>
                    <input {...register('name')} className={inputClass(!!errors.name)} placeholder="Иван Иванов" />
                    {errors.name && <p className="mt-1 font-mono text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Компания</label>
                    <input {...register('company')} className={inputClass(false)} placeholder="ООО Компания" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Email *</label>
                    <input {...register('email')} type="email" className={inputClass(!!errors.email)} placeholder="ivan@company.ru" />
                    {errors.email && <p className="mt-1 font-mono text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Телефон *</label>
                    <input {...register('phone')} type="tel" className={inputClass(!!errors.phone)} placeholder="+7 (999) 000-00-00" />
                    {errors.phone && <p className="mt-1 font-mono text-xs text-red-400">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Интересующая услуга *</label>
                  <select {...register('service')} className={inputClass(!!errors.service)}>
                    <option value="">— Выберите услугу —</option>
                    <option value="chatbot">Чат-боты</option>
                    <option value="assistant">ИИ-ассистенты</option>
                    <option value="agent">ИИ-агенты</option>
                    <option value="audit">Бесплатный аудит рутины</option>
                    <option value="custom">Кастомное решение</option>
                  </select>
                  {errors.service && <p className="mt-1 font-mono text-xs text-red-400">{errors.service.message}</p>}
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Краткое описание задачи *</label>
                  <textarea
                    {...register('task')}
                    rows={4}
                    className={inputClass(!!errors.task) + ' resize-none'}
                    placeholder="Что хотите автоматизировать? Какой результат ожидаете?..."
                  />
                  {errors.task && <p className="mt-1 font-mono text-xs text-red-400">{errors.task.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    '⚡ Запустить бунт — Отправить заявку'
                  )}
                </button>

                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 card-cyber group transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-red-600/20 bg-red-600/5 flex-shrink-0 group-hover:scale-110 group-hover:border-red-500/40 transition-all duration-300">
                    <info.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="font-mono text-sm text-foreground group-hover:text-red-400 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 card-cyber border border-red-600/20">
              <h4 className="font-mono text-sm font-bold text-foreground mb-2">
                <span className="text-red-500 mr-2">{'>'}</span>Срочный проект?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Позвоните или напишите — обсудим и предложим решение в течение часа.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+78125550000" className="btn-primary py-3 flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  Позвонить сейчас
                </a>
                <a
                  href="https://t.me/neurobunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber py-3 flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
