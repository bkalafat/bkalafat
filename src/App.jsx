import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      period: '2024 — Present',
      title: 'Senior Software Engineer (Backend, .NET)',
      company: 'Akbank & Turkiye Finans',
      description: 'Led large-scale legacy COBOL mainframe modernization to modern C# and Java backend services, achieving 6-8× acceleration through AI-assisted development. Delivered 3 company-wide presentations on GitHub Copilot Enterprise adoption. Implemented Spec-Driven Development (SDD) methodology.',
      tags: ['C#', '.NET Core', 'Java', 'GitHub Copilot', 'Clean Architecture', 'Azure DevOps'],
      url: 'https://cv.bkalafat.com'
    },
    {
      period: '2023 — 2024',
      title: 'Senior Software Engineer (Backend, .NET)',
      company: 'International Remote',
      description: 'Contributed to architecture, design, and implementation of backend-focused features using C#. Collaborated within an international, remote-first environment delivering scalable, maintainable solutions.',
      tags: ['C#', '.NET Core', 'Backend Architecture'],
      url: 'https://cv.bkalafat.com'
    },
    {
      period: '2019 — 2023',
      title: 'Senior Software Engineer (Backend, .NET)',
      company: 'Halkbank, Turkiye Finans & Akbank',
      description: 'Architected migration from legacy .NET Framework to Clean Architecture. Increased concurrent user capacity 5-6× through async programming. Owned code review process and mentored development team.',
      tags: ['.NET Core', 'REST APIs', 'EF Core', 'TypeScript', 'Java Spring', 'Oracle'],
      url: 'https://cv.bkalafat.com'
    },
    {
      period: '2015 — 2019',
      title: 'Software Developer',
      company: 'Various Companies',
      description: 'Developed secure smartcard systems using Java and APDU protocols. Transformed legacy systems to service-oriented architectures using MVVM, WPF, and WCF services.',
      tags: ['Java', '.NET', 'WPF', 'WCF', 'Oracle', 'PL/SQL'],
      url: 'https://cv.bkalafat.com'
    }
  ];

  const projects = [
    {
      title: 'DiffPilot',
      description: 'AI-powered code review and diff analysis tool. Leverages LLMs to provide intelligent code review suggestions, detect potential issues, and explain complex code changes.',
      tags: ['React', 'TypeScript', 'OpenAI API', 'Git'],
      url: 'https://diffpilot.bkalafat.com',
      image: null
    }
  ];

  return (
    <div className="app-layout">
      {/* Left Sidebar - Sticky */}
      <header className="sidebar">
        <div className="sidebar-content">
          <div className="intro">
            <h1 className="name">Burak Kalafat</h1>
            <h2 className="title">Senior Software Engineer</h2>
            <p className="tagline">
              I build high-performance backend systems and lead legacy modernization with AI-assisted development.
            </p>
          </div>

          <nav className="nav">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
              <span className="nav-indicator"></span>
              <span className="nav-text">About</span>
            </a>
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
              <span className="nav-indicator"></span>
              <span className="nav-text">Experience</span>
            </a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
              <span className="nav-indicator"></span>
              <span className="nav-text">Projects</span>
            </a>
          </nav>

          <div className="social-links">
            <a href="https://github.com/bkalafat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/bkalafat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://cv.bkalafat.com" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Right Content - Scrollable */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section">
          <h3 className="section-heading-mobile">About</h3>
          <div className="about-content">
            <p>
              Senior Software Engineer with <span className="highlight">12+ years of experience</span> specializing
              in large-scale legacy modernization, clean architecture, and high-performance backend systems
              within the financial sector. Proven technical leader adept at mentoring teams, conducting
              code reviews, and driving architectural decisions.
            </p>
            <p>
              <span className="highlight">GitHub Copilot Enterprise champion</span> with specialized expertise
              in AI-assisted development, delivering organization-wide training and achieving
              <span className="highlight">6-8× acceleration</span> on large-scale legacy modernization
              projects. Expert in Spec-Driven Development (SDD) and prompt engineering for
              enterprise-scale modernization.
            </p>
            <p>
              My interests include <span className="highlight">LLM & RAG-based Enterprise Solutions</span>,
              <span className="highlight">AI-Powered Customer Service Systems</span>, and exploring
              how AI can transform developer productivity and code quality.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h3 className="section-heading-mobile">Experience</h3>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <a
                key={index}
                href={exp.url}
                className="experience-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="exp-period">{exp.period}</div>
                <div className="exp-details">
                  <h4 className="exp-title">
                    {exp.title} · <span className="exp-company">{exp.company}</span>
                    <span className="arrow">↗</span>
                  </h4>
                  <p className="exp-description">{exp.description}</p>
                  <div className="tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a href="https://cv.bkalafat.com" className="view-full-link" target="_blank" rel="noopener noreferrer">
            View Full Résumé <span className="arrow">→</span>
          </a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h3 className="section-heading-mobile">Projects</h3>
          <div className="projects-list">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="project-details">
                  <h4 className="project-title">
                    {project.title}
                    <span className="arrow">↗</span>
                  </h4>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a href="https://github.com/bkalafat" className="view-full-link" target="_blank" rel="noopener noreferrer">
            View Full Project Archive <span className="arrow">→</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            Loosely designed in <span className="highlight">Figma</span> and coded in
            <span className="highlight"> Visual Studio Code</span>. Built with
            <span className="highlight"> React</span> and <span className="highlight">Vite</span>,
            deployed with <span className="highlight">Vercel</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
