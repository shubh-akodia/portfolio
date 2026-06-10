import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectModal/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;