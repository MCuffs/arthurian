import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllBlogPosts } from '../data/blogPosts';

export function BlogListPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#112E51]">
      <Helmet>
        <title>Blog | Korean Resume Tips | Applied Korea</title>
        <meta
          name="description"
          content="Applied Korea blog: Korean resume tips, interview strategy, and practical guidance for foreigners applying to Korean companies."
        />
        <link rel="canonical" href="https://www.arthrian.cloud/blog" />
      </Helmet>

      <header className="border-b border-slate-100 bg-white sticky top-0 z-20">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-[#29AEE1] text-[20px]">APPLIED KOREA</Link>
          <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-[#112E51]">Home</Link>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-[12px] uppercase tracking-[0.18em] font-bold text-[#29AEE1] mb-2">Blog</p>
          <h1 className="text-[36px] font-extrabold tracking-tight mb-3">Korean Career Insights</h1>
          <p className="text-[16px] text-[#556987]">Practical Korean resume tips, interview strategies, and actionable guidance for a successful career in Korea.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl border border-slate-200 hover:border-[#29AEE1]/40 hover:shadow-lg transition-all"
            >
              {post.coverImage ? (
                <div
                  className="h-48 rounded-t-2xl border-b border-slate-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                />
              ) : (
                <div className={`h-48 rounded-t-2xl bg-gradient-to-br ${post.coverGradient} border-b border-slate-100`} />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[12px] text-slate-500 font-semibold mb-3">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readMinutes} min read</span>
                </div>
                <h2 className="text-[24px] font-extrabold tracking-tight mb-3">{post.title}</h2>
                <p className="text-[14px] text-[#556987] leading-relaxed mb-4">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-bold px-2 py-1 rounded bg-[#EEF7FF] text-[#1E6EA1]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

