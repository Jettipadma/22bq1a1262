import React, { useState } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [expiry, setExpiry] = useState("");
  const [urls, setUrls] = useState([]);

  const handleShorten = () => {
    if (urls.length >= 5) {
      alert("Only 5 URLs allowed!");
      return;
    }
    const short = {
      original: url,
      short: `short.ly/${customCode || Math.random().toString(36).slice(6)}`,
      expiry,
    };
    setUrls([...urls, short]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom Code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Validity (optional)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>

      <ul>
        {urls.map((u, i) => (
          <li key={i}>
            <strong>{u.original}</strong> → <a href="#">{u.short}</a>
            {u.expiry && <span> (valid till {u.expiry})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
