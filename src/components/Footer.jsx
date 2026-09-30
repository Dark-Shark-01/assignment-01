function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <span className="brand-logo">
            P
          </span>

          <strong>
            Pratim Das
          </strong>

        </div>

        <p>
          © 2026 Pratim Das.
          All rights reserved.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/pratimdass"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pratimdas-/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:pratimdas145@gmail.com">
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;