import React from 'react';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.row1}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Kristin Lam</h1>
          <div className={styles.description}>
            <p>Fullstack software engineer.</p>
            <p>Born and living in New York City.</p>
            <p>Raised by the 90's.</p>
          </div>
        </div>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.textContainer}>
          <h1 className={styles.role}>Software Engineer</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
