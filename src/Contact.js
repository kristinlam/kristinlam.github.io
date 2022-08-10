import React from 'react';
import styles from './styles/contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.heading}>
        <h1>Get in touch</h1>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.cta}>
          <p>
            Whether you're looking to work together, have questions about coding
            bootcamps, or just want to say hi, I'd love to hear from you.
          </p>
        </div>
        <hr />
        <div className={styles.socialLinks}>
          <div>
            <h4>Social Media</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/kristin-lam/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kristinlam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/klamtaro/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Email</h4>
            <ul>
              <li>
                <a href="mailto:klam623@gmail.com">klam623@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
