import { useState } from 'react'
import pathwayImg from '../assets/Pathway.png'
import rentechImg from '../assets/Rentech.png'
import gigLocalImg from '../assets/GigLocal.png'
import ailImg from '../assets/aiImg.png'

const projects = [
  {
    title: 'PATHWAY: Career Alignment Monitoring System',
    role: 'Contributor',
    description:
      'A web-based recruitment system that helps employers manage job postings, track applicants, and analyze skills demand through an intuitive dashboard.',
    tags: ['Laravel', 'PHP', 'Vue.js', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'Echarts.js', 'Full-Stack Development', 'Recruitment System', 
    'Job Posting Management', 'Applicant Tracking', 'Skills Demand Analysis'
    ],
    image: pathwayImg,
    codeUrl:'https://github.com/j4yre25/pathwayph.com',
    demoUrl: 'https://pathwayph.com/',
  },
  {
    title: 'Rentech: Smart Rental Platform',
    role: 'Contributor',
    description:
      'A modern platform that connects people to rent and offer items easily within their community.',
    tags: ['Vue.js', 'Laravel', 'Rental System', 'Tailwind CSS', 'MySQL', 'Full-Stack Development', 'Community Sharing', 'Item Rental', 'User-Friendly Interface'],
    image: rentechImg,
    codeUrl: 'https://github.com/j4yre25/rentech',
  },
  {
    title: 'GigLocal',
    role: 'Personal Project',
    description:
      'A hyperlocal platform that connects people with nearby service providers for quick, on-demand tasks and freelance work.',
    tags: [
      'Laravel', 'Vue.js', 'PHP','Tailwind CSS','Inertia.js', 'MySQL', 'Responsive Design','Hyperlocal Services',
      'On-Demand Platform', 'Freelance Marketplace', 'Service Booking', 'Local Gigs',
    ],
    image: gigLocalImg,
    codeUrl: 'https://github.com/XE-front/giglocal',
  },
  {
    title: 'AI Resume Analyzer',
    role: 'Personal Project',
    description:
      'A full-stack web application that analyzes resumes using AI and provides users with actionable feedback, score trends, and a history dashboard',
    tags: [
      'Laravel', 'React', 'PHP', 'Typescript', 'Vite', 'Tailwind CSS','Inertia.js', 'MySQL', 'Artificial Intelligence', 'Resume Analysis', 
      'Feedback System', 'Score Trends', 'Web Application',
    ],
    image: ailImg,
    codeUrl: 'https://github.com/XE-front/ai-resume-analyzer',
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  const handlePrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    )
  }

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handleSelectProject = (index) => {
    setCurrentIndex(index)
  }

  const handleCloseModal = () => {
    setActiveProject(null)
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-carousel">
          <button
            className="project-nav project-nav-prev"
            type="button"
            onClick={handlePrevProject}
            aria-label="Show previous project"
          >
            <span className="project-nav-icon" aria-hidden="true">
              ‹
            </span>
          </button>

          <article
            className="project-card project-card-clickable project-slide"
            key={currentProject.title}
            onClick={() => setActiveProject(currentProject)}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${currentProject.title}`}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setActiveProject(currentProject)
              }
            }}
          >
            <div className="project-media" aria-hidden="true">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="project-image"
              />
            </div>
            <div className="project-body">
              <h3>
                {currentProject.title}
                {currentProject.role && (
                  <span className="project-label">{currentProject.role}</span>
                )}
              </h3>
              <p>{currentProject.description}</p>
              <div className="project-tags">
                {currentProject.tags.slice(0, 6).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
                {currentProject.tags.length > 6 && <span>...</span>}
              </div>
              <div className="project-links">
                {currentProject.codeUrl && (
                  <a
                    className="link-button"
                    href={currentProject.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Code
                  </a>
                )}
                {currentProject.demoUrl && (
                  <a
                    className="link-button"
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>

          <button
            className="project-nav project-nav-next"
            type="button"
            onClick={handleNextProject}
            aria-label="Show next project"
          >
            <span className="project-nav-icon" aria-hidden="true">
              ›
            </span>
          </button>
        </div>
        <div className="project-indicators" aria-label="Project carousel indicators">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-indicator ${
                index === currentIndex ? 'project-indicator-active' : ''
              }`}
              onClick={() => handleSelectProject(index)}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <button
            className="project-modal-backdrop"
            type="button"
            aria-label="Close project details"
            onClick={handleCloseModal}
          />
          <div
            className="project-modal-card"
            role="document"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="project-modal-media">
              <img src={activeProject.image} alt={activeProject.title} />
            </div>
            <div className="project-modal-body">
              <h3>
                {activeProject.title}
                {activeProject.role && (
                  <span className="project-label">{activeProject.role}</span>
                )}
              </h3>
              <p>{activeProject.description}</p>
              <div className="project-modal-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {activeProject.codeUrl && (
                  <a
                    className="link-button"
                    href={activeProject.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
                {activeProject.demoUrl && (
                  <a
                    className="link-button"
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
