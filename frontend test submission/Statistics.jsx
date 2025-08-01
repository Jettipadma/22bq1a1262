import React from "react";
import Stats from "./Stats"; // ✅ Corrected path


export default function Statistics() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 URL Statistics</h2>
      <Stats />
    </div>
  );
}
