import Head from 'next/head';
import styles from './About.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About Bhaskar Singh</title>
            </Head>
            <main className={styles.main}>
                {/* Page Title */}
                <h1 className={styles.title}>About Bhaskar Singh</h1>

                {/* About Me Section */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>About Me</h2>
                    <p className={styles.text}>
                        Hello, I'm Bhaskar Singh. I am a dedicated and goal-oriented individual with a passion for technology and continuous learning. 
                        I have a strong work ethic and a desire to excel in every aspect of my professional journey. Currently, I am seeking opportunities to grow my career in the tech and logistics industry. 
                        I believe in leveraging my skills, knowledge, and experiences to make meaningful contributions to organizations I work with. My focus is on continuous improvement, teamwork, and personal development.
                    </p>
                </section>

                {/* Professional Experience Section */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Professional Experience</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Company</th>
                                <th>Experience</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Amazon Warehouse Associate</td>
                                <td>Amazon</td>
                                <td>1 year (Nov 2023 - Present)</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Skills Section */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Skills</h2>
                    <ul className={styles.list}>
                        <li>HTML, CSS, JavaScript</li>
                        <li>React & Next.js</li>
                        <li>Node.js & Express</li>
                        <li>Version Control (Git/GitHub)</li>
                        <li>Responsive Web Design</li>
                        <li>Teamwork & Collaboration</li>
                    </ul>
                </section>

                {/* Education Section */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Education</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Degree</th>
                                <th>Institution</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>College Diploma</td>
                                <td>Georgian College</td>
                                <td>2023-Present</td>
                            </tr>
                            <tr>
                                <td>High School</td>
                                <td>D.B.M.S</td>
                                <td>2021-2022</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Navigation Buttons */}
                <section className={styles.buttonContainer}>
                    <Link href="/" passHref>
                        <button className={styles.navButton}>Home</button>
                    </Link>
                    <Link href="/portfolio" passHref>
                        <button className={styles.navButton}>Portfolio</button>
                    </Link>
                    <Link href="/blog" passHref>
                        <button className={styles.navButton}>Blog</button>
                    </Link>
                    <Link href="/Contact" passHref>
                        <button className={styles.navButton}>Contact</button>
                    </Link>
                    <Link href="/resume" passHref>
                        <button className={styles.navButton}>Resume</button>
                    </Link>
                    
                </section>
            </main>
        </>
    );
}
