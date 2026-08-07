function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 — ABOUT</p>
        <h2>Performance is part of the experience.</h2>
      </div>

      <div className="about-grid">
        <div>
          <p>
            This project demonstrates practical frontend performance
            optimization techniques using React and Vite.
          </p>

          <p>
            The goal is to reduce unnecessary loading, improve perceived
            performance, and create a smoother experience for users.
          </p>
        </div>

        <div className="stats">
          <div>
            <strong>90+</strong>
            <span>Lighthouse Target</span>
          </div>

          <div>
            <strong>Lazy</strong>
            <span>Loaded Resources</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Component Architecture</span>
          </div>

          <div>
            <strong>Vite</strong>
            <span>Optimized Build</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;