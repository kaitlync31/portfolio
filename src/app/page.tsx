import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collage from "@/components/Collage";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Creative from "@/components/Creative";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Collage />
        <Intro />
        <Work />
        <Creative />
        <About />
      </main>
      <Footer />
    </div>
  );
}
