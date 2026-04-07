import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';
import CtaCard from '../../components/CtaCard';

export default function TestimonialsPage() {
  return (
    <div>
      <Hero
        title="What Our Partners Say"
        subtitle="Trusted by Leading Development Organizations"
        description="Hear from the donors, NGOs, and government partners who rely on SkillMax Consulting to deliver results that matter."
      />

      <Testimonials />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Recognition & Partnerships
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re proud to partner with leading organizations in development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">World Bank</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">UNICEF</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">USAID</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">DFID</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">African Development Bank</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">EU Development</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">Bill & Melinda Gates Foundation</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">Ford Foundation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Join Our Success Stories"
            description="Ready to experience the SkillMax difference? Let's discuss how we can support your development initiatives."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}