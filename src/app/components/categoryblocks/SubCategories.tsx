// components/categoryblocks/AdventureSubCategories.tsx

export default function SubCategories() {
  const subCategories = [
    'Survival',
    'Exploration',
    'Time Travel',
    'Jungle Adventures',
    'Lost Civilizations',
    'Treasure Hunts',
    'Mythical Quests',
  ];

  return (
    <div className="mb-8">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Adventure Sub-Categories
  </h3>

  <div className="flex flex-wrap gap-3">
    {subCategories.map((item, idx) => (
      <a
        key={idx}
        href={`/category/adventure/${item.toLowerCase().replace(/\s+/g, '-')}`}
        className="px-4 py-2 rounded-md bg-white hover:bg-blue-50 border border-gray-200 text-sm text-gray-800 font-medium transition duration-150"
      >
        {item}
      </a>
    ))}
  </div>
</div>

  );
}
