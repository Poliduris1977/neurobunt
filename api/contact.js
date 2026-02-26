/**
 * Vercel Serverless Function — /api/contact
 * Принимает заявку с формы и отправляет в Telegram канал
 */

export default async function handler(req, res) {
  // CORS — разрешаем запросы с вашего сайта
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight запрос
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, service, task } = req.body;

  // Базовая валидация
  if (!name || !email || !phone || !service || !task) {
    return res.status(400).json({ error: 'Заполните все обязательные поля' });
  }

  // Токен и chat_id из переменных окружения (не хардкодим в коде)
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Название услуги для читаемости
  const serviceNames = {
    chatbot: '🤖 Чат-боты',
    assistant: '👤 ИИ-ассистенты',
    agent: '🧠 ИИ-агенты',
    audit: '🔍 Бесплатный аудит',
    custom: '⚙️ Кастомное решение',
  };

  const serviceName = serviceNames[service] || service;

  // Дата и время МСК
  const now = new Date();
  const dateStr = now.toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Текст сообщения
  const text = `
🔥 <b>НОВАЯ ЗАЯВКА — НейроБунт</b>

👤 <b>Имя:</b> ${name}
🏢 <b>Компания:</b> ${company || '—'}
📧 <b>Email:</b> ${email}
📞 <b>Телефон:</b> ${phone}
🎯 <b>Услуга:</b> ${serviceName}

📝 <b>Задача:</b>
${task}

⏰ <i>${dateStr} МСК</i>
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      console.error('Telegram API error:', data);
      return res.status(500).json({ error: 'Ошибка отправки в Telegram' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
}
