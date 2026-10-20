import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryChips from "@/components/home/CategoryChips";
import LiveChannels from "@/components/home/LiveChannels";
import RecommendedVideos from "@/components/home/RecommendedVideos";

export const metadata = {
  title: "Streamify — Explore Live Streams & Videos",
  description:
    "Watch high-fidelity 4K 60FPS broadcasts, live esports, music sessions, and coding streams on Streamify.",
};

export default function Homepage() {
  return (
    <>
      <Header />

      <main className="w-full pt-16 flex-1 flex flex-col bg-surface">
        <div className="flex flex-col w-full pb-24">
          {/* Hero Banner Carousel */}
          <HeroBanner />

          {/* Sticky Category Filter Chips */}
          <CategoryChips />

          {/* Main Content Feed */}
          <div className="max-w-7xl mx-auto w-full px-gutter md:px-margin flex flex-col gap-space-2xl pt-space-xl">
            {/* Live Channels & Broadcasts Section */}
            <LiveChannels />

            {/* Recommended Videos Section */}
            <RecommendedVideos />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
