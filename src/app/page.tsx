import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import CategorySection from "@/components/CategorySection";
import Sidebar from "@/components/Sidebar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import EntertainmentSection from "@/components/EntertainmentSection";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <NewsTicker />
      <Hero />
      
      <main className="content-container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-10">
            <FeaturedStories />
            <CategorySection title="Business" />
            <CategorySection title="Tech" />
            <EntertainmentSection />
            <LatestPosts />
          </div>
          <aside className="space-y-6">
            <Sidebar />
          </aside>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
