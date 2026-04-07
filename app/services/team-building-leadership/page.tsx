import Hero from '../../../components/Hero';
import CtaCard from '../../../components/CtaCard';

export default function TeamBuildingLeadership() {
  return (
    <div>
      <Hero
        title="Team Building & Leadership Development"
        subtitle="Empowering Teams for Greater Impact"
        description="Comprehensive leadership and team development programs designed to enhance collaboration, performance, and organizational culture in development organizations."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Building High-Performing Development Teams</h2>

            <p className="text-gray-700 mb-6">
              Effective development work requires strong, cohesive teams led by capable leaders. Our team
              building and leadership development programs help organizations cultivate the skills, relationships,
              and culture needed to deliver exceptional results in complex development environments.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership & Team Services</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Executive Leadership</h4>
                <p className="text-gray-700">Strategic leadership development for senior leaders and executives in development organizations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Team Building</h4>
                <p className="text-gray-700">Interactive workshops that build trust, communication, and collaboration within teams.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Change Management</h4>
                <p className="text-gray-700">Leading organizational change and transformation in development contexts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Emotional Intelligence</h4>
                <p className="text-gray-700">Developing self-awareness, empathy, and relationship skills for effective leadership.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Expect</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Typical Deliverables</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Customized leadership development programs</li>
                <li>Interactive team building workshops</li>
                <li>360-degree leadership assessments</li>
                <li>Coaching and mentoring support</li>
                <li>Organizational culture assessments</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Value for Donors & Partners</h3>
            <p className="text-gray-700 mb-6">
              Strong leadership and cohesive teams are essential for successful development programs.
              Our programs help organizations build the human capital needed to implement complex
              initiatives, adapt to changing contexts, and achieve sustainable development outcomes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: NGO Leadership Transformation</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> International NGO experiencing high turnover and communication
                breakdowns affecting program delivery across East Africa.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Approach:</strong> 18-month leadership development program including team building
                workshops, executive coaching, and organizational culture assessment.
              </p>
              <p className="text-gray-700">
                <strong>Results:</strong> 40% reduction in staff turnover, improved cross-regional collaboration,
                and 25% increase in program effectiveness ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Ready to Build Stronger Teams?"
            description="Let's discuss your leadership and team development needs and create a program that drives organizational excellence."
            ctaText="Book a Strategy Call"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}