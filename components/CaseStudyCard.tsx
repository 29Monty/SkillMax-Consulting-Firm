interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  results: string[];
  href: string;
  image?: string;
}

export default function CaseStudyCard({
  title,
  client,
  description,
  results,
  href,
  image
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Case Study Image</span>
        </div>
      )}
      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{client}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={href}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
        >
          Read Full Case Study
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}