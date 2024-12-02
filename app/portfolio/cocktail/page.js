"use client";

import { useState } from 'react';

export default function CocktailPage() {
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCocktails = async () => {
    if (!search) {
      setError('Please enter a cocktail name or ingredient.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/cocktail?name=${search}`,
        {
          headers: {
            'X-Api-Key': 'lavLwdmcZlYmhYRW20UjJgqBHYZVWGankOQL9tSs',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch cocktails');
      }
      const data = await response.json();
      setCocktails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cocktail Finder</h1>
      <input
        type="text"
        placeholder="Enter cocktail name or ingredient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={fetchCocktails} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {cocktails.map((cocktail, index) => (
          <div key={index} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc' }}>
            <h2>{cocktail.name}</h2>
            <p><strong>Ingredients:</strong> {cocktail.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {cocktail.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
