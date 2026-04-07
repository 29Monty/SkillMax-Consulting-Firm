import Hero from '../../components/Hero';
import ServicesGrid from '../../components/ServicesGrid';
import CtaCard from '../../components/CtaCard';

export default function Services() {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Development Consulting Solutions"
        description="From project evaluations to organizational capacity development, we provide the expertise and support needed to ensure your development initiatives achieve maximum impact."
      />

      <ServicesGrid />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A proven methodology that ensures quality, collaboration, and results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Assessment</h3>
              <p className="text-gray-600">We begin with a thorough understanding of your needs, context, and objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Design</h3>
              <p className="text-gray-600">We develop tailored solutions based on evidence, best practices, and local context.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation & Support</h3>
              <p className="text-gray-600">We provide hands-on support and ensure sustainable adoption of our recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Need Help Choosing the Right Service?"
            description="Not sure which service fits your needs? Book a complimentary strategy call and we'll help you identify the best approach for your project."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}
