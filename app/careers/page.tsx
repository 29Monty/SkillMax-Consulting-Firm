import Hero from '../../components/Hero';
import CtaCard from '../../components/CtaCard';

const openPositions = [
  {
    title: 'Senior Monitoring & Evaluation Specialist',
    type: 'Full-time',
    location: 'Juba, South Sudan',
    description: 'Lead impact assessments and third-party monitoring for major development projects across East Africa.',
    requirements: ['5+ years M&E experience', 'Advanced degree in relevant field', 'Experience with USAID/DFID projects']
  },
  {
    title: 'Grant Writing Consultant',
    type: 'Full-time',
    location: 'Remote',
    description: 'Develop compelling proposals and secure funding for development initiatives.',
    requirements: ['3+ years grant writing experience', 'Track record of successful funding', 'Knowledge of donor requirements']
  },
  {
    title: 'Organizational Development Specialist',
    type: 'Full-time',
    location: 'Nairobi, Kenya',
    description: 'Design and implement capacity building programs for NGOs and government agencies.',
    requirements: ['4+ years OD experience', 'Change management expertise', 'Regional experience preferred']
  }
];

export const metadata = {
  title: 'Careers - Join SkillMax Consulting',
  description: 'Explore career opportunities at SkillMax Consulting. Join our team of development professionals making a difference across East Africa.'
};

export default function Careers() {
  return (
    <div>
      <Hero
        title="Join Our Team"
        subtitle="Shape the Future of Development"
        description="Be part of a team that's creating lasting impact across East Africa. We're looking for passionate development professionals who share our commitment to excellence and innovation."
      />

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join SkillMax?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with a team that values innovation, collaboration, and making a real difference in communities across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Impact-Driven Work',
                description: 'Every project you work on directly contributes to sustainable development and positive change.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Continuous Learning',
                description: 'Access to training, conferences, and opportunities to develop your skills and expertise.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Collaborative Culture',
                description: 'Work with a diverse team of experts who value collaboration, innovation, and mutual respect.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and contribute to development projects that create lasting impact.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {position.type}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills? We're always interested in hearing from talented development professionals.
            </p>
            <button className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Questions About Joining?"
            description="Have questions about our team or open positions? We'd love to hear from you and discuss how you can contribute to our mission."
            ctaText="Contact Our Team"
            ctaLink="/contact"
          />
        </div>
      </section>
    </div>
  );
}