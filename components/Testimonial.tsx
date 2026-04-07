export default function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded-lg bg-white p-6 shadow">
      <blockquote className="text-gray-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-gray-500">— {author}</figcaption>
    </figure>
  );
}
