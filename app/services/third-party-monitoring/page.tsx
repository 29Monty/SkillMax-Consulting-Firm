import Hero from '../../../components/Hero';
import CtaCard from '../../../components/CtaCard';

export default function ThirdPartyMonitoring() {
  return (
    <div>
      <Hero
        title="Third-Party Monitoring"
        subtitle="Independent Verification & Quality Assurance"
        description="Professional third-party monitoring services that ensure project compliance, quality, and alignment with donor standards and beneficiary needs."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Independent Oversight for Development Projects</h2>

            <p className="text-gray-700 mb-6">
              Third-party monitoring provides independent verification that development projects are implemented
              according to plans, budgets, and quality standards. Our services help donors and implementing
              partners ensure accountability, identify issues early, and maintain confidence in project outcomes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Monitoring Services</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance Monitoring</h4>
                <p className="text-gray-700">Verifying adherence to donor requirements, local regulations, and project agreements.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Monitoring</h4>
                <p className="text-gray-700">Tracking progress against indicators and milestones with regular reporting.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-700">Ensuring outputs meet quality standards and beneficiary needs are addressed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Management</h4>
                <p className="text-gray-700">Identifying potential issues and recommending corrective actions.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Expect</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Typical Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Monthly or quarterly monitoring reports</li>
                <li>Site visit documentation and findings</li>
                <li>Risk assessment and mitigation recommendations</li>
                <li>Performance dashboard and data visualization</li>
                <li>Final monitoring summary report</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Value for Donors & Partners</h3>
            <p className="text-gray-700 mb-6">
              Donors require independent monitoring to ensure their investments achieve intended results.
              Our third-party monitoring provides the assurance needed to maintain funding relationships
              and demonstrate accountability to stakeholders. We maintain strict independence and
              confidentiality in all our monitoring work.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Health Systems Strengthening</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> Multi-year health systems project needed independent monitoring
                to ensure quality service delivery across 15 districts.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Approach:</strong> Established comprehensive monitoring framework with quarterly
                site visits, data quality assessments, and real-time reporting.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> Identified and resolved implementation issues early, resulting in
                95% target achievement and continued funding for program expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Need Independent Monitoring?"
            description="Let's discuss your monitoring needs and how third-party oversight can strengthen your project implementation."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}