import Image from 'next/image';

export default function StoryDetailCard({ story }) {
  return (
    <article className="flex flex-col md:flex-row bg-[#eff5f3] rounded-xl overflow-hidden shadow hover:shadow-md transition">

      <Image
        src='/img/story-image-5.jpg'
        alt={story.title}
        width={200}
        height={260}
        className="object-cover w-full md:w-48 h-48 md:h-auto"
      />
      <div className="p-4 flex-1">
        <p className="text-xs text-gray-500 uppercase pb-2">{story.category}</p>
        <h3 className="text-xl font-bold mt-1 text-black  pb-2">{story.title}</h3>
        <p className="text-sm text-gray-600 mb-2">By {story.author}</p>
        <p className="text-gray-700 mb-6">{story.description}</p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Read Now
        </button>
      </div>
    </article>
  );
}
