import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {start ? (
        <Board />
      ) : (
        <div className="menu ">
          <div
            className="start text-white fw-bold display-1"
            onClick={() => setStart(!start)}
          >
            Start the game
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
