"use client";

import { useEffect, useState } from 'react';
import styles from './random.module.css';

const RandomWord = () => {
  const [randomWord, setRandomWord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch a random word from the API Ninjas
  const fetchRandomWord = async () => {
    setLoading(true); // Set loading to true
    setError(null); // Reset any previous errors

    try {
      const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
        headers: {
          'X-Api-Key': 'lavLwdmcZlYmhYRW20UjJgqBHYZVWGankOQL9tSs',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch random word');
      }

      const data = await response.json();
      console.log(data);  // Log data for debugging

      setRandomWord(data.word); // Set the random word to state
    } catch (err) {
      setError(err.message); // Set error message if the API call fails
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Fetch random word when component mounts
  useEffect(() => {
    fetchRandomWord();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className={styles.container}>
      <h1>Random Word Generator</h1>

      {/* Display loading message */}
      {loading && <p className={styles.loading}>Fetching a random word...</p>}

      {/* Display error message */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Display the random word */}
      {randomWord && !loading && (
        <div className={styles.wordContainer}>
          <h2>Random Word:</h2>
          <p>{randomWord}</p>
          <button onClick={fetchRandomWord} className={styles.button}>
            Get Another Word
          </button>
        </div>
      )}

      {/* Display message if no word is found */}
      {!randomWord && !loading && !error && <p>No word available. Please try again later.</p>}
    </div>
  );
};

export default RandomWord;
