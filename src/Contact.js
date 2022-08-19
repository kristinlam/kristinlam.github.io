import React from 'react';
import styles from './styles/contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.content}>
        <h1>
          <span>Let's</span> connect
        </h1>
        <div className={styles.contactInfo}>
          <div className={styles.cta}>
            <p>
              Whether you're looking to work together, have questions about
              coding bootcamps, or just want to say hi, I'd love to hear from
              you.
            </p>
          </div>
          <div className={styles.socialLinks}>
            <div>
              <h6>Social Media</h6>
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
              <h6>Email</h6>
              <ul>
                <li>
                  <a href="mailto:klam623@gmail.com">klam623@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
