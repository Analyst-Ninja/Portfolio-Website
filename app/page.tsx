import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import StackSection from "@/components/StackSection";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/motion/SiteMotion";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <StackSection />
        <About />
        <Timeline />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
