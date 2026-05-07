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
    <div className="bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium w-full py-5">
      {size} — Advertisement
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <NewsTicker />

      {/* Hero + Sidebar share the same grid row — matching JNews exactly */}
      <div className="bg-white border-b border-gray-200">
        <div className="content-container px-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 items-start">
            <Hero />
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <main className="content-container px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">

          {/* Main Content */}
          <div className="space-y-6 min-w-0">
            <FeaturedStories />
            <AdBanner size="728x90" />
            <CategorySection title="Business" />
            <AdBanner size="728x90" />
            <CategorySection title="Tech" />
            <EntertainmentSection />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CategorySection title="Lifestyle" />
              <CategorySection title="Music" />
            </div>
            <AdBanner size="970x90" />
            <LatestPosts />
          </div>

          {/* Sticky Sidebar continues below hero */}
          <aside className="hidden lg:block">
            <div className="sticky top-4 space-y-5 max-h-[calc(100vh-2rem)] overflow-y-auto pb-4">
              <Sidebar />
            </div>
          </aside>

        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}