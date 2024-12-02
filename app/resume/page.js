import styles from './resume.module.css';

const ResumePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>John Doe</h1>
        <p>Frontend Developer | JavaScript Enthusiast | Creative Problem Solver</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            Experienced Frontend Developer with a passion for building responsive and accessible web applications.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Work Experience</h2>
          <ul className={styles.list}>
            <li>
              <strong>Frontend Developer</strong> - ABC Company (2020 - Present)
              <p>Developed and maintained web applications using React and TypeScript.</p>
            </li>
            <li>
              <strong>Web Developer Intern</strong> - XYZ Inc. (2019 - 2020)
              <p>Assisted in creating interactive UI components and fixing bugs in legacy code.</p>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Education</h2>
          <p>Bachelor&#39;s in Computer Science - University of Tech (2016 - 2020)</p>
        </section>
        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.list}>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Git, Webpack, Node.js</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ResumePage;
