import Hero from '../../components/Hero';
import CaseStudyCard from '../../components/CaseStudyCard';
import CtaCard from '../../components/CtaCard';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Multi-Country Health Systems Strengthening',
      client: 'East Africa Health Initiative',
      description: 'Comprehensive evaluation of a $15M health systems strengthening program across 5 countries, focusing on maternal and child health outcomes.',
      results: [
        'Improved health facility utilization by 35%',
        'Reduced maternal mortality by 22% in target areas',
        'Strengthened health management systems in 200+ facilities',
        'Generated $8M in additional funding based on evaluation findings'
      ],
      href: '#'
    },
    {
      title: 'Agricultural Value Chain Development',
      client: 'Sustainable Agriculture Network',
      description: 'Third-party monitoring and evaluation of agricultural development program supporting 50,000 smallholder farmers across East Africa.',
      results: [
        'Increased farmer incomes by average of 40%',
        'Established 15 farmer cooperatives with 2,500+ members',
        'Improved market linkages resulting in 25% higher crop prices',
        'Developed sustainable farming practices adopted by 80% of participants'
      ],
      href: '#'
    },
    {
      title: 'Education Quality Improvement Program',
      client: 'Regional Education Partnership',
      description: 'Organizational capacity development and monitoring support for education quality improvement initiative in 8 countries.',
      results: [
        'Trained 5,000+ teachers in modern pedagogy',
        'Improved student learning outcomes by 28%',
        'Strengthened education management systems',
        'Secured $12M in follow-on funding for program expansion'
      ],
      href: '#'
    },
    {
      title: 'Climate Resilience & Adaptation',
      client: 'African Climate Action Network',
      description: 'Proposal development and third-party monitoring for climate change adaptation program protecting vulnerable communities.',
      results: [
        'Developed winning $6M proposal for climate adaptation funding',
        'Implemented early warning systems in 50 communities',
        'Reduced climate-related losses by 30%',
        'Built local capacity for climate risk management'
      ],
      href: '#'
    }
  ];

  return (
    <div>
      <Hero
        title="Case Studies & Impact Reports"
        subtitle="Real Results, Measurable Impact"
        description="Explore our work across East Africa and see how we've helped organizations achieve their development goals through evidence-based consulting."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Impact in Action
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These case studies demonstrate our commitment to delivering measurable results
              that create lasting change in communities across East Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                client={study.client}
                description={study.description}
                results={study.results}
                href={study.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Create Your Success Story?"
            description="Let's discuss your project and how SkillMax Consulting can help you achieve similar results."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}