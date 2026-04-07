const testimonials = [
  {
    name: 'Lubang Stephen',
    position: 'Program Director',
    organization: 'East Africa Development Fund',
    content: 'SkillMax Consulting transformed our monitoring and evaluation approach. Their third-party monitoring services provided the rigorous oversight we needed to ensure our programs reached their intended beneficiaries effectively.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    position: 'Country Director',
    organization: 'Global Health Initiative',
    content: 'The organizational capacity development program delivered by SkillMax was instrumental in strengthening our local partner organizations. We saw measurable improvements in governance, financial management, and program delivery.',
    rating: 5
  },
  {
    name: 'Amina Hassan',
    position: 'Grants Manager',
    organization: 'African Development Bank',
    content: 'Their proposal writing expertise helped us secure $2.3 million in additional funding. The quality of their work and their understanding of donor requirements is exceptional.',
    rating: 5
  }
];

export default function Testimonials() {
  const testimonial = testimonials[0]; // Show first testimonial for now

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Partners Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by leading development organizations across East Africa
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.position}</div>
              <div className="text-sm text-blue-600">{testimonial.organization}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
