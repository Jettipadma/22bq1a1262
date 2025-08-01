import React from "react";

const dummyStats = [
  {
    original: "https://example.com",
    short: "short.ly/abc123",
    clicks: 12,
    location: "India",
    timestamp: "2025-08-01 10:35",
  },
];

export default function Stats() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Original</th>
          <th>Shortened</th>
          <th>Clicks</th>
          <th>Location</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {dummyStats.map((s, i) => (
          <tr key={i}>
            <td>{s.original}</td>
            <td>{s.short}</td>
            <td>{s.clicks}</td>
            <td>{s.location}</td>
            <td>{s.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
