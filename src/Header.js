import React from 'react';
import styles from './styles/header.module.scss';

const Header = () => {
  return (
    <section id="header" className={styles.headerSection}>
      <p className={styles.overline}>Hi, my name is</p>
      <h1>Kristin Lam</h1>
      <p className={styles.description}>I'm a software engineer</p>
    </section>
  );
};

export default Header;
