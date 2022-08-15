import React from 'react';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';
import background from './assets/images/background-4.jpg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
};

const Header = () => {
  return (
    <header id="header" className={styles.header} style={backgroundStyle}>
      <div className={styles.content}>
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
      </div>

      {/* <div className={styles.wave}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path d="M-314,267 C105,364 400,100 812,279" stroke-linecap="round" />
        </svg>
      </div> */}

      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
