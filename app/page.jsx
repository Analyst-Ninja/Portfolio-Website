import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";
import Projects from "../src/components/Projects";
import StackSection from "../src/components/StackSection";
import About from "../src/components/About";
import Timeline from "../src/components/Timeline";
import Contact from "../src/components/Contact";

export default function Page() {
  return (
    <div className="site">
      <div className="site__glow site__glow--a" aria-hidden="true" />
      <div className="site__glow site__glow--b" aria-hidden="true" />
      <Nav />
      <main className="site__main">
        <Hero />
        <Projects />
        <StackSection />
        <About />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}
