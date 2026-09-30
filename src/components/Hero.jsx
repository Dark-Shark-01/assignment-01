function Hero() {
  return (
    <section id="home" className="hero section">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-small-title">
            HELLO, I'M
          </p>

          <h1>
            Pritam <span>Ghora</span>
          </h1>

          <h2>
            BCA Student | Web Developer | Tech Enthusiast
          </h2>

          <p className="hero-description">
            I'm a BCA (H) student at Techno India University,
            passionate about building web applications and
            exploring new technologies. I enjoy turning ideas
            into real projects and continuously learning new
            skills to grow as a developer.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="btn btn-primary"
            >
              Contact Me →
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              ↓ Download Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Dark-Shark-01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pritamghora-/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:pghora86@gmail.com">
              Email
            </a>

          </div>

        </div>

        <div className="hero-image-container">

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="image-frame">
            <img
              src="/profile.jpg"
              alt="Pritam Ghora"
            />
          </div>

          <div className="building-text">
            Keep
            <br />
            Building
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;