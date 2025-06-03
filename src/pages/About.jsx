import React from "react";
import styles from "../styles/about.module.css";
import profileImg from "../assets/profile.jpg";

const AboutMe = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <div className={styles.about_card}>
          <div className={styles.about_image}>
            <img src={profileImg} alt="Profile" className={styles.profile_pic} />
          </div>
          <div className={styles.about_content}>
            <h1>
              Hi, I'm <span className={styles.highlight}>Sandeep</span> 👋
            </h1>
            <p className={styles.intro}>
              I'm a final-year BCS student passionate about building web applications, learning new technologies, and solving
              real-world problems with code.
            </p>
            <p>
              I enjoy working with <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and other
              modern web tools. My goal is to become a full-stack developer and contribute to impactful tech projects.
            </p>
            <p>
              Outside of coding, I love reading tech blogs, exploring open-source projects, and mentoring juniors in web
              development.
            </p>
            <a href="/resume.pdf" className={styles.btn} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
