import Hero from '../../../components/Hero';
import CtaCard from '../../../components/CtaCard';

export default function ProposalGrantWriting() {
  return (
    <div>
      <Hero
        title="Proposal & Grant Writing"
        subtitle="Securing Funding for Development Impact"
        description="Expert proposal development and grant writing services that help organizations secure the funding needed to advance their development missions."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Winning Proposals That Drive Change</h2>

            <p className="text-gray-700 mb-6">
              Securing development funding requires more than good ideas—it requires compelling proposals
              that demonstrate value, feasibility, and impact. Our proposal writing services help organizations
              articulate their vision, develop winning strategies, and secure the resources needed for
              meaningful development work.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Proposal Services</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Concept Note Development</h4>
                <p className="text-gray-700">Compelling initial proposals that capture donor interest and secure funding for full proposals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Full Proposal Writing</h4>
                <p className="text-gray-700">Comprehensive proposals that meet donor requirements and demonstrate program quality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Grant Application Support</h4>
                <p className="text-gray-700">End-to-end support for complex grant applications including budgets and work plans.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Proposal Review & Editing</h4>
                <p className="text-gray-700">Expert review and strengthening of existing proposals to improve competitiveness.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Expect</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Typical Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Compelling concept notes and full proposals</li>
                <li>Detailed implementation plans and budgets</li>
                <li>Logical frameworks and results frameworks</li>
                <li>Risk assessments and mitigation strategies</li>
                <li>Supporting documents and annexes</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Value for Donors & Partners</h3>
            <p className="text-gray-700 mb-6">
              Donors seek proposals that demonstrate clear value, strong implementation capacity, and
              measurable impact. Our expertise in development funding landscapes and proposal writing
              helps organizations present their best case and compete effectively for limited resources.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Education Program Funding</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> Regional education NGO needed to secure $3M for multi-country
                literacy program but lacked proposal writing capacity.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Approach:</strong> Developed comprehensive proposal with detailed theory of change,
                budget, and monitoring framework tailored to funder requirements.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> Successfully secured full funding, leading to program implementation
                across 5 countries and improved literacy outcomes for 50,000+ children.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Need Funding for Your Project?"
            description="Let's discuss your funding needs and how we can help you develop compelling proposals that win grants."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}