import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import { getBlogPost, getRecentPosts } from '../../blog/posts';
import Navigation from '../../sections/Navigation';
import Footer from '../../sections/Footer';

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');
  const related = getRecentPosts(4).filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Блог НейроБунт`;
    }
    window.scrollTo(0, 0);
  }, [post, slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована');
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />

      <main className="pt-24 pb-32">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-red-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Все статьи
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-neon-cyan/20 bg-neon-cyan/5 font-mono text-xs text-neon-cyan">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} минут чтения
              </span>
              <span className="text-red-400">{post.author}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 border border-border hover:border-red-500/40 font-mono text-xs text-muted-foreground hover:text-red-400 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" /> Поделиться
            </button>
          </div>

          {/* Description lead */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-red-600 pl-4">
            {post.description}
          </p>

          {/* Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 border border-border font-mono text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 border border-red-600/20 bg-red-600/5">
            <p className="font-mono text-lg font-bold text-foreground mb-2">
              Хотите внедрить это в своём бизнесе?
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Расскажем что можно автоматизировать прямо сейчас. Первая консультация — бесплатно.
            </p>
            <Link to="/#contact" className="btn-primary py-3 px-6 inline-block text-sm">
              Записаться на консультацию →
            </Link>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="font-mono text-2xl font-bold text-foreground mb-8">
              Другие статьи
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="card-cyber group hover:border-red-500/40 transition-all duration-300"
                >
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-neon-cyan/20 bg-neon-cyan/5 font-mono text-xs text-neon-cyan mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-mono text-sm font-bold text-foreground group-hover:text-red-400 transition-colors mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/40">
                    <span className="font-mono text-xs text-muted-foreground">{p.readTime} мин</span>
                    <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
