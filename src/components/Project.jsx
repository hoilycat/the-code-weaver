export default function Project() {
  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>project</h2>
      
      {/* Featured Project */}
      <div style={{ 
        width: '90%', height: '400px', 
        backgroundColor: 'var(--accent-blue)', 
        marginBottom: '40px' 
      }} />

      {/* Project Carousel Area */}
      <div style={{ display: 'flex', width: '90%', gap: '20px', alignItems: 'center' }}>
        <span style={{ fontSize: '2rem', cursor: 'pointer' }}>◀</span>
        <div style={{ flex: 1, height: '300px', backgroundColor: 'var(--accent-blue)' }} />
        <div style={{ flex: 1, height: '300px', backgroundColor: 'var(--accent-blue)' }} />
        <div style={{ width: '100px', height: '300px', backgroundColor: 'var(--accent-blue)', opacity: 0.5 }} />
      </div>
    </section>
  );
}