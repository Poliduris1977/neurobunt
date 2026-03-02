/**
 * Генератор sitemap.xml
 * Запускается после пререндеринга как часть npm run build
 * Автоматически читает все статьи из src/blog/posts.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.join(__dirname, '..', 'dist');
const postsFile = path.join(__dirname, '..', 'src', 'blog', 'posts.ts');
const SITE_URL  = 'https://neurobunt.ru';

// ─── Парсим посты из posts.ts ─────────────────────────────────────────────
function parsePosts(src) {
  const posts = [];
  const blockRe = /slug:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'/g;
  let match;
  while ((match = blockRe.exec(src)) !== null) {
    posts.push({ slug: match[1], date: match[2] });
  }
  return posts;
}

const postsSrc = fs.readFileSync(postsFile, 'utf-8');
const posts    = parsePosts(postsSrc);

// ─── Статические страницы ─────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/',     changefreq: 'weekly',  priority: '1.0', lastmod: today },
  { url: '/blog', changefreq: 'weekly',  priority: '0.8', lastmod: today },
];

const blogPages = posts.map(p => ({
  url:        `/blog/${p.slug}`,
  changefreq: 'monthly',
  priority:   '0.7',
  lastmod:    p.date,
}));

const allPages = [...staticPages, ...blogPages];

// ─── Генерируем XML ───────────────────────────────────────────────────────
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`✓ sitemap.xml — ${allPages.length} страниц`);
