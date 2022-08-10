import React from 'react';
import styles from './styles/about.module.scss';
import aboutImg from './assets/images/me.jpg';

const About = () => {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className={styles.description}>
          <h2>About Me</h2>
          <p>
            Hello! My name is Kristin and I love creating things on the web. I
            first fell in love with web development in 2005, and would rush home
            from school to experiment with HTML and CSS.
          </p>
          <p>
            I graduated with a B.S. in Computer Science from Villanova
            University, then designed and built webpages and emails for Memorial
            Sloan Kettering Cancer Center and The Bowery Mission. To grow my
            technical skills and challenge myself, I attended The Grace Hopper
            Coding Bootcamp. Now, I’m looking to make a difference as a software
            engineer.
          </p>
          <p>
            When I'm not working on personal projects and brushing up on
            algorithms and data structures, you can find me crocheting, reading
            or drinking matcha lattes.
          </p>
        </div>
        <div className={styles.photo}>
          <img src={aboutImg} />
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.column}>
          <h4>Languages</h4>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Tools & Technologies</h4>
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
          <h4>Front End Frameworks</h4>
          <ul>
            <li>styled-components</li>
            <li>React Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
