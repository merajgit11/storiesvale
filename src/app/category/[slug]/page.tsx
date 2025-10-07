import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryBanner from "@/app/components/categoryblocks/Categorybanner";
import OtherCategories from "../../components/categoryblocks/OtherCategories";
import CategoryAboutSection from "@/app/components/categoryblocks/CategoryAboutSection";
import FaqSection from "@/app/components/categoryblocks/FaqSection";
import StoriesGrid from "@/app/components/storiesblock/StoriesGrid";


const stories = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.2,
    image: '/img/story-image-new.jpeg',
    description: 'A practical guide on building better habits and breaking bad ones.'
  },
  {
    title: 'Ikigai',
    author: 'Héctor García',
    category: 'Self Help',
    rating: 4.3,
     image: '/img/story-image-new.jpeg',
    description: 'Discover the Japanese secret to a long and meaningful life.'
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Self Help',
    rating: 4.4,
     image: '/img/story-image-new.jpeg',
    description: 'A book about mastering focus in a distracted world.'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Self Help',
    rating: 4.5,
     image: '/img/story-image-new.jpeg',
    description: 'Lessons on financial education and wealth building.'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Self Help',
    rating: 4.6,
     image: '/img/story-image-new.jpeg',
    description: 'A journey of following one’s dreams and destiny.'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.2,
    image: '/img/story-image-new.jpeg',
    description: 'A practical guide on building better habits and breaking bad ones.'
  },
  {
    title: 'Ikigai',
    author: 'Héctor García',
    category: 'Self Help',
    rating: 4.3,
     image: '/img/story-image-new.jpeg',
    description: 'Discover the Japanese secret to a long and meaningful life.'
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Self Help',
    rating: 4.4,
     image: '/img/story-image-new.jpeg',
    description: 'A book about mastering focus in a distracted world.'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Self Help',
    rating: 4.5,
     image: '/img/story-image-new.jpeg',
    description: 'Lessons on financial education and wealth building.'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Self Help',
    rating: 4.6,
     image: '/img/story-image-new.jpeg',
    description: 'A journey of following one’s dreams and destiny.'
  },
];


export default function CategoryPage(props: any) {
  const slug = props?.params?.slug || "";

  const filterRaw = props?.searchParams?.filter;
  const filter =
    typeof filterRaw === "string"
      ? filterRaw
      : Array.isArray(filterRaw)
      ? filterRaw[0]
      : "all";

  return (
    <div>
      <Header />
      <main>
        <CategoryBanner category={slug} />

        <div className="grid grid-cols-12 gap-6 px-6 py-10">
  {/* Left sidebar (smaller) */}
  <aside className="col-span-2">
    <OtherCategories />
  </aside>

  {/* Main content (wider) */}
  <section className="col-span-10 space-y-10 border-l border-gray-200">
    <StoriesGrid stories={stories} />
  </section>
</div>


        <div className="">
             <CategoryAboutSection />
            <FaqSection />
          </div>
      </main>
      <Footer />
    </div>
  );
}
