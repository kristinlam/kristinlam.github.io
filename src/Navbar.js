import React from 'react';
import styles from './styles/navbar.module.scss';

const Navbar = () => {
  return (
    <nav id="navigation" className={styles.navbarSection}>
      <p>logo</p>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
