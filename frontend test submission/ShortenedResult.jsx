import React from 'react';

export default function ShortenedResult({ results }) {
  if (results.length === 0) return null;

  return (
    <div>
      <h3>Shortened Links</h3>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            <b>{r.original}</b> → <a href={`https://${r.short}`} target="_blank">{r.short}</a>
            {` (valid for ${r.expiresIn} mins)`}
          </li>
        ))}
      </ul>
    </div>
  );
}
