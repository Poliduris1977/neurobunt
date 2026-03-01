import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../../blog/posts';
import Navigation from '../../sections/Navigation';
import Footer from '../../sections/Footer';

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const BlogList = () => {
  useEffect(() => {
    document.title = 'Блог — НейроБунт | ИИ для бизнеса';
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />

      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-number mb-4 block">// BLOG</span>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">
              Блог <span className="text-gradient">НейроБунт</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Кейсы, инсайты и практические руководства по внедрению ИИ в бизнес.
              Без воды — только то, что работает.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-red-600 mt-6" />
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card-cyber group flex flex-col h-full hover:border-red-500/40 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-neon-cyan/20 bg-neon-cyan/5 font-mono text-xs text-neon-cyan">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-mono text-lg font-bold text-foreground mb-3 group-hover:text-red-400 transition-colors leading-snug flex-1">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} мин
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-8 border border-red-600/20 bg-red-600/5">
            <p className="font-mono text-lg font-bold text-foreground mb-2">
              Хотите внедрить ИИ в свой бизнес?
            </p>
            <p className="text-muted-foreground mb-6">
              Первая консультация — бесплатно. Расскажем что можно автоматизировать прямо сейчас.
            </p>
            <Link to="/#contact" className="btn-primary py-3 px-8 inline-block">
              Записаться на консультацию →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
