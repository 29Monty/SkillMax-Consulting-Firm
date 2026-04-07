import { Metadata } from 'next/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  'digital-transformation-east-africa': {
    title: 'Digital Transformation in East African Development',
    excerpt: 'How technology is reshaping development initiatives across East Africa, with insights from our recent projects.',
    content: `
      <p class="text-lg text-gray-700 mb-6">
        The digital revolution is fundamentally changing how development work is conducted across East Africa. From mobile banking solutions in Kenya to e-governance platforms in Rwanda, technology is not just a tool—it's becoming the foundation of sustainable development.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Current Landscape</h2>
      <p class="text-gray-700 mb-4">
        East Africa has seen remarkable growth in digital adoption over the past decade. Mobile penetration now exceeds 80% in most countries, creating unprecedented opportunities for digital development solutions. However, this rapid growth has also created challenges in ensuring equitable access and meaningful impact.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Trends We're Seeing</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Mobile-First Solutions:</strong> Development programs are increasingly designed with mobile technology as the primary delivery mechanism.</li>
        <li><strong>Data-Driven Decision Making:</strong> Real-time data collection and analysis is transforming how projects are monitored and evaluated.</li>
        <li><strong>Public-Private Partnerships:</strong> Collaboration between governments, NGOs, and technology companies is accelerating innovation.</li>
        <li><strong>Digital Inclusion:</strong> Efforts to bridge the digital divide are becoming central to development strategies.</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Approach at SkillMax</h2>
      <p class="text-gray-700 mb-4">
        At SkillMax Consulting, we believe in technology that serves people, not the other way around. Our digital transformation projects focus on:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>User-centered design that prioritizes accessibility and usability</li>
        <li>Sustainable solutions that can be maintained with local resources</li>
        <li>Capacity building to ensure long-term ownership and scalability</li>
        <li>Integration with existing systems and workflows</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
      <p class="text-gray-700 mb-6">
        The future of development in East Africa is digital, but success will depend on our ability to harness technology while addressing the unique challenges of the region. We're excited to be part of this transformation and look forward to continuing our work with partners who share our vision.
      </p>
    `,
    date: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    category: 'Technology',
    readTime: '5 min read',
    image: '/api/placeholder/800/400'
  },
  'sustainable-ngo-partnerships': {
    title: 'Building Sustainable Partnerships with NGOs',
    excerpt: 'Best practices for creating lasting partnerships between development firms and non-governmental organizations.',
    content: `
      <p class="text-lg text-gray-700 mb-6">
        Successful development work in East Africa depends on strong partnerships between consulting firms, NGOs, governments, and local communities. At SkillMax Consulting, we've learned that the most impactful projects emerge from relationships built on trust, shared vision, and mutual respect.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Partnership Imperative</h2>
      <p class="text-gray-700 mb-4">
        NGOs bring invaluable on-the-ground experience, community relationships, and sector expertise. Consulting firms offer technical skills, project management capabilities, and access to resources. When these organizations collaborate effectively, they can achieve far more than working independently.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Principles for Success</h2>
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-3">1. Shared Vision and Goals</h3>
        <p class="text-blue-800">
          Partnerships thrive when all parties have a clear understanding of the desired outcomes and how their contributions support the overall objectives.
        </p>
      </div>

      <div class="bg-green-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold text-green-900 mb-3">2. Transparent Communication</h3>
        <p class="text-green-800">
          Regular, honest communication about progress, challenges, and expectations is essential for maintaining trust and addressing issues promptly.
        </p>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold text-purple-900 mb-3">3. Capacity Building Focus</h3>
        <p class="text-purple-800">
          Effective partnerships invest in building local capacity, ensuring that benefits extend beyond the project timeline.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Partnership Framework</h2>
      <p class="text-gray-700 mb-4">
        At SkillMax, we follow a structured approach to partnership development:
      </p>
      <ol class="list-decimal list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Discovery Phase:</strong> Understanding each organization's strengths, challenges, and objectives</li>
        <li><strong>Alignment Phase:</strong> Developing shared goals and defining roles and responsibilities</li>
        <li><strong>Implementation Phase:</strong> Regular check-ins, joint decision-making, and adaptive management</li>
        <li><strong>Evaluation Phase:</strong> Assessing impact and identifying lessons learned for future collaborations</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Measuring Partnership Success</h2>
      <p class="text-gray-700 mb-6">
        Beyond traditional project metrics, we evaluate partnership success through:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Relationship quality and trust levels</li>
        <li>Knowledge sharing and capacity building outcomes</li>
        <li>Sustainability of project results</li>
        <li>Replication potential for similar initiatives</li>
      </ul>
    `,
    date: '2024-01-10',
    author: 'Michael Chen',
    category: 'Partnerships',
    readTime: '4 min read',
    image: '/api/placeholder/800/400'
  },
  'impact-measurement-beyond-numbers': {
    title: 'Impact Measurement: Beyond the Numbers',
    excerpt: 'A comprehensive approach to measuring and communicating the real impact of development projects.',
    content: `
      <p class="text-lg text-gray-700 mb-6">
        In the world of development, numbers tell only part of the story. While quantitative metrics are essential for accountability and learning, the true impact of development work often lies in the qualitative changes that transform lives and communities.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Limitations of Traditional Metrics</h2>
      <p class="text-gray-700 mb-4">
        Traditional impact measurement often focuses on easily quantifiable outputs: number of people trained, schools built, or vaccines administered. While these metrics are important, they rarely capture the full scope of change that development projects create.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">A Holistic Approach to Impact</h2>
      <p class="text-gray-700 mb-4">
        At SkillMax Consulting, we advocate for a comprehensive impact measurement framework that includes:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Quantitative Metrics</h3>
          <ul class="text-gray-700 space-y-1">
            <li>• Output indicators</li>
            <li>• Coverage statistics</li>
            <li>• Cost-effectiveness ratios</li>
            <li>• Timeline adherence</li>
          </ul>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Qualitative Insights</h3>
          <ul class="text-gray-700 space-y-1">
            <li>• Beneficiary stories</li>
            <li>• Community perspectives</li>
            <li>• Unintended consequences</li>
            <li>• Long-term sustainability</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Impact Measurement Framework</h2>
      <p class="text-gray-700 mb-4">
        We use a multi-dimensional approach that captures impact across different levels:
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Individual Level</h3>
      <p class="text-gray-700 mb-4">
        Changes in knowledge, skills, behaviors, and quality of life for direct beneficiaries.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Community Level</h3>
      <p class="text-gray-700 mb-4">
        Effects on social norms, local institutions, and community resilience.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Systemic Level</h3>
      <p class="text-gray-700 mb-6">
        Broader changes in policies, markets, and institutional capacity.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Communicating Impact Effectively</h2>
      <p class="text-gray-700 mb-4">
        Effective impact communication requires:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Storytelling:</strong> Using narratives to bring data to life and connect with audiences</li>
        <li><strong>Visual Communication:</strong> Charts, infographics, and dashboards that make complex information accessible</li>
        <li><strong>Stakeholder Engagement:</strong> Involving beneficiaries and partners in shaping the impact narrative</li>
        <li><strong>Continuous Learning:</strong> Using impact data to improve future programming</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Future of Impact Measurement</h2>
      <p class="text-gray-700 mb-6">
        As technology advances, we're seeing exciting developments in impact measurement, including real-time data collection, AI-powered analysis, and blockchain-based verification. However, the foundation of effective impact measurement will always be a commitment to understanding the full human story behind the numbers.
      </p>
    `,
    date: '2024-01-05',
    author: 'Dr. Amina Hassan',
    category: 'Impact',
    readTime: '6 min read',
    image: '/api/placeholder/800/400'
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: 'Post Not Found | SkillMax Consulting'
    };
  }

  return {
    title: `${post.title} | SkillMax Consulting Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Development Consultant & Impact Specialist</p>
            </div>
          </div>
        </div>

        {/* Related Posts / Navigation */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}