'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Grid, List } from "lucide-react"

type Story = {
  title: string;
  author: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  likes?: number;
  comments?: number;
  slug?: string; // 👈 used for link
};

type StoriesGridProps = {
  stories: Story[];
  title?: string;
};

export default function StoriesGrid({ stories, title = '' }: StoriesGridProps) {
  const [view, setView] = useState<'card' | 'detail'>('card'); // default: card

  return (
    <section className="pb-10 bg-white" id="stories-grid">
      {/* Header + Toggle */}
      <div className="flex items-center justify-end px-6 md:px-10 mb-6">
        <div className="inline-flex items-center rounded-lg border border-gray-200 overflow-hidden">
          {/* Card View Button */}
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

          {/* Detail View Button */}
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

      {/* CONTENT */}
      {view === 'card' ? (
        /* Card View */
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-10">
          {stories.map((s, i) => (
            <Link key={`${s.title}-${i}`} href={`/story/${s.slug ?? i}`}>
              <article className="bg-[#eff5f3] rounded-xl overflow-hidden transition hover:shadow-lg hover:scale-[1.01] cursor-pointer">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={600}
                  height={360}
                  className="w-full h-[360px] object-cover"
                />
                <div className="p-4">
                  <p className="text-[11px] tracking-wide text-gray-500 uppercase mb-1">{s.category}</p>
                  <h3 className="text-[17px] font-semibold text-black line-clamp-2 min-h-[46px]">{s.title}</h3>
                  <p className="text-sm text-gray-600">By {s.author}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-600 mt-2">
                    <StarIcon className="w-4 h-4" />
                    <span>{s.rating.toFixed(1)}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        /* Detail View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
          {stories.map((s, i) => (
            <Link key={`${s.title}-${i}`} href={`/story/${s.slug ?? i}`}>
              <article className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow transition cursor-pointer">
                <div className="flex gap-4">
                  {/* Left Thumb */}
                  <div className="shrink-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={180}
                      height={140}
                      className="w-[180px] rounded-xl object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[20px] font-bold text-black leading-snug mb-1">
                      {s.title}
                    </h3>

                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 mb-3">
                      {s.description}
                    </p>

                    {/* Meta Row */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <AuthorAvatar name={s.author} />
                      <span className="truncate">{s.author}</span>

                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-600" />
                        <span>{s.rating.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <CommentIcon className="w-4 h-4" />
                        <span>{s.comments ?? 0}</span>
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
  );
}

/* --- helpers/components --- */

function AuthorAvatar({ name }: { name: string }) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    const a = (parts[0]?.[0] ?? '').toUpperCase();
    const b = (parts[1]?.[0] ?? '').toUpperCase();
    return (a + b) || 'A';
  }, [name]);

  return (
    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
      {initials}
    </div>
  );
}

/* inline icons */
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
function CommentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M21 12a8 8 0 0 1-8 8H7l-4 4V12a8 8 0 1 1 18 0z" />
    </svg>
  );
}
