export default function Hero() {
  return (
    <section id="hero">
      <h1 className="hero-title">The Weaver</h1>

      <svg
        className="needle-svg"
        viewBox="0 0 600 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 실 */}
        <path
          id="thread"
          d="M20 60 C 150 20, 300 100, 580 60"
          fill="none"
          stroke="#1a252f"
          strokeWidth="3"
        />

        {/* 바늘 */}
        <circle id="needle" cx="20" cy="60" r="6" fill="#1a252f" />
      </svg>

      <p className="scroll-hint">scroll ↓</p>
    </section>
  );
}

