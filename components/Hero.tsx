interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'service' | 'about';
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Book a Strategy Call",
  ctaLink = "/contact",
  variant = 'default'
}: HeroProps) {
  const baseClasses = "relative overflow-hidden py-24 lg:py-32 text-center text-white";
  const backgroundClasses =
    variant === 'service'
      ? "bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),_transparent_26%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.88))]"
      : variant === 'about'
      ? "bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.14),_transparent_26%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(30,41,59,0.9))]"
      : "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.88))]";

  return (
    <section className={`${baseClasses} ${backgroundClasses} animate-fade-in`}>
      <div className="absolute inset-0 bg-slate-950/70"></div>
      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl animate-float" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl animate-float" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-10 py-4 bg-amber-500 text-slate-950 font-semibold rounded-full shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-all duration-200"
            >
              {ctaText}
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border border-slate-200/20 text-slate-100 font-semibold rounded-full bg-slate-900/70 hover:bg-slate-800 transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}