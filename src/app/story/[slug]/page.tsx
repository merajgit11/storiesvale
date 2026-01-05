'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StoryCard from "../../components/storiesblock/StoryCard";
import StoryContent from "../../components/storiesblock/StoryContent";
import RatingComment from "../../components/storiesblock/RatingComment";
import StoryComments from "../../components/storiesblock/CommentsSection";
import ScrollProgressCTA from "../../components/storiesblock/ScrollProgressCTA";
import Storyrecommendation from "../../components/storiesblock/Storyrecommendation";
import { Star, MessageSquare, Bookmark, Share2 } from 'lucide-react';

export default function StoryReaderPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        // Fetch story by slug from your Laravel API
        const res = await fetch(`https://api11.storiesvale.com/api/stories/slug/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setStory(data.story);
        }
      } catch (error) {
        console.error("Failed to load story:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchStory();
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading Story...</div>;
  if (!story) return <div className="h-screen flex items-center justify-center">Story not found.</div>;

  return (
    <div>
      <Header />
      <main className="pt-10">
        {/* Pass the story data as props to your components */}
        <StoryCard story={story} />

        <div className="w-full max-w-4xl overflow-hidden mb-12 transition-all mx-auto">
          <div className="flex justify-between items-center border-t border-b py-4 px-4 text-gray-600 text-sm">
            
            {/* Left: Reactions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-blue-600 transition">
                <Star className="w-5 h-5" />
                <span>{story.stars_count || 0}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-blue-600 transition">
                <MessageSquare className="w-5 h-5" />
                <span>{story.comments_count || 0}</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">
              <button title="Bookmark"><Bookmark className="w-5 h-5" /></button>
              <button title="Share"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Pass the content to the content viewer */}
        <StoryContent content={story.content} title={story.title} />
        
        <RatingComment storyId={story.id} />
        <StoryComments storyId={story.id} />
        <Storyrecommendation categoryId={story.category_id} />
        <ScrollProgressCTA />

        <Footer />
      </main>
    </div>
  );
}