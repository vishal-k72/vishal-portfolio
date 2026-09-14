import { useState } from "react";
import "./App.css";
import resumePdf from "./assets/Resume - Vishal Python Full Stack.pdf"; // Apni PDF file ka path yahan dein
import vk from "./assets/vk.png";
import ss from "./assets/ss.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Vishal<span className="logoo">.</span>
        </a>

        <button className="dropdown-box" onClick={() => setMenuOpen(!menuOpen)}>
          Menu <span className={`arrow ${menuOpen ? "rotate" : ""}`}>▼</span>
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-text">HELLO, I'M</p>

          <h1>Vishal Kardam</h1>

          <h2>Python Full Stack & MERN Developer</h2>

          <p>
            I build responsive web applications using Python, Django, Flask,
            React, JavaScript and modern web technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>


              {/* Resume Section  */}
            <a href={resumePdf} download="My_Resume.pdf" className="btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="avatar">
          <img src={vk} height={100} alt="" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>About Me</h2>

        <div className="about-content">
          <p>
            I'm Vishal Kardam, a developer interested in building modern and
            useful web applications. I work with Python, JavaScript, React,
            Flask, Django and databases.
          </p>

          <p>
            I enjoy learning new technologies, building projects and improving
            my problem-solving and development skills.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {/* FRONTEND */}
          <div className="skill-box">
            <h3>Frontend</h3>

            <div className="skill-items">
              <Skill icon="html5" name="HTML" />
              <Skill icon="css3" name="CSS" />
              <Skill icon="javascript" name="JavaScript" />
              <Skill icon="react" name="React" />
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-box">
            <h3>Backend</h3>

            <div className="skill-items">
              <Skill icon="python" name="Python" />
              <Skill icon="flask" name="Flask" light />

              <Skill icon="django" name="Django" light />
              <Skill icon="nodejs" name="Node.js" />
              <Skill icon="express" name="Express" light />
              <Skill icon="fastapi" name="FastAPI" />
            </div>
          </div>

          {/* DATABASE */}
          <div className="skill-box">
            <h3>Database</h3>

            <div className="skill-items">
              <Skill icon="mysql" name="MySQL" />
              <Skill icon="postgresql" name="PostgreSQL" />
              <Skill icon="mongodb" name="MongoDB" />
            </div>
          </div>

          {/* DATA SCIENCE */}
          <div className="skill-box">
            <h3>Data Science</h3>

            <div className="skill-items">
              <Skill icon="numpy" name="NumPy" />
              <Skill icon="pandas" name="Pandas" />
              <Skill icon="matplotlib" name="Matplotlib" />
              <Skill icon="jupyter" name="Jupyter" />
              <Skill icon="python" name="Seaborn" />
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-box">
            <h3>Tools</h3>

            <div className="skill-items">
              <Skill icon="git" name="Git" />
              <Skill icon="github" name="GitHub" light />
              <Skill icon="vscode" name="VS Code" />
              <Skill icon="postman" name="Postman" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <p className="section-label">03 — PROJECTS</p>

        <div className="project-heading">
          <h2>Selected Projects</h2>
          <span>← Scroll →</span>
        </div>

        <div className="projects-container">
          <Project
            number="01"
            image={ss}
            title="E-Commerce App"
            description="Full stack e-commerce application with authentication, products and database."
            tech="Python · Django · React · MySQL"
          />

          <Project
            number="02"
            image={ss}
            title="Task Manager"
            description="Task management application where users can create, update and manage their tasks."
            tech="React · Node.js · Express · MongoDB"
          />

          <Project
            number="03"
            image={ss}
            title="AI Content Generator"
            description="Simple AI application that generates structured content and displays it in Hindi and English."
            tech="HTML · CSS · JavaScript · AI API"
          />

          <Project
            number="04"
            image={ss}
            title="Portfolio Website"
            description="Personal developer portfolio showcasing skills, projects and contact information."
            tech="React · JavaScript · CSS"
          />
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">04 — EDUCATION</p>

        <h2>Education</h2>

        <div className="education-card">
          <div>
            <h3>Master of Computer Applications</h3>
            <p>MCA · Pursuing</p>
          </div>

          <span>2026 — Present</span>
        </div>

        <div className="education-card">
          <div>
            <h3>Bachelor of Computer Applications</h3>
            <p>BCA</p>
          </div>

          <span>2022 — 2025</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="section-label">05 — CONTACT</p>

        <h2>Let's build something together 🚀</h2>

        <p className="contact-description">
          Have a project or opportunity? Feel free to connect with me.
        </p>

        <div className="contact-links">
          <a href="mailto:vkar3212@gmail.com" className="email-contact">
            ✉ Email: vkar3212@gmail.com ↗
          </a>
        </div>

        <div className="social-container">
          <h4>Connect on Social Platforms</h4>

          <div className="social-grid">
            <Social
              icon="github"
              name="GitHub"
              url="https://github.com/vishal-k72"
            />

            <Social
              icon="leetcode"
              name="LeetCode"
              url="https://leetcode.com/u/Vishalkardam/"
            />

            <Social
              icon="instagram"
              name="Instagram"
              url="https://www.instagram.com/vishalll.vk"
            />

            <Social
              icon="facebook"
              name="Facebook"
              url="https://www.facebook.com/vishal.kardam.5494"
            />

            <Social
              icon="x"
              name="Twitter / X"
              url="https://x.com/vishal_7210"
            />

            <Social
              icon="youtube"
              name="YouTube"
              url="https://www.youtube.com/@SpringTeckY"
            />

            <Social
              icon="threads"
              name="Threads"
              url="https://threads.nethttps://www.threads.net/@vishal.kardam.7210"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Vishal<span>.</span>
            </a>

            <p>
              Full Stack Developer building modern, responsive and user-friendly
              web applications.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>

            <a href="mailto:vkar3212@gmail.com">vkar3212@gmail.com</a>

            <p>India</p>
            <p>Available for opportunities</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 <strong>Vishal Kardam</strong>. All Rights Reserved.
          </p>

          <p>
            Built with <span>React</span> · <span>CSS</span> ·
            <span> JavaScript</span>
          </p>
        </div>
      </footer>
    </>
  );
}

/* =========================
   SKILL COMPONENT
========================= */

function Skill({ icon, name, light = false }) {
  return (
    <div className="skill-item">
      <div className={`skill-logo ${light ? "light-logo" : ""}`}>
        <img
          src={
            icon == "django"
              ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHCU8s_lixu2ZtwgMSwguj8eVHaCVDi-Ds7VlAL6-IQ&s`
              : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`
          }
          alt={name}
        />
      </div>

      {name}
    </div>
  );
}

/* =========================
   PROJECT COMPONENT
========================= */

function Project({ number, image, title, description, tech }) {
  return (
    <article className="project-card">
      <span className="project-number">{number}</span>

      <div className="project-image">
        <img src={image} alt={`${title} preview`} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <small>{tech}</small>

      <div className="project-links">
        <a href="#">GitHub ↗</a>
        <a href="#">Live Demo ↗</a>
      </div>
    </article>
  );
}

/* =========================
   SOCIAL COMPONENT
========================= */

function Social({ icon, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
    >
      <img
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`}
        alt={name}
      />

      {name}
    </a>
  );
}

export default App;
