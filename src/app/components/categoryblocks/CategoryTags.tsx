// components/categoryblocks/AdventureTags.tsx

export default function CategoryTags() {
  const tags = [
    'Action',
    'Danger',
    'Heroic',
    'Map',
    'Quest',
    'Discovery',
    'Lost World',
    'Wilderness',
    'Island',
    'Escape',
  ];

  return (
    <aside className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Adventure Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full hover:bg-gray-300 transition"
          >
            #{tag}
          </span>
        ))}
      </div>
    </aside>
  );
}
