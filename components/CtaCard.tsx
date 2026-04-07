interface CtaCardProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'primary' | 'secondary';
}

export default function CtaCard({
  title,
  description,
  ctaText,
  ctaLink,
  variant = 'primary'
}: CtaCardProps) {
  const bgClass = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700'
    : 'bg-white border-2 border-blue-600 hover:bg-blue-50';

  const textClass = variant === 'primary'
    ? 'text-white'
    : 'text-blue-600';

  return (
    <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 max-w-md mx-auto">{description}</p>
      <a
        href={ctaLink}
        className={`inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg transition-colors ${bgClass} ${textClass}`}
      >
        {ctaText}
      </a>
    </div>
  );
}