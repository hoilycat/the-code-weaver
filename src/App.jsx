import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <>
      <nav>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;