import Head from 'next/head';
import styles from './contact.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Bhaskar Singh</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Get in Touch</h1>

                {/* Contact Form */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Contact Form</h2>
                    <form
                        className={styles.contactForm}
                        action="https://formspree.io/f/your-form-id" // Replace with your Formspree endpoint
                        method="POST"
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Full Name"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Contact Details */}
                <section className={styles.section}>
                    <h2 className={styles.subtitle}>Contact Information</h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:bhaskar.singh@gmail.com">
                                bhaskar.singh@gmail.com
                            </a>
                        </div>
                        <div className={styles.infoItem}>
                            <strong>Phone:</strong>{' '}
                            <a href="tel:6475523510">647-552-3510</a>
                        </div>
                        <div className={styles.infoItem}>
                            <strong>Address:</strong> <br />
                            60 Centre St S, <br />
                            Brampton, ON L6W 2X8, <br />
                            Canada
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
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
                    <Link href="/about" passHref>
                        <button className={styles.navButton}>About</button>
                    </Link>
                    <Link href="/resume" passHref>
                        <button className={styles.navButton}>Resume</button>
                    </Link>
                </section>
            </main>
        </>
    );
}
