import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const App = () => (
  <div className="site-shell">
    <div className="noise-layer" aria-hidden="true" />
    <div className="ambient ambient-one" aria-hidden="true" />
    <div className="ambient ambient-two" aria-hidden="true" />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
