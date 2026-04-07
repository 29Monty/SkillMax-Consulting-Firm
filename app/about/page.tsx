import Hero from '../../components/Hero';
import CtaCard from '../../components/CtaCard';

export default function About() {
  return (
    <div>
      <Hero
        title="About SkillMax Consulting"
        subtitle="Premium Development Consulting in East Africa"
        description="Based in Juba, South Sudan, SkillMax Consulting is a trusted partner for donors, NGOs, and governments seeking evidence-based solutions that drive sustainable development impact."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>

            <p className="text-gray-700 mb-6">
              Founded in 2016, SkillMax Consulting emerged from a deep understanding of the unique challenges
              and opportunities in East African development. Our founders, with over 25 years of combined experience
              in international development, monitoring and evaluation, and organizational development, recognized
              the need for a consulting firm that combines rigorous methodology with deep regional expertise.
            </p>

            <p className="text-gray-700 mb-6">
              Based in Juba, South Sudan&apos;s thriving innovation hub, we serve clients across East Africa and beyond,
              from grassroots NGOs to multilateral development banks. Our approach is rooted in evidence-based
              practice, cultural sensitivity, and a commitment to sustainable, locally-owned solutions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To empower development organizations with the insights, systems, and capabilities needed to
              maximize their impact and achieve sustainable change in East Africa and beyond.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-700">We deliver work of the highest quality, using proven methodologies and staying current with best practices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-gray-700">We maintain the highest ethical standards, ensuring independence, confidentiality, and transparency.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                <p className="text-gray-700">We work collaboratively with clients, building long-term relationships based on trust and mutual respect.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="text-gray-700">We focus on results that matter, ensuring our work contributes to sustainable development outcomes.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h3>
            <p className="text-gray-700 mb-6">
              Our diverse team brings expertise from international development, academia, private sector consulting,
              and grassroots implementation. We speak multiple local languages and understand the cultural nuances
              that influence development work across East Africa.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose SkillMax?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li><strong>Regional Expertise:</strong> Deep understanding of East African contexts and development challenges</li>
              <li><strong>Proven Track Record:</strong> Successfully supported over 150 projects across 12 countries</li>
              <li><strong>Multilingual Team:</strong> Local language capabilities and cultural sensitivity</li>
              <li><strong>Data-Driven Approach:</strong> Rigorous methodologies backed by evidence and analytics</li>
              <li><strong>End-to-End Solutions:</strong> From strategy to implementation to evaluation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Partner With Us?"
            description="Let's discuss how SkillMax Consulting can support your development initiatives and help you achieve greater impact."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}
