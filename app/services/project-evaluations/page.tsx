import Hero from '../../../components/Hero';
import CtaCard from '../../../components/CtaCard';

export default function ProjectEvaluations() {
  return (
    <div>
      <Hero
        title="Project Evaluations"
        subtitle="Measuring Impact, Driving Improvement"
        description="Comprehensive project evaluations that provide evidence-based insights to optimize development outcomes and demonstrate value to donors and stakeholders."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>

            <p className="text-gray-700 mb-6">
              Our project evaluation services provide rigorous, evidence-based assessments of development
              initiatives. We help organizations understand what works, what doesn&apos;t, and how to improve
              future programming. Our evaluations go beyond simple compliance reporting to provide actionable
              insights that drive better outcomes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mixed-Method Evaluation</h4>
                <p className="text-gray-700">Combining quantitative data analysis with qualitative insights for comprehensive understanding.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Theory of Change</h4>
                <p className="text-gray-700">Evaluating whether projects achieve their intended outcomes and impact.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost-Effectiveness Analysis</h4>
                <p className="text-gray-700">Assessing value for money and efficiency of resource utilization.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Stakeholder Engagement</h4>
                <p className="text-gray-700">Incorporating perspectives from beneficiaries, partners, and communities.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Expect</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Typical Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Comprehensive evaluation report with findings and recommendations</li>
                <li>Executive summary for stakeholders and donors</li>
                <li>Data collection tools and methodologies documentation</li>
                <li>Capacity building workshops for staff</li>
                <li>Monitoring and evaluation framework for future projects</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Value for Donors & Partners</h3>
            <p className="text-gray-700 mb-6">
              Donors rely on our evaluations to make informed decisions about funding allocations and program
              strategies. Our work helps demonstrate accountability, improve program effectiveness, and maximize
              development impact. We ensure evaluations meet international standards and donor requirements.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Agricultural Development Program</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> A $5M agricultural development program needed to demonstrate impact
                to continue funding.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Approach:</strong> Conducted mixed-method evaluation combining household surveys,
                focus groups, and agricultural data analysis.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> Identified key success factors and areas for improvement, leading to
                program expansion and additional $3M in funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Evaluate Your Project?"
            description="Let's discuss your evaluation needs and how we can help you measure and improve your development impact."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}