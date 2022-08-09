import React from 'react';
import projects from './assets/projects';
import styles from './styles/projects.module.scss';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <div>
              <h3>
                0{project.id}. {project.title}
              </h3>
              <img
                alt="project"
                src={require(`./assets/images/${project.image}`)}
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.description}>
                {project.description.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </div>

              <p className={styles.tech}>{project.tech}</p>
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                view the project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
