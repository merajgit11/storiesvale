export default function FilterPanel({ filters, selected, onSelect }) {
  return (
    <nav aria-label="Story filters" className="space-y-2">
      {filters.map((f) => (
        <button
          key={f.key}
          className={`block px-4 py-2 rounded-lg font-medium w-full text-left ${
            selected === f.key
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onSelect(f.key)}
        >
          {f.label}
        </button>
      ))}
    </nav>
  );
}
