type CategorybannerProps = {
  category: string;
};

export default function Categorybanner({ category }: CategorybannerProps) {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <div className="w-full px-10 py-16 mb-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ul className="flex space-x-2 text-md text-gray-700">
              <li>
                <a href="#" className="font-semibold hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="font-semibold hover:underline">
                  Category
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-600 capitalize">{category}</li>
            </ul>
          </nav>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mt-2 leading-tight text-black"
            style={{ lineHeight: '55px' }}
          >
            Best {category.charAt(0).toUpperCase() + category.slice(1)} Stories
            <br /> to read on StoriesStack
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 mt-6 max-w-4xl">
            Dive into 15-minute nonfiction book summaries crafted for the curious mind.
            Insights in minutes, wisdom for a lifetime. Are you ready to make Headway?
            Get started! Dive into 15-minute nonfiction book summaries crafted for the curious mind.
            Insights in minutes, wisdom for a lifetime. Are you ready to make Headway?
            Get started!
          </p>

          {/* Follow Button */}
          <div className="mt-6">
            <button className="group relative bg-[#2ee081] text-white text-md px-12 py-3 font-semibold rounded overflow-hidden">
              <span className="block">Follow</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
