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

function AdBanner({ size = "728x90" }: { size?: string }) {
  return (
    <div className="bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium w-full py-6 rounded-sm">
      {size} — Advertisement
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <NewsTicker />
      <Hero />

      <main className="content-container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

          {/* Main Content */}
          <div className="space-y-8">
            <FeaturedStories />

            <AdBanner size="728x90" />

            <CategorySection title="Business" />

            <AdBanner size="728x90" />

            <CategorySection title="Tech" />

            <EntertainmentSection />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CategorySection title="Lifestyle" />
              <CategorySection title="Music" />
            </div>

            <AdBanner size="970x90" />

            <LatestPosts />
          </div>

          {/* Sidebar */}
          <aside>
            <Sidebar />
          </aside>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}