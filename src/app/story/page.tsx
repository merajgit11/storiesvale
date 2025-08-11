import Image from "next/image";
import Header from "../components/Header";

import Footer from "../components/Footer";
import StoryCard from "../components/storiesblock/StoryCard";

import {
  Star,
  MessageSquare,
  Bookmark,
  Share2,
} from 'lucide-react';
import StoryContent from "../components/storiesblock/StoryContent";
import RatingComment from "../components/storiesblock/RatingComment";
import StoryComments from "../components/storiesblock/CommentsSection";
import ScrollProgressCTA from "../components/storiesblock/ScrollProgressCTA";
import Storyrecommendation from "../components/storiesblock/Storyrecommendation";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <main>
    
      <StoryCard/>

    <div className="w-full max-w-4xl overflow-hidden mb-12 transition-all" style={{ margin: '0 auto' }}>
      <div className="flex justify-between items-center border-t border-b py-4 px-4 text-gray-600 text-sm">
        
        {/* Left: Reactions */}
        <div className="flex items-center gap-6">
          {/* Stars */}
          <button className="flex items-center gap-2 hover:text-blue-600 hover:bg-gray-100 rounded-full p-2 transition">
            <Star className="w-5 h-5" />
            <span>842</span>
          </button>

          {/* Comments */}
          <button className="flex items-center gap-2 hover:text-blue-600 hover:bg-gray-100 rounded-full p-2 transition">
            <MessageSquare className="w-5 h-5" />
            <span>40</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Bookmark */}
          <button
            className="hover:text-blue-600 hover:bg-gray-100 rounded-full p-2 px-3 transition"
            title="Bookmark"
          >
            <Bookmark className="w-5 h-5" />
          </button>

          {/* Share */}
          <button
            className="hover:text-blue-600 hover:bg-gray-100 rounded-full p-2 px-3 transition"
            title="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <StoryContent/>
    <RatingComment/>
    <StoryComments/>
    <Storyrecommendation/>
    <ScrollProgressCTA/>
    

       

       
 

       <Footer/>

      </main>
      
    </div>
  );
}
