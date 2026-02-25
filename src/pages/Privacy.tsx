import { ArrowLeft, Shield, Lock, Eye, Database, Trash2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-neon-cyan" />
            <h1 className="font-mono text-3xl md:text-4xl font-bold">
              Политика конфиденциальности
            </h1>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">01.</span>
              Общие положения
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
                действует в отношении всей информации, которую ИП [ФИО] (далее — НейроБунт) 
                может получить о пользователе во время использования сайта neurobunt.ru.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие пользователя с настоящей 
                Политикой и указанными в ней условиями обработки его персональных данных. 
                В случае несогласия с этими условиями пользователь должен воздержаться от 
                использования сайта.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">02.</span>
              Какие данные мы собираем
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-dark-card/50">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-neon-pink" />
                  <span className="font-mono font-semibold">Автоматически</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• IP-адрес</li>
                  <li>• Тип браузера и ОС</li>
                  <li>• Cookies</li>
                  <li>• Дата и время визита</li>
                </ul>
              </div>
              <div className="p-4 border border-border bg-dark-card/50">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-neon-purple" />
                  <span className="font-mono font-semibold">Вы предоставляете</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Имя и фамилия</li>
                  <li>• Email адрес</li>
                  <li>• Номер телефона</li>
                  <li>• Название компании</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">03.</span>
              Цели обработки данных
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Мы обрабатываем персональные данные исключительно для следующих целей:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">→</span>
                  <span>Связь с пользователем по вопросам оказания услуг</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">→</span>
                  <span>Отправка информации о статусе проекта</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">→</span>
                  <span>Улучшение качества работы сайта</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">→</span>
                  <span>Статистические и аналитические цели</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">04.</span>
              Правовые основания
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Обработка персональных данных осуществляется на основании Федерального закона 
                № 152-ФЗ «О персональных данных» от 27.07.2006 г.:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  <span>Статья 6 — согласие субъекта персональных данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">•</span>
                  <span>Статья 9 — обработка специальных категорий данных</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-neon-pink mr-1" />
              <span className="text-neon-cyan">05.</span>
              Защита данных
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Мы принимаем необходимые и достаточные организационные и технические меры 
                для защиты персональных данных от неправомерного доступа, уничтожения, 
                изменения, блокирования, копирования, распространения.
              </p>
              <p>
                Данные передаются по защищённому HTTPS-соединению и хранятся на серверах 
                с ограниченным доступом.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-neon-purple mr-1" />
              <span className="text-neon-cyan">06.</span>
              Сроки хранения
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения 
                целей обработки, но не более 3 лет с момента последнего взаимодействия 
                с пользователем.
              </p>
              <p>
                По истечении указанного срока данные подлежат удалению или обезличиванию.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">07.</span>
              Ваши права
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>В соответствии с законодательством РФ вы имеете право:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">1.</span>
                  <span>Получить информацию об обработке ваших данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">2.</span>
                  <span>Требовать уточнения, блокирования или уничтожения данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">3.</span>
                  <span>Отозвать согласие на обработку данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-cyan mt-1">4.</span>
                  <span>Обжаловать действия оператора в Роскомнадзоре</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-mono text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-neon-cyan">08.</span>
              Контакты
            </h2>
            <div className="p-6 border border-border bg-dark-card/50">
              <p className="text-muted-foreground mb-4">
                По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
              </p>
              <div className="font-mono text-sm space-y-2">
                <p>
                  <span className="text-muted-foreground">Email:</span>{' '}
                  <a href="mailto:privacy@neurobunt.ru" className="text-neon-cyan hover:underline">
                    privacy@neurobunt.ru
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Адрес:</span>{' '}
                  <span className="text-foreground">197022, г. Санкт-Петербург, ул. Профессора Попова, д. 5</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} НейроБунт. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
