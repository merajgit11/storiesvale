"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, List, Filter } from "lucide-react";
import Header from "../components/Header";
import App from "../components/Footer";

export default function CategoryPage() {
  const [view, setView] = useState<"card" | "detail">("card");

    const stories = Array.from({ length: 250 }, (_, i) => ({
    id: i + 1,
    title: `Sample Story ${i + 1}`,
    author: `Author ${i + 1}`,
    description: "This is a short description for the story. It’s just a placeholder.",
    image: "/img/story-image-5.jpg", // replace with your static image
  }));


  return (
    <>
      <Header />
    
      {/* Banner Section */}
      <section className="bg-gray-100">
  <div className="container mx-auto">
    <div className="relative w-full px-10 py-16 mb-8 h-[480px] flex">
      {/* Left Content */}
      <div className="w-1/2">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ul className="flex space-x-2 text-md text-gray-700">
            <li>
              <a href="/" className="font-semibold hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/top-250-stories" className="font-semibold hover:underline">
                Category
              </a>
            </li>
          </ul>
        </nav>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mt-2 leading-tight text-black"
          style={{ lineHeight: "60px" }}
        >
          Top 250 Stories <br /> to Read on StorieVale
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 mt-6 max-w-xl">
          Explore a collection of stories carefully crafted for readers who love
          suspense, thrill, and unforgettable twists. Perfect for a quick read or
          a deep dive into exciting adventures.
        </p>

        {/* Static Progress Bar */}
        <div className="mt-8 mb-4 max-w-md">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">10 / 250 read</span>
            <span className="text-gray-600">0%</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2">
        <img
          src="/img/life-changing-ideas.webp"
          alt="Life Changing Ideas"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



      {/* Stories Grid */}
      <section className="pb-10 bg-white" id="stories-grid">
        {/* Toggle */}
        <div className="flex items-center justify-between px-6 md:px-10 mb-6">
  {/* Filter Button (Left Side) */}
  <button className="flex items-center gap-2 px-3 py-2 bg-[#eff5f3] text-gray-700 rounded-lg hover:bg-[#e4efec] transition">
    <Filter className="w-5 h-5" />
    <span className="hidden md:inline">Filter</span>
  </button>

  {/* View Toggle (Right Side) */}
  <div className="inline-flex items-center rounded-lg border border-gray-200 overflow-hidden">
    <button
      aria-pressed={view === "card"}
      onClick={() => setView("card")}
      className={`px-3 py-2 transition ${
        view === "card"
          ? "bg-[#eff5f3] text-black"
          : "bg-white hover:bg-gray-50 text-gray-600"
      }`}
    >
      <Grid className="w-5 h-5" />
    </button>
    <button
      aria-pressed={view === "detail"}
      onClick={() => setView("detail")}
      className={`px-3 py-2 transition border-l border-gray-200 ${
        view === "detail"
          ? "bg-[#eff5f3] text-black"
          : "bg-white hover:bg-gray-50 text-gray-600"
      }`}
    >
      <List className="w-5 h-5" />
    </button>
  </div>
</div>


        {/* Grid Content */}
        {view === "card" ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 md:px-10">
            {stories.map((s, i) => (
              <Link key={i} href={`/story/${i}`}>
                <article className="bg-[#eff5f3] rounded-xl overflow-hidden transition hover:shadow-lg hover:scale-[1.01] cursor-pointer">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={360}
                    className="w-full h-[360px] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-[11px] tracking-wide text-gray-500 uppercase mb-1">
                      Horror
                    </p>
                    <h3 className="text-[17px] font-semibold text-black line-clamp-2 min-h-[46px]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-600">By {s.author}</p>
                    <div className="flex items-center gap-1 text-sm text-yellow-600 mt-2">
                      <StarIcon className="w-4 h-4" />
                      <span>5</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
            {stories.map((s, i) => (
              <Link key={i} href={`/story/${i}`}>
                <article className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow transition cursor-pointer">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <Image
                        src={s.image}
                        alt={s.title}
                        width={180}
                        height={140}
                        className="w-[180px] rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[20px] font-bold text-black leading-snug mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 mb-3">
                        {s.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <AuthorAvatar name={s.author} />
                        <span className="truncate">{s.author}</span>
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-yellow-600" />
                          <span>5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <App />
    </>
  );
}

/* Helpers */
function AuthorAvatar({ name }: { name: string }) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const a = (parts[0]?.[0] ?? "").toUpperCase();
    const b = (parts[1]?.[0] ?? "").toUpperCase();
    return (a + b) || "A";
  }, [name]);

  return (
    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
      {initials}
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
