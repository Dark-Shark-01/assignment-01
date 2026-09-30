function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <nav className="navbar container">
      
      <a href="#home" className="brand">
        <span className="brand-logo">P</span>
        <span>
          Pritam <strong>Ghora</strong>
        </span>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>

      <a href="#contact" className="theme-button">
        ☾
      </a>

    </nav>
  );
}

export default Navbar;