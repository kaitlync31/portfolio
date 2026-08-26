import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Leadership from "@/components/Leadership";
import Creative from "@/components/Creative";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Work />
        <Leadership />
        <Creative />
        <About />
      </main>
      <Footer />
    </div>
  );
}
