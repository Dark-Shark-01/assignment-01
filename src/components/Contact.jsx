const skills = [
  {
    name: "HTML",
    icon: "HTML5",
  },
  {
    name: "CSS",
    icon: "CSS3",
  },
  {
    name: "Java",
    icon: "☕",
  },
  {
    name: "Python",
    icon: "🐍",
  },
  {
    name: "JavaScript",
    icon: "JS",
  },
  {
    name: "React",
    icon: "⚛",
  },
  {
    name: "Git",
    icon: "◆",
  },
  {
    name: "GitHub",
    icon: "◉",
  },
  {
    name: "VS Code",
    icon: "⌁",
  },
  {
    name: "Responsive Design",
    icon: "▣",
  },
  {
    name: "Problem Solving",
    icon: "♧",
  },
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container">

        <div className="section-title">

          <span className="section-icon">
            &lt;/&gt;
          </span>

          <h2>
            Skills
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <p>
                {skill.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;