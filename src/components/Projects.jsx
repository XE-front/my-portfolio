import pathwayImg from '../assets/Pathway.png'
import rentechImg from '../assets/Rentech.png'
import gigLocalImg from '../assets/GigLocal.png'

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
      'Laravel', 'Vue.js', 'Tailwind CSS','Inertia.js', 'MySQL', 'Responsive Design','Hyperlocal Services',
      'On-Demand Platform', 'Freelance Marketplace', 'Service Booking', 'Local Gigs',
    ],
    image: gigLocalImg,
    codeUrl: 'https://github.com/XE-front/giglocal',
  },
]

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media" aria-hidden="true">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-body">
                <h3>
                  {project.title}
                  {project.role && <span className="project-label">{project.role}</span>}
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {project.tags.length > 6 && <span>...</span>}
                </div>
                <div className="project-links">
                  {project.codeUrl && (
                    <a
                      className="link-button"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      className="link-button"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
