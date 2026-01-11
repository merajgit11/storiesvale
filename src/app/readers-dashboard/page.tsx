'use client';
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Hero from "../components/homebanner/Hero";
import Benefits from "../components/authorbenefits/page";
import CategoriesSection from "../components/categoryhome/page";
import TopRatedStories from "../components/homepagecomponents/TopRatedStories";
import TestimonialSection from "../components/hometestimonials/page";
import Footer from "../components/Footer";
import PopularonStoriesVale from "../components/homepagecomponents/PopularonStoriesVale";
import NewReleases from "../components/homepagecomponents/NewReleases";
import EdiorsPicks from "../components/homepagecomponents/EditorsPicks";
import StaffPicks from "../components/homepagecomponents/StaffFavorite";
import HomeFAQSection from "../components/homefaqs/page";
import Top10Stories from "../components/homepagecomponents/Top10Stories";

export default function Home() {
  const [data, setData] = useState({ new_releases: [], top_rated: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const res = await fetch('https://api11.storiesvale.com/api/homepage/stories');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch home data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchHomeData();
  }, []);

  return (
    <div className="">
      <Header/>
      <main>  
       
       
       <TopRatedStories/>
       <Top10Stories/>
       <CategoriesSection/>
       <PopularonStoriesVale/>
       {/* <Benefits/> */}
       <NewReleases stories={data.new_releases} loading={loading} />
       <EdiorsPicks/>
       <StaffPicks/>
       {/* <HomeFAQSection/> */}

       <section className="bg-white py-0 pb-10 px-6 md:px-12">
  <div className=" mx-auto">
    <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-4">
      About StoriesVale – A Platform Where Stories Come Alive
    </h2>
    <p className="text-base text-gray-600 mb-6">
      StoriesVale.com is a modern digital storytelling platform where readers and writers from around the world connect, create, and inspire. Whether you are a passionate storyteller or a curious reader, StoriesVale is your home for discovering immersive fiction, compelling poetry, real-life experiences, and creative writing across every genre imaginable.
    </p>
    <p className="text-base text-gray-600">
      Built for both seasoned writers and emerging voices, StoriesVale makes it easy to publish your stories, gain readers, and grow your fanbase. Our mission is to empower every writer with the tools they need to share their voice—and to give every reader a space where new worlds, characters, and emotions await.
    </p>
    <p className="mt-6 text-base text-gray-600">
      Join StoriesVale to explore thousands of stories across romance, fantasy, thriller, sci-fi, drama, and more. Your next favorite story is just a scroll away.
    </p>
  </div>
</section>
 

       <Footer/>

      </main>
      
    </div>
  );
}
