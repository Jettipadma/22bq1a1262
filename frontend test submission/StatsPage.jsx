import React, { useEffect, useState } from 'react';
import URLCard from './URLCard';

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortened') || '[]');
    setData(stored);
  }, []);

  return (
    <div>
      <h3>Shortened URL Statistics</h3>
      {data.map((url, idx) => (
        <URLCard key={idx} url={url} />
      ))}
    </div>
  );
}
