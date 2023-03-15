import { motion } from 'framer-motion';
import projects from './assets/projects';
import styles from './styles/projects.module.scss';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              viewport={{ once: true }}
              className={styles.projectContent}
            >
              <div className={styles.imgContainer}>
                <img
                  alt="project"
                  src={require(`./assets/images/${project.image}`)}
                />
              </div>
              <div className={styles.projectInfo}>
                <h4>{project.title}</h4>
                <div className={styles.description}>
                  {project.description.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))}
                </div>

                <p className={styles.tech}>{project.tech}</p>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View the project
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
