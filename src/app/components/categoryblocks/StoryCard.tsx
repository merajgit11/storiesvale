import Image from 'next/image';

export default function StoryCard({ story }) {
  return (
    <div className="bg-[#eff5f3] rounded-xl transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <Image
        src="/img/story-image-5.jpg"
        alt={story.title}
        width={500}
        height={280}
        className="rounded-t-md w-full h-[280px] object-cover"
      />
      <div className="py-4 px-3">
        <p className="text-xs text-gray-500 uppercase mb-1">{story.category}</p>
        <h3 className="text-md font-semibold line-clamp-2 min-h-[55px] text-black">
          {story.title}
        </h3>
        <p className="text-sm text-gray-600">By {story.author}</p>
        <div className="text-yellow-600 text-sm mt-1">
          {Array(5)
            .fill('★')
            .map((s, i) => (i < Math.floor(story.rating) ? s : '☆'))}{' '}
          ({story.rating.toFixed(1)})
        </div>
      </div>
    </div>
  );
}
