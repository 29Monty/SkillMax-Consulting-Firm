import Hero from '../../components/Hero';
import CtaCard from '../../components/CtaCard';

const teamMembers = [
  {
    name: 'Lubang Stephen',
    role: 'Founder & CEO',
    bio: 'With over 15 years in international development, Sarah leads SkillMax with a vision for evidence-based solutions that drive sustainable impact across East Africa.',
    image: '/api/placeholder/300/300',
    expertise: ['Project Evaluation', 'Strategic Planning', 'Stakeholder Engagement'],
    linkedin: '#',
    email: 'lubang@skillmaxconsulting.rw'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Operations Officer',
    bio: 'Michael brings extensive experience in organizational development and capacity building, having worked with NGOs and government agencies across 12 African countries.',
    image: '/api/placeholder/300/300',
    expertise: ['Organizational Development', 'Capacity Building', 'Program Management'],
    linkedin: '#',
    email: 'michael@skillmaxconsulting.rw'
  },
  {
    name: 'Amina Hassan',
    role: 'Director of Monitoring & Evaluation',
    bio: 'Amina specializes in third-party monitoring and impact assessment, with a track record of improving program effectiveness for major development donors.',
    image: '/api/placeholder/300/300',
    expertise: ['Third-Party Monitoring', 'Impact Assessment', 'Data Analysis'],
    linkedin: '#',
    email: 'amina@skillmaxconsulting.rw'
  },
  {
    name: 'David Kiprop',
    role: 'Senior Consultant - Grant Writing',
    bio: 'David has secured over $45 million in funding for development projects, with expertise in proposal development for USAID, DFID, and multilateral donors.',
    image: '/api/placeholder/300/300',
    expertise: ['Grant Writing', 'Proposal Development', 'Donor Relations'],
    linkedin: '#',
    email: 'david@skillmaxconsulting.rw'
  },
  {
    name: 'Grace Njoroge',
    role: 'Team Building & Leadership Specialist',
    bio: 'Grace designs and delivers leadership development programs that strengthen organizational culture and improve team performance across the region.',
    image: '/api/placeholder/300/300',
    expertise: ['Leadership Development', 'Team Building', 'Change Management'],
    linkedin: '#',
    email: 'grace@skillmaxconsulting.rw'
  },
  {
    name: 'Robert Omondi',
    role: 'Senior Project Manager',
    bio: 'Robert manages complex multi-country projects, ensuring timely delivery and high-quality outcomes for our clients in the development sector.',
    image: '/api/placeholder/300/300',
    expertise: ['Project Management', 'Risk Assessment', 'Client Relations'],
    linkedin: '#',
    email: 'robert@skillmaxconsulting.rw'
  }
];

export const metadata = {
  title: 'Our Team - SkillMax Consulting',
  description: 'Meet the expert team behind SkillMax Consulting. Our diverse group of development professionals brings decades of experience in evaluation, capacity building, and strategic consulting across East Africa.'
};

export default function Team() {
  return (
    <div>
      <Hero
        title="Meet Our Team"
        subtitle="Expertise That Drives Impact"
        description="Our diverse team of development professionals brings decades of combined experience in evaluation, capacity building, grant writing, and strategic consulting across East Africa."
      />

      {/* Team Stats */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Collective Impact
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Combined expertise spanning decades of development work
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '60+', label: 'Years Combined Experience' },
              { value: '12', label: 'Countries Served' },
              { value: '150+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl font-semibold text-amber-400 mb-2">{item.value}</div>
                <div className="text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep expertise in development consulting with a passion for creating lasting impact across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                    <svg className="w-24 h-24 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Excellence',
                description: 'We deliver exceptional quality in everything we do, from research to implementation.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Integrity',
                description: 'We maintain the highest ethical standards and build trust through transparency.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Collaboration',
                description: 'We believe in partnership and working together to achieve greater impact.'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Learning',
                description: 'We are committed to continuous learning and adapting our approaches based on evidence.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CtaCard
            title="Join Our Team"
            description="We're always looking for talented development professionals who share our passion for creating impact. Explore career opportunities with SkillMax Consulting."
            ctaText="View Open Positions"
            ctaLink="/careers"
          />
        </div>
      </section>
    </div>
  );
}