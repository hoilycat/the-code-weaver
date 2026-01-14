// components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ 
        backgroundColor: "#1a252f", color: "#ede4d5", padding: "100px 0 30px", 
        display: "flex", flexDirection: "column", alignItems: "center",
        clipPath: "polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)" 
    }}>
      <h3 style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "30px" }}>Shall we weave together?</h3>
      <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
        {[1, 2, 3].map(i => <div key={i} style={{ width: "40px", height: "40px", border: "1px solid #ede4d5", borderRadius: "50%" }} />)}
      </div>
      <p style={{ opacity: 0.5, fontSize: "0.8rem" }}>Privacy policy @The Weaver</p>
    </footer>
  );
}