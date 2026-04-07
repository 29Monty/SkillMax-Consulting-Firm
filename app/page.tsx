import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import CtaCard from '../components/CtaCard';
import Testimonials from '../components/Testimonials';

export const metadata = {
  title: 'SkillMax Consulting - Premium Development & Organizational Consulting in East Africa',
  description: 'Impact-driven consulting firm specializing in project evaluations, third-party monitoring, organizational capacity development, proposal writing, and leadership development for donors, NGOs, and governments across East Africa.'
};

export default function Home() {
  return (
    <div>
      <Hero
        title="Premium Development Consulting"
        subtitle="Driving Impact Across East Africa"
        description="SkillMax Consulting partners with donors, NGOs, and governments to deliver evidence-based solutions that create lasting change. From project evaluations to organizational capacity development, we ensure your initiatives achieve maximum impact."
        ctaText="Book a Strategy Call"
        ctaLink="/contact"
      />

      <ServicesGrid />

      {/* Impact Dashboard Section */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Measurable results across projects and partnerships
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '150+', label: 'Projects Evaluated' },
              { value: '12', label: 'Countries Served' },
              { value: '$45M+', label: 'Grants Secured' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl font-semibold text-amber-400 mb-2">{item.value}</div>
                <div className="text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-slate-950/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Drive Impact?"
            description="Schedule a complimentary 45-minute strategy call to discuss how we can support your development initiatives."
            ctaText="Book Your Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}
