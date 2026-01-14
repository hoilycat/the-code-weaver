import { motion } from "framer-motion";

const NeedlesIcon = ({ color }) => (
  <svg width="200" height="100" viewBox="0 0 200 100">
    <line x1="40" y1="20" x2="160" y2="80" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <circle cx="40" cy="20" r="8" fill={color} />
    <line x1="160" y1="20" x2="40" y2="80" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <circle cx="160" cy="20" r="8" fill={color} />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" style={{ justifyContent: 'center' }}>
      <nav>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <h1 style={{ fontSize: "4rem", marginBottom: '10px', color: '#334155' }}>The Weaver</h1>
      <NeedlesIcon color="#1a252f" />
      <motion.p 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ marginTop: "20px", fontSize: '0.8rem', opacity: 0.7 }}
      >
        scroll ↓
      </motion.p>
    </section>
  );
}