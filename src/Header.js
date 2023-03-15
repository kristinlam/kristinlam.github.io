import { motion } from 'framer-motion';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';
import background from './assets/images/background.jpg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
};

const variant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      type: 'easeInOut',
      duration: 0.6,
    },
  },
};

const Header = () => {
  return (
    <header id="header" className={styles.header} style={backgroundStyle}>
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        className={styles.navbar}
      >
        <Navbar />
      </motion.div>

      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        className={styles.text}
      >
        <h1>
          <span>Hi, I'm </span>Kristin Lam.
          <span> A</span> software engineer
          <span> based in </span>New York.
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
