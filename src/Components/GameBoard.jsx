export default function GameBoard({ handlePlayerActive, gameTurns }) {
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  gameTurns.forEach((element) => {
    const {
      square: { row, col },
      player,
    } = element;
    
    gameBoard[row][col] = player;
  });
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleBoardClick(row, col) {
  //   setGameBoard((previousGameBoard) => {
  //     const updatedBoard = [
  //       ...previousGameBoard.map((element) => [...element])
  //     ];
  //     updatedBoard[row][col] = activePlayer;
  //     console.log(activePlayer);

  //     return updatedBoard;
  //   });

  //   handlePlayerActive()

  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((gameCell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handlePlayerActive(rowIndex, colIndex)}>
                  {gameCell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>

    // <ol id="game-board">
    //   {initialGameBoard.map((row) => (
    //     <li>
    //       <ol>
    //         {row.map((playerSymbol) => (
    //           <li>
    //             <button>{playerSymbol}</button>
    //           </li>
    //         ))}
    //       </ol>
    //     </li>
    //   ))}
    // </ol>
  );
}
