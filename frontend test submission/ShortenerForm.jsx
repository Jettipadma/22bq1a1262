import React, { useState } from 'react';
import ShortenedResult from './ShortenedResult';

export default function ShortenerForm() {
  const [urls, setUrls] = useState([{ original: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addInput = () => {
    if (urls.length < 5) {
      setUrls([...urls, { original: '', validity: '', shortcode: '' }]);
    }
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleShorten = () => {
    const validInputs = urls.filter(u => isValidURL(u.original));
    // Simulated backend API call
    const output = validInputs.map((u, idx) => ({
      original: u.original,
      short: u.shortcode || `affmd.ly/${Math.random().toString(36).substr(2, 5)}`,
      expiresIn: u.validity || '∞',
    }));
    setResults(output);
    // Save to localStorage/session for statistics
    const existing = JSON.parse(localStorage.getItem('shortened') || '[]');
    localStorage.setItem('shortened', JSON.stringify([...existing, ...output]));
  };

  return (
    <div>
      {urls.map((url, index) => (
        <div key={index}>
          <input
            placeholder="Original URL"
            value={url.original}
            onChange={e => handleChange(index, 'original', e.target.value)}
          />
          <input
            placeholder="Validity (minutes)"
            value={url.validity}
            type="number"
            onChange={e => handleChange(index, 'validity', e.target.value)}
          />
          <input
            placeholder="Preferred shortcode (optional)"
            value={url.shortcode}
            onChange={e => handleChange(index, 'shortcode', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addInput}>Add URL</button>
      <button onClick={handleShorten}>Shorten</button>
      <ShortenedResult results={results} />
    </div>
  );
}
