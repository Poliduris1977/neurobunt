/**
 * Скрипт пререндеринга для GitHub Pages
 * Автоматически читает все статьи из src/blog/posts.ts
 * Добавили статью в posts.ts — она автоматически попадёт в пререндер
 * Запускается автоматически после npm run build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.join(__dirname, '..', 'dist');
const postsFile = path.join(__dirname, '..', 'src', 'blog', 'posts.ts');
const SITE_URL  = 'https://neurobunt.ru';

// ─── Парсим posts.ts без компиляции TypeScript ────────────────────────────
// Извлекаем slug, title, description, date из каждого объекта-статьи

function parsePosts(src) {
  const posts = [];
  // Находим все блоки { slug: '...', title: '...', ... }
  const blockRe = /\{[\s\S]*?slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'[\s\S]*?\}/g;
  let match;
  while ((match = blockRe.exec(src)) !== null) {
    posts.push({
      slug:        match[1],
      title:       match[2],
      description: match[3],
      date:        match[4],
    });
  }
  return posts;
}

// ─── Читаем базовый index.html из dist ────────────────────────────────────
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// ─── Читаем и парсим posts.ts ─────────────────────────────────────────────
const postsSrc = fs.readFileSync(postsFile, 'utf-8');
const posts    = parsePosts(postsSrc);

if (posts.length === 0) {
  console.error('❌ Не удалось найти статьи в posts.ts');
  process.exit(1);
}

// ─── Страницы для пререндера ──────────────────────────────────────────────
const pages = [
  // Список статей
  {
    route:       '/blog',
    title:       'Блог — НейроБунт | ИИ для бизнеса',
    description: 'Кейсы, инсайты и практические руководства по внедрению ИИ в бизнес. Без воды — только то, что работает.',
    canonical:   `${SITE_URL}/blog`,
    date:        null,
  },
  // Каждая статья из posts.ts
  ...posts.map(p => ({
    route:       `/blog/${p.slug}`,
    title:       `${p.title} — НейроБунт`,
    description: p.description,
    canonical:   `${SITE_URL}/blog/${p.slug}`,
    date:        p.date,
  })),
];

// ─── Генерируем HTML для каждой страницы ─────────────────────────────────
let count = 0;

for (const page of pages) {
  const dir = path.join(distDir, ...page.route.split('/').filter(Boolean));
  fs.mkdirSync(dir, { recursive: true });

  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="title" content=".*?"\s*\/>/, `<meta name="title" content="${page.title}" />`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${page.canonical}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${page.canonical}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${page.description}" />`);

  if (page.date) {
    html = html.replace(
      '</head>',
      `  <meta property="article:published_time" content="${page.date}" />\n  </head>`
    );
  }

  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✓ ${page.route}`);
  count++;
}

console.log(`\nПререндеринг завершён: ${count} страниц`);
console.log('Статьи найдены автоматически из src/blog/posts.ts');
