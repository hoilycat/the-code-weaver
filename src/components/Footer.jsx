import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--dark-color)', 
      color: 'var(--bg-color)', 
      padding: '100px 0 20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      clipPath: 'polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)' // Angled top
    }}>
      {/* Inverted Needles */}
      <svg width="200" height="100" viewBox="0 0 200 100" style={{ transform: 'rotate(180deg)' }}>
        <line x1="40" y1="20" x2="160" y2="80" stroke="#ede4d5" strokeWidth="4" />
        <circle cx="160" cy="80" r="6" fill="#ede4d5" />
        <line x1="160" y1="20" x2="40" y2="80" stroke="#ede4d5" strokeWidth="4" />
        <circle cx="40" cy="80" r="6" fill="#ede4d5" />
      </svg>

      <h3 style={{ fontSize: '1.8rem', fontWeight: '300', margin: '20px 0' }}>
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