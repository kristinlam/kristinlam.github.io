import React from 'react';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';
import background from './assets/images/background-1.jpg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
};

const Header = () => {
  return (
    <header id="header" className={styles.header} style={backgroundStyle}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.text}>
        <h1>
          <span>Hi, my name is</span>
          <br />
          Kristin Lam.
        </h1>
        <h1>
          <span>I'm a </span>software engineer <span>based in </span>New York.
        </h1>
      </div>
    </header>
  );
};

export default Header;
