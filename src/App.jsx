<<<<<<< HEAD
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
=======
import {motion} from "framer-motion";
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
>>>>>>> test
      <Hero />
      <About />
      <Project />
      <Footer />
<<<<<<< HEAD
    </>
=======
      <ScrollToTop />
    </div>
>>>>>>> test
  );
}

export default App;