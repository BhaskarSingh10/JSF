import Link from 'next/link';
import styles from './portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.main}>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my API-powered applications:</p>

      <div className={styles.appList}>
        {/* Link to Population Info */}
        <div className={styles.appCard}>
          <img src="/images/p.jpg" alt="Population Info App" className={styles.appImage} />
          <Link href="/portfolio/cocktail">
            <button className={styles.button}>Cocktail</button>
          </Link>
        </div>

        {/* Link to Random Word Generator */}
        <div className={styles.appCard}>
          <img src="/images/R.jpg" alt="Random Word Generator App" className={styles.appImage} />
          <Link href="/portfolio/random">
            <button className={styles.button}>Random Word</button>
          </Link>
        </div>

        {/* Link to Text Similarity Checker */}
        <div className={styles.appCard}>
          <img src="/images/t.jpg" alt="Text Similarity Checker App" className={styles.appImage} />
          <Link href="/portfolio/text">
            <button className={styles.button}>Text Similarity</button>
          </Link>
        </div>
      </div>





      <section className={styles.buttonContainer}>
                    <Link href="/" passHref>
                        <button className={styles.navButton}>Home</button>
                    </Link>
                    <Link href="/about" passHref>
                        <button className={styles.navButton}>About</button>
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
      
    </div>
  );
}
