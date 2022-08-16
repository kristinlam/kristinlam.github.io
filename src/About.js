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
              Hello! My name is Kristin and I love creating things on the web. I
              first fell in love with web development in 2005, and would rush
              home from school to experiment with HTML and CSS.
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
              . To grow my technical skills and challenge myself, I attended The
              Grace Hopper Coding Bootcamp. Now, I’m looking to make a
              difference as a software engineer.
            </p>
            <p>
              When I'm not working on personal projects and brushing up on
              algorithms and data structures, you can find me crocheting,
              reading or drinking matcha lattes.
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
              <h6>Tools & Technologies</h6>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Express.js</li>
                <li>Sequelize.js</li>
                <li>PostgreSQL</li>
                <li>React Native</li>
                <li>Git & Github</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Front End Frameworks</h6>
              <ul>
                <li>styled-components</li>
                <li>React Bootstrap</li>
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
