import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["hero", "about", "resume", "projects", "skills", "contact"];

function App() {
  const activeSectionId = useActiveSection();

  // Keyboard: Alt+1..6 scroll to sections (Hero, About, Resume, Projects, Skills, Contact)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!e.altKey || e.key < "1" || e.key > "6") return;
      const target = document.activeElement as HTMLElement;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      e.preventDefault();
      const index = parseInt(e.key, 10) - 1;
      const id = SECTION_IDS[index];
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Nav activeSectionId={activeSectionId ?? undefined} />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <CV />
      <Projects />
      <Contact />
      <BackToTop visible={activeSectionId !== null && activeSectionId !== "hero"} />
    </>
  );
}

export default App;
