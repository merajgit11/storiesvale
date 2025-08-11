// components/categoryblocks/AdventureAboutSection.tsx

import Link from 'next/link';

export default function CategoryAboutSection() {
  return (
    <section className="bg-white py-16 pb-6 px-4 md:px-10">
      <div className="max-w-full mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Discover Thrilling Adventures on StoriesVale
        </h2>

        <p className="text-base text-gray-700 mb-4">
          At <Link href="/" className="text-blue-600 hover:underline">StoriesVale</Link>, our <strong>Adventure category</strong> is your gateway to breathtaking quests, daring heroes, and unforgettable journeys. Whether it’s surviving the wild, uncovering ancient secrets, or exploring uncharted lands, our collection of <Link href="/category/adventure" className="text-blue-600 hover:underline">adventure stories</Link> will ignite your imagination and keep you turning the page.
        </p>

        <p className="text-base text-gray-700 mb-4">
          From timeless tales of <Link href="/category/adventure/survival" className="text-blue-600 hover:underline">survival</Link> to epic <Link href="/category/adventure/treasure-hunts" className="text-blue-600 hover:underline">treasure hunts</Link> and mythical quests, StoriesVale offers something for every thrill-seeker. Our platform connects readers with writers who craft high-quality, original stories filled with suspense, emotion, and heart-pounding moments.
        </p>

        <p className="text-base text-gray-700 mb-4">
          New to adventure fiction? Start with our <Link href="/editors-pick" className="text-blue-600 hover:underline">Editor’s Picks</Link> or explore <Link href="/category/trending" className="text-blue-600 hover:underline">Trending Stories</Link> to find reader favorites. Writers can publish their own adventure tales and reach thousands of engaged readers daily.
        </p>

        <p className="text-base text-gray-700">
          Dive into StoriesVale’s adventure world and discover why we’re becoming the go-to platform for <strong>modern digital storytelling</strong>. <Link href="/signup" className="text-blue-600 hover:underline">Join now</Link> and bring your own stories to life or explore worlds crafted by talented voices around the globe.
        </p>
      </div>
    </section>
  );
}
