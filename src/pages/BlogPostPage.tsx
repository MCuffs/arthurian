import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(String(slug || ''));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#112E51]">
      <Helmet>
        <title>{post.title} | Applied Korea Blog</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={`https://www.arthrian.cloud/blog/${post.slug}`} />
      </Helmet>

      <header className="border-b border-slate-100 bg-white sticky top-0 z-20">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-[#29AEE1] text-[20px]">APPLIED KOREA</Link>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="text-sm font-semibold text-slate-600 hover:text-[#112E51]">Blog</Link>
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-[#112E51]">Home</Link>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-14">
        <article className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#29AEE1] mb-3">Applied Korea Blog</p>
          <h1 className="text-[34px] md:text-[42px] font-extrabold tracking-tight leading-tight mb-4">{post.title}</h1>
          <div className="text-[13px] text-slate-500 font-semibold mb-8">
            {post.publishedAt} • {post.readMinutes} min read
          </div>
          {post.coverImage && (
            <div className="mb-10 w-full overflow-hidden rounded-xl shadow-sm border border-slate-100 h-[250px] md:h-[400px]">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="space-y-5 text-[17px] leading-[1.9] text-[#223D5D]">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[12px] font-bold px-2.5 py-1 rounded bg-[#EEF7FF] text-[#1E6EA1]">
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

