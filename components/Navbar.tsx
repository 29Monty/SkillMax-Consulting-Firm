'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 text-slate-50 hover:text-white transition-colors">
            <img
              src="/292280102_716643223003475_96406768124874801_n.jpg"
              alt="SkillMax Consulting Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold tracking-tight">SkillMax</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <div className="relative group">
              <button className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl shadow-slate-950/40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/project-evaluations" className="block px-5 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-900 rounded-2xl">
                  Project Evaluations
                </Link>
                <Link href="/services/third-party-monitoring" className="block px-5 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-900 rounded-2xl">
                  Third-Party Monitoring
                </Link>
                <Link href="/services/organizational-capacity-development" className="block px-5 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-900 rounded-2xl">
                  Organizational Capacity Development
                </Link>
                <Link href="/services/proposal-grant-writing" className="block px-5 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-900 rounded-2xl">
                  Proposal & Grant Writing
                </Link>
                <Link href="/services/team-building-leadership" className="block px-5 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-900 rounded-2xl">
                  Team Building & Leadership Development
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">About</Link>
            <Link href="/team" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Team</Link>
            <Link href="/careers" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Careers</Link>
            <Link href="/blog" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Blog</Link>
            <Link href="/case-studies" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Case Studies</Link>
            <Link href="/testimonials" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Testimonials</Link>
            <Link href="/newsletter" className="text-slate-200 hover:text-white font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-800/50">Newsletter</Link>
          </nav>

          {/* CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-full hover:bg-amber-400 transition-colors font-semibold text-sm whitespace-nowrap">
              Book a Strategy Call
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-200 p-2 hover:bg-slate-800/50 rounded-lg transition-colors" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
