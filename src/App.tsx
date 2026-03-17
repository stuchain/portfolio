import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
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
      <section id="skills">
        <h2>Skills</h2>
        <p>Coming soon</p>
      </section>
      <Contact />
    </>
  );
}

export default App;
