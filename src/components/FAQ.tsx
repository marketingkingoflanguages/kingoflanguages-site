interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="flex flex-col gap-2 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
          <summary className="px-6 py-4 font-[family-name:var(--font-heading)] font-medium cursor-pointer list-none flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
            {item.question}
            <span className="text-2xl text-gray-400 shrink-0 group-open:hidden">+</span>
            <span className="text-2xl text-gray-400 shrink-0 hidden group-open:inline">−</span>
          </summary>
          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
            <p className="max-w-none">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
