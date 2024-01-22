// src/App.tsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState<string | null>(null);
  const handleResponse = (answer: string) => {
    setResponse(answer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi Stuti, Will You Go Out On a Date With Me? I bring flowers</h1>
        {response ? (
          <p>
            {response === "yes"
              ? "Great! 🎉 See you this weekend bbg :*"
              : "Maybe next time 😔"}
          </p>
        ) : (
          <div>
            <button className="yes" onClick={() => handleResponse("yes")}>
              Yes
            </button>
            <button
              className="no"
              disabled={true}
              onClick={() => {
                handleResponse("no");
              }}
            >
              No
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
