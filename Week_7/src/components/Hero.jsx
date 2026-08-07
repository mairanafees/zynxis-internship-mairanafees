function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">FRONTEND DEVELOPMENT • PERFORMANCE</p>

        <h1>
          Building fast,
          <span> thoughtful </span>
          digital experiences.
        </h1>

        <p className="hero-text">
          A performance-focused frontend project created for the
          Zynxis Frontend Development Internship — Task 7.
        </p>

        <a href="#projects" className="primary-btn">
          Explore Projects
        </a>
      </div>

      <div className="hero-visual">
        <div className="performance-card">
          <span>LIGHTHOUSE</span>
          <strong>90+</strong>
          <small>Performance Target</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;