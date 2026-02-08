
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
      <Hero />
      <About />
      <Project />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;