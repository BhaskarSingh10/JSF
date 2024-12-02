import Head from 'next/head';
import Link from 'next/link';  // Import Link from next/link
import styles from './blog.module.css';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Technology Insights</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Technology Blog</h1>
        <div className={styles.blogContainer}>
          {/* Article 1 */}
          <article className={styles.article}>
            <img
              src="/images/Blog3.jpg"
              alt="TechCrunch logo"
              className={styles.articleImage}
            />
            <h2>TechCrunch: Breaking News on Startups</h2>
            <p>
              Renowned for breaking tech news, TechCrunch covers innovative tech
              products, emerging startups, and Silicon Valley updates.
            </p>
            <a
              href="https://medium.com/@bhaskarsandhu7612/techcrunch-known-for-breaking-news-on-startups-innovative-tech-products-and-silicon-valley-fc335f84aaa0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </a>
          </article>

          {/* Article 2 */}
          <article className={styles.article}>
            <img
              src="/images/Blog2.jpg"
              alt="The Verge logo"
              className={styles.articleImage}
            />
            <h2>The Verge: A Broad Perspective on Technology</h2>
            <p>
              The Verge blends consumer gadget reviews with features on how
              technology intersects with culture, politics, and society.
            </p>
            <a
              href="https://medium.com/@bhaskarsandhu7612/the-verge-this-blog-offers-a-broad-perspective-on-technology-blending-consumer-gadget-reviews-065a9b0a43b7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </a>
          </article>

          {/* Article 3 */}
          <article className={styles.article}>
            <img
              src="/images/Blog1.jpg"
              alt="MIT Technology Review logo"
              className={styles.articleImage}
            />
            <h2>MIT Technology Review: Academic Perspectives</h2>
            <p>
              Delve into rigorous analysis and reporting on cutting-edge
              technologies and their societal impacts with MIT Technology
              Review.
            </p>
            <a
              href="https://medium.com/@bhaskarsandhu7612/mit-technology-review-for-those-seeking-a-more-academic-take-this-site-provides-rigorous-analysis-219ebb4b629f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </a>
          </article>
        </div>

        <section className={styles.buttonContainer}>
                    <Link href="/" passHref>
                        <button className={styles.navButton}>Home</button>
                    </Link>
                    <Link href="/portfolio" passHref>
                        <button className={styles.navButton}>Portfolio</button>
                    </Link>
                    <Link href="/about" passHref>
                        <button className={styles.navButton}>About</button>
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
