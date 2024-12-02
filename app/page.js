'use client'; // Mark the page as a Client Component

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav'; // Import the Nav component

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Nav /> 

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Project</h1>
        <p className={styles.description}>
          Made by Bhaskar Singh
        </p>
      </main>
    </div>
  );
}
