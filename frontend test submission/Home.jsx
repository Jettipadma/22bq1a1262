import React from "react";
import UrlShortener from "./UrlShortener"; // ✅ Corrected path


export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔗 URL Shortener</h2>
      <UrlShortener />
    </div>
  );
}
