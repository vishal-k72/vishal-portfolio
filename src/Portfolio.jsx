import { useEffect } from "react";
import "./App.css";

export default function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".vk-reveal, .vk-reveal-left, .vk-reveal-right, .vk-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        pageHeight > 0
          ? (scrollTop / pageHeight) * 100
          : 0;

      const progressBar =
        document.querySelector(".vk-scroll-progress");

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const technologies = [
    {
      icon: "🐍",
      name: "Python",
      type: "Programming",
    },
    {
      icon: "⚛",
      name: "React",
      type: "Frontend",
    },
    {
      icon: "JS",
      name: "JavaScript",
      type: "Language",
    },
    {
      icon: "HTML",
      name: "HTML",
      type: "Frontend",
    },
    {
      icon: "CSS",
      name: "CSS",
      type: "Frontend",
    },
    {
      icon: "FL",
      name: "Flask",
      type: "Backend",
    },
    {
      icon: "SQL",
      name: "MySQL",
      type: "Database",
    },
    {
      icon: "GH",
      name: "GitHub",
      type: "Version Control",
    },
  ];

  const learning = [
    {
      number: "01",
      title: "Python Development",
      description:
        "Strengthening Python fundamentals, problem solving, DSA and backend development.",
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Building modern interfaces with HTML, CSS, JavaScript and React.",
    },
    {
      number: "03",
      title: "Backend & APIs",
      description:
        "Learning Flask, REST APIs and how frontend applications communicate with backend systems.",
    },
    {
      number: "04",
      title: "Databases",
      description:
        "Working with SQL and MySQL to understand application data and database operations.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "React UI Experiments",
      description:
        "A collection of React components created while learning animations, navigation, glassmorphism and modern UI patterns.",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      number: "02",
      title: "Flask Applications",
      description:
        "Python based web applications focused on templates, forms, APIs and backend development.",
      tags: ["Python", "Flask", "API"],
    },
    {
      number: "03",
      title: "Database Projects",
      description:
        "Projects designed to understand how applications store, retrieve and manage information using SQL and MySQL.",
      tags: ["SQL", "MySQL", "Backend"],
    },
  ];

  return (
    <main className="vk-page">
      {/* =========================================
          SCROLL PROGRESS
      ========================================= */}

      <div className="vk-scroll-progress"></div>

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="vk-navbar">
        <button
          className="vk-brand"
          onClick={() => scrollToSection("vk-home")}
        >
          <span>VK</span>
          <small>DEVELOPER</small>
        </button>

        <nav className="vk-navigation">
          <button onClick={() => scrollToSection("vk-about")}>
            About Me
          </button>

          <button onClick={() => scrollToSection("vk-learning")}>
            Learning
          </button>

          <button onClick={() => scrollToSection("vk-technologies")}>
            Technologies
          </button>

          <button onClick={() => scrollToSection("vk-projects")}>
            Projects
          </button>

          <button
            className="vk-contact-nav"
            onClick={() => scrollToSection("vk-contact")}
          >
            Contact Me
          </button>
        </nav>
      </header>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="vk-hero" id="vk-home">
        <div className="vk-hero-grid"></div>

        <div className="vk-hero-glow vk-glow-1"></div>
        <div className="vk-hero-glow vk-glow-2"></div>

        <div className="vk-hero-content">
          <div className="vk-availability vk-reveal">
            <span></span>
            Currently learning & building
          </div>

          <p className="vk-eyebrow vk-reveal">
            HELLO, I'M VISHAL
          </p>

          <h1 className="vk-hero-title vk-reveal">
            Building my path
            <br />
            <span>
              into software development.
            </span>
          </h1>

          <p className="vk-hero-description vk-reveal">
            I'm learning modern web development with
            Python, React and JavaScript while building
            practical projects and improving my problem
            solving skills.
          </p>

          <div className="vk-hero-actions vk-reveal">
            <button
              className="vk-primary-button"
              onClick={() => scrollToSection("vk-projects")}
            >
              View Projects
              <span>↗</span>
            </button>

            <button
              className="vk-secondary-button"
              onClick={() => scrollToSection("vk-about")}
            >
              Explore My Journey
            </button>
          </div>

          <div className="vk-hero-stats vk-reveal">
            <div>
              <strong>Python</strong>
              <span>Primary Focus</span>
            </div>

            <div>
              <strong>Full Stack</strong>
              <span>Career Goal</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>
          </div>
        </div>

        <div className="vk-scroll-hint">
          <span>SCROLL TO EXPLORE</span>
          <div className="vk-scroll-line"></div>
        </div>
      </section>

      {/* =========================================
          ABOUT ME
      ========================================= */}

      <section
        className="vk-section"
        id="vk-about"
      >
        <div className="vk-section-header vk-reveal">
          <span className="vk-section-number">
            01
          </span>

          <div>
            <p>ABOUT ME</p>

            <h2>
              Who I am & what
              <span> I'm building.</span>
            </h2>
          </div>
        </div>

        <div className="vk-about-layout">
          <div className="vk-about-main vk-glass vk-reveal-left">
            <span className="vk-card-label">
              INTRODUCTION
            </span>

            <h3>
              Learning technology
              by actually building.
            </h3>

            <p>
              I'm focused on becoming a strong
              software developer by learning concepts
              and applying them through practical
              projects.
            </p>

            <p>
              My current path combines frontend
              development, Python backend development,
              databases, APIs and problem solving.
            </p>

            <div className="vk-about-line"></div>

            <span className="vk-about-quote">
              "Learn the concept. Build something.
              Understand how it works."
            </span>
          </div>

          <div className="vk-about-side">
            <div className="vk-mini-card vk-glass vk-reveal-right">
              <span>01</span>

              <h3>
                Developer Mindset
              </h3>

              <p>
                Understanding the logic behind
                technologies instead of only
                memorizing syntax.
              </p>
            </div>

            <div className="vk-mini-card vk-glass vk-reveal-right">
              <span>02</span>

              <h3>
                Practical Learning
              </h3>

              <p>
                Turning concepts into components,
                websites, APIs and complete projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LEARNING
      ========================================= */}

      <section
        className="vk-section vk-learning-section"
        id="vk-learning"
      >
        <div className="vk-section-header vk-reveal">
          <span className="vk-section-number">
            02
          </span>

          <div>
            <p>LEARNING</p>

            <h2>
              The skills I'm
              <span> developing.</span>
            </h2>
          </div>
        </div>

        <div className="vk-learning-list">
          {learning.map((item, index) => (
            <div
              className="vk-learning-item vk-glass vk-reveal"
              key={item.number}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="vk-learning-number">
                {item.number}
              </div>

              <div className="vk-learning-content">
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>

              <div className="vk-learning-arrow">
                ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          TECHNOLOGIES
      ========================================= */}

      <section
        className="vk-section"
        id="vk-technologies"
      >
        <div className="vk-section-header vk-reveal">
          <span className="vk-section-number">
            03
          </span>

          <div>
            <p>TECHNOLOGIES</p>

            <h2>
              Tools I'm
              <span> working with.</span>
            </h2>
          </div>
        </div>

        <div className="vk-tech-grid">
          {technologies.map((tech, index) => (
            <div
              className="vk-tech-card vk-glass vk-scale"
              key={tech.name}
              style={{
                transitionDelay: `${index * 70}ms`,
              }}
            >
              <div className="vk-tech-icon">
                {tech.icon}
              </div>

              <div>
                <h3>
                  {tech.name}
                </h3>

                <span>
                  {tech.type}
                </span>
              </div>

              <div className="vk-tech-arrow">
                ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          PROJECTS
      ========================================= */}

      <section
        className="vk-section vk-project-section"
        id="vk-projects"
      >
        <div className="vk-section-header vk-reveal">
          <span className="vk-section-number">
            04
          </span>

          <div>
            <p>PROJECTS</p>

            <h2>
              Learning through
              <span> projects.</span>
            </h2>
          </div>
        </div>

        <div className="vk-projects-grid">
          {projects.map((project, index) => (
            <article
              className="vk-project-card vk-glass vk-reveal"
              key={project.number}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
            >
              <div className="vk-project-top">
                <span>
                  {project.number}
                </span>

                <span>
                  ↗
                </span>
              </div>

              <div className="vk-project-content">
                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>
              </div>

              <div className="vk-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          GOAL / CONTACT
      ========================================= */}

      <section
        className="vk-contact-section"
        id="vk-contact"
      >
        <div className="vk-contact-glow"></div>

        <div className="vk-contact-card vk-glass vk-reveal">
          <span className="vk-card-label">
            NEXT CHAPTER
          </span>

          <h2>
            The goal is simple.
            <br />

            <span>
              Become a Full Stack Developer.
            </span>
          </h2>

          <p>
            Keep learning. Keep building.
            Keep improving the fundamentals.
          </p>

          <div className="vk-goal-stack">
            <span>Python</span>
            <span>React</span>
            <span>Flask</span>
            <span>SQL</span>
            <span>REST APIs</span>
            <span>Git</span>
          </div>

          <button
            className="vk-primary-button"
            onClick={() => scrollToSection("vk-home")}
          >
            Back To Top
            <span>↑</span>
          </button>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="vk-footer">
        <div className="vk-footer-brand">
          VK<span>.</span>
        </div>

        <p>
          Learning. Building. Improving.
        </p>

        <small>
          React Scroll Animation Experiment · 2026
        </small>
      </footer>
    </main>
  );
}