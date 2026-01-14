import {motion,useScroll,useTransform} from "framer-motion";

export default function Hero() {
  return (
    <section id="hero">
      <h1 style={{ fontSize: "5rem" }}>The Weaver</h1>
      <p style={{ marginTop: "20px" }}>scroll ↓</p>
    </section>
  );
}