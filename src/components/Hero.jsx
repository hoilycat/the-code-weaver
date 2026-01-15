import { motion } from "framer-motion";
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <nav>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <h1 style={{ fontSize: "4rem", marginBottom: '10px', color: '#334155' }}>The Weaver</h1>
       <motion.p 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ marginTop: "20px", fontSize: '0.8rem', opacity: 0.7 }}
      >
        scroll ↓
      </motion.p>
      <img class= "needles" id="topneedle" src="/assets/images/tneedle.svg" />
    </section>
  );
}