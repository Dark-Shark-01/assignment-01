function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-title">
          <span className="section-icon">♙</span>

          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-container">

          <div className="about-text">

            <p>
              I'm Pritam Ghora, a dedicated and curious BCA
              student at Techno India University. I enjoy
              coding, learning new technologies, and working
              on projects that solve real-world problems.
            </p>

            <p>
              My goal is to become a skilled full-stack
              developer and contribute to meaningful products
              in the future.
            </p>

            <div className="about-badges">

              <span>⌘ Problem Solver</span>
              <span>♨ Team Player</span>
              <span>⚡ Quick Learner</span>

            </div>

          </div>

          <div className="quote-card">

            <div className="code-icon">
              &lt;/&gt;
            </div>

            <p>
              “Code is not just what I do,
              it's how I think.”
            </p>

            <span>
              — Pritam Ghora
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;