import React from 'react';

export default function URLCard({ url }) {
  return (
    <div className="card">
      <p><strong>Original:</strong> {url.original}</p>
      <p><strong>Short:</strong> {url.short}</p>
      <p><strong>Expires In:</strong> {url.expiresIn} minutes</p>
      <p><strong>Total Clicks:</strong> 0 (mock data)</p>
      <p><strong>Clicks:</strong> None yet (for frontend-only demo)</p>
    </div>
  );
}
