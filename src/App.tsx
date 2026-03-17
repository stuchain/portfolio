import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <CV />
      <section id="projects">
        <h2>Projects</h2>
        <p>Coming soon</p>
      </section>
      <Skills />
      <Contact />
    </>
  );
}

export default App;
