import { motion } from "framer-motion";
import './Footer.css';
import bneedle from "../assets/images/bneedle.svg";

export default function Footer() {
  return (
    <footer id="Footer" style={{ 
      backgroundColor: 'var(--dark-color)', 
      color: 'var(--bg-color)', 
      padding: '100px 0 20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      clipPath: 'polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)' // Angled top
    }}>
      <img className= "needles" id="bottomneedle" src={bneedle} />

      <h3>
        Shall we weave together?
      </h3>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ width: '30px', height: '30px', border: '1px solid #ede4d5', borderRadius: '50%' }} />
        ))}
      </div>

      <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>
        Privacy policy ©The Weaver
      </p>
    </footer>
  );
}