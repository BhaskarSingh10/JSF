// components/Nav.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/portfolio">Portfolio</Link></li>
        <li className={styles.navItem}><Link href="/Contact">Contact</Link></li> 
        <li className={styles.navItem}><Link href="/blog">Blog</Link></li>
        <li className={styles.navItem}><Link href="/resume">Resume</Link></li>

      </ul>
    </nav>
  );
}
