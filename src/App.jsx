import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerActive(rowIndex, colIndex) {
    setActivePlayer((active) => (active === "X" ? "O" : "X"));
    setGameTurns((gameTurns) => {
      let currentPlayer =
        gameTurns.length != 0 && gameTurns[0].player === "X" ? "O" : "X";

      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...gameTurns,
      ];

      return updatedGameTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X" ? "active" : undefined}
          />
          <Player
            initialName="Player 2"
            symbol="0"
            isActive={activePlayer === "O" ? "active" : undefined}
          />
        </ol>
        <GameBoard
          handlePlayerActive={handlePlayerActive}
          gameTurns = {gameTurns}
        />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
