import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter | SkillMax Consulting',
  description: 'Subscribe to our newsletter for the latest insights on development, innovation, and impact in East Africa.',
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.12),_transparent_20%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.88))] py-24 text-white">
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="absolute left-8 top-14 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl animate-float" />
        <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-amber-400/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-amber-200 mb-6">
              High-value analysis delivered monthly
            </p>
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6">
              Stay Informed
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300">
              Get exclusive insights, project updates, and industry trends delivered to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/95 rounded-3xl border border-slate-800/80 p-10 shadow-2xl shadow-slate-950/30 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              What You'll Receive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Weekly Insights
                  </h3>
                  <p className="text-slate-300">
                    Curated articles on development trends, best practices, and innovative solutions in East Africa.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Project Updates
                  </h3>
                  <p className="text-slate-300">
                    Behind-the-scenes looks at our ongoing projects and their impact on communities.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/15 text-violet-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Expert Interviews
                  </h3>
                  <p className="text-slate-300">
                    Conversations with thought leaders, policymakers, and innovators shaping East Africa's future.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Resource Library
                  </h3>
                  <p className="text-slate-300">
                    Access to exclusive reports, case studies, and tools for development practitioners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Subscribe Now
              </h2>
              <p className="text-slate-400 text-lg">
                Join over 500 development professionals who trust our insights.
              </p>
            </div>

            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    placeholder="Your organization (optional)"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-400 focus:ring-amber-400"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-400">
                    I agree to receive newsletters and updates from SkillMax Consulting. You can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}