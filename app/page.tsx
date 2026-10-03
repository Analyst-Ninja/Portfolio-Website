import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Recognition from "@/components/Recognition";
import Work from "@/components/Work";
import StackSection from "@/components/StackSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/motion/SiteMotion";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Recognition />
        <Work />
        <StackSection />
        <Contact />
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
