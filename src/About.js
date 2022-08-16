import React from 'react';
import styles from './styles/about.module.scss';
import aboutImg from './assets/images/me.jpg';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.aboutRow}>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            <p>
              Hello! My name is Kristin and I love creating things on the web.
            </p>
            <p>
              I graduated with a B.S. in Computer Science from Villanova
              University, then designed and built webpages and emails for{' '}
              <a
                href="https://www.mskcc.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Memorial Sloan Kettering Cancer Center
              </a>{' '}
              and{' '}
              <a
                href="https://www.bowery.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                The Bowery Mission
              </a>
              . Sustainability, mental health, equality and diversity,
              homelessness, and art are causes near and dear to my heart. I
              wanted to build on my technical and problem-solving skills, open
              up opportunities to work on meaningful projects, and grow as a
              programmer. With this in mind, I attended The Grace Hopper Coding
              Bootcamp. Now, I’m looking to make a difference as a software
              engineer.
            </p>
            <p>
              When I'm not in front of a computer screen, you can find me
              crocheting, reading or drinking matcha lattes.
            </p>
          </div>
          <div className={styles.skills}>
            <div className={styles.column}>
              <h6>Languages</h6>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Front End</h6>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>Sass</li>
                <li>CSS Modules</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Back End</h6>
              <ul>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.photo}>
          <img src={aboutImg} />
        </div>
      </div>
    </section>
  );
};

export default About;
