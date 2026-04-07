import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | SkillMax Consulting',
  description: 'Insights, trends, and expertise from SkillMax Consulting on development, innovation, and impact in East Africa.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Digital Transformation in East African Development',
    excerpt: 'How technology is reshaping development initiatives across East Africa, with insights from our recent projects.',
    date: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    category: 'Technology',
    readTime: '5 min read',
    slug: 'digital-transformation-east-africa'
  },
  {
    id: 2,
    title: 'Building Sustainable Partnerships with NGOs',
    excerpt: 'Best practices for creating lasting partnerships between development firms and non-governmental organizations.',
    date: '2024-01-10',
    author: 'Michael Chen',
    category: 'Partnerships',
    readTime: '4 min read',
    slug: 'sustainable-ngo-partnerships'
  },
  {
    id: 3,
    title: 'Impact Measurement: Beyond the Numbers',
    excerpt: 'A comprehensive approach to measuring and communicating the real impact of development projects.',
    date: '2024-01-05',
    author: 'Dr. Amina Hassan',
    category: 'Impact',
    readTime: '6 min read',
    slug: 'impact-measurement-beyond-numbers'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_22%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(15,23,42,0.9))] py-24 text-white">
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute left-10 top-12 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl animate-float" />
        <div className="absolute right-10 top-20 h-52 w-52 rounded-full bg-cyan-400/12 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-amber-400/25 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-amber-200 mb-6">
              Thought leadership for development impact
            </p>
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6">
              Expert Insights for Leaders
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300">
              Thoughtful analysis, project stories, and sector trends designed for donors, governments, and NGO partners.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-amber-500/20">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/60 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4 transition-colors duration-200 group-hover:text-amber-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div>{post.author}</div>
                  <Link href={`/blog/${post.slug}`} className="text-amber-300 hover:text-amber-200 font-semibold">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-900/80 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Subscribe to curated updates that connect sector trends, impact strategy, and regional insight.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}