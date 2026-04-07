import Hero from '../../../components/Hero';
import CtaCard from '../../../components/CtaCard';

export default function OrganizationalCapacityDevelopment() {
  return (
    <div>
      <Hero
        title="Organizational Capacity Development"
        subtitle="Building Stronger Organizations for Greater Impact"
        description="Strategic organizational development programs that strengthen governance, systems, and human resources to enhance development outcomes."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strengthening Organizations for Sustainable Development</h2>

            <p className="text-gray-700 mb-6">
              Effective development work requires strong organizations. Our capacity development services
              help NGOs, government agencies, and civil society organizations build the systems, skills,
              and structures needed to deliver high-quality programs and achieve lasting impact.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Capacity Development Services</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Governance & Leadership</h4>
                <p className="text-gray-700">Strengthening board effectiveness, strategic planning, and executive leadership.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Financial Management</h4>
                <p className="text-gray-700">Improving budgeting, accounting, financial reporting, and compliance systems.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Program Management</h4>
                <p className="text-gray-700">Enhancing project planning, monitoring, evaluation, and reporting capabilities.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Human Resources</h4>
                <p className="text-gray-700">Developing HR systems, staff development, and organizational culture.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Expect</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Typical Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Organizational capacity assessment and development plan</li>
                <li>Customized training programs and workshops</li>
                <li>Policy and procedure development</li>
                <li>Systems and tools implementation</li>
                <li>Monitoring and coaching support</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Value for Donors & Partners</h3>
            <p className="text-gray-700 mb-6">
              Donors increasingly recognize that strong local organizations are essential for sustainable
              development. Our capacity development work helps build local ownership and ensures that
              development initiatives continue beyond donor funding periods.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Local NGO Strengthening</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> Local environmental NGO struggled with financial management
                and program reporting, limiting their ability to attract donor funding.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Approach:</strong> Comprehensive capacity assessment followed by 12-month
                development program including financial systems, M&E training, and strategic planning.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> Improved financial controls, secured $2.5M in new funding,
                and expanded program reach by 300%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Strengthen Your Organization?"
            description="Let's assess your organizational capacity and develop a plan to build stronger systems and greater impact."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}