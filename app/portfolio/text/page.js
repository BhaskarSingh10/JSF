"use client";

import { useState } from 'react';
import styles from './text.module.css';

const TextSimilarity = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [similarity, setSimilarity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch text similarity from API Ninjas
  const fetchSimilarity = async () => {
    setLoading(true);
    setError(null);  // Reset any previous errors
    setSimilarity(null);  // Reset similarity score

    try {
      const response = await fetch('https://api.api-ninjas.com/v1/textsimilarity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'lavLwdmcZlYmhYRW20UjJgqBHYZVWGankOQL9tSs',
        },
        body: JSON.stringify({
          text_1: text1,
          text_2: text2,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch similarity data: ${errorText}`);
      }

      const data = await response.json();
      console.log(data); // Log the data for debugging

      setSimilarity(data.similarity);  // Set similarity score
    } catch (err) {
      setError(err.message);  // Set error message if the API call fails
      console.error("Error fetching similarity data:", err);
    } finally {
      setLoading(false);  // Set loading to false once data is fetched
    }
  };

  return (
    <div className={styles.container}>
      <h1>Text Similarity Checker</h1>

      {/* Input fields for text1 and text2 */}
      <div className={styles.inputContainer}>
        <label htmlFor="text1">Enter First Text:</label>
        <textarea
          id="text1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}  // Update text1 on input change
          placeholder="Enter first text"
          rows="4"
          className={styles.textarea}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="text2">Enter Second Text:</label>
        <textarea
          id="text2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}  // Update text2 on input change
          placeholder="Enter second text"
          rows="4"
          className={styles.textarea}
        />
      </div>

      {/* Button to fetch similarity */}
      <button onClick={fetchSimilarity} className={styles.button}>
        Check Similarity
      </button>

      {/* Display loading message */}
      {loading && <p className={styles.loading}>Checking similarity...</p>}

      {/* Display error message */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Display similarity score */}
      {similarity !== null && !loading && (
        <div className={styles.similarityContainer}>
          <h2>Similarity Score:</h2>
          <p>{similarity}</p>
        </div>
      )}

      {/* Display message if no similarity score is available */}
      {!similarity && !loading && !error && <p>Enter two texts to check their similarity.</p>}
    </div>
  );
};

export default TextSimilarity;
