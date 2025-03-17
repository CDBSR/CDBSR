import React from 'react'
import '../styles/Projects.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart functionality, and payment processing.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://ecommerce-app.yourdomain.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application that allows users to create, organize, and track tasks across different stages of completion.",
      tech: ["React", "Redux", "Firebase", "Material UI"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-app.yourdomain.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that provides current weather conditions and forecasts for cities worldwide using the OpenWeather API.",
      tech: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app.yourdomain.com"
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "A responsive blog website with features like article categorization, comments, user authentication, and rich text editing.",
      tech: ["Next.js", "TypeScript", "Contentful CMS", "Tailwind CSS"],
      github: "https://github.com/yourusername/blog",
      live: "https://blog.yourdomain.com"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A mobile-responsive fitness application that allows users to track workouts, set goals, and view progress through interactive charts.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitness-app.yourdomain.com"
    },
    {
      id: 6,
      title: "Movie Database",
      description: "A movie database application that allows users to search for movies, view details, and save favorites using the TMDB API.",
      tech: ["React", "Redux", "TMDB API", "Styled Components"],
      github: "https://github.com/yourusername/movie-database",
      live: "https://movie-app.yourdomain.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project
