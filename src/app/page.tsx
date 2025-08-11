// import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/homebanner/Hero";
import Benefits from "./components/authorbenefits/page";
import CategoriesSection from "./components/categoryhome/page";
import TopRatedStories from "./components/topcategory/page";
import FeaturedStories from "./components/featuredhome/page";
import LatestStories from "./components/latesthome/page";
import FAQSection from "./components/homefaqs/page";
import TestimonialSection from "./components/hometestimonials/page";
import RecomendedStories from "./components/recomended.tsx/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main>
       <Hero/>
       <TopRatedStories/>
       <RecomendedStories/>
       <Benefits/>
       <FeaturedStories/>
       <CategoriesSection/>
       <LatestStories/>
       <TestimonialSection/>
       <FAQSection/>

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
