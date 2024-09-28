import React, { useState } from "react";

function App() {
  const [times, getclock] = useState("TIME");
  function getTime() {
    getclock(new Date().toLocaleTimeString());
    setInterval(getTime, 1000);
  }
  return (
    <div className="container">
      <h1>{times}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
