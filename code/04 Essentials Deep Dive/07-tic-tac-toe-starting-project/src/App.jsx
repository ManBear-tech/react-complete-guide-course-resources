import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"
import {WINNING_COMBINATIONS} from "./winning-combinations"
import GameOver from "./Components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let winner;

  let gameBoard = [...initialGameBoard.map(item => [...item])];

  for(const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      winner = firstSquareSymbol;
    }
  }

  const draw = (gameTurns.length >= 9 && !winner)

  function deriveActivePlayer(gameTurns) {

    let currentPlayer = 'X';

    if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
  }
  let currentPlayer = deriveActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square : {row : rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      return updatedTurns;
    })
  }

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className = "highlight-player">
          <Player playerName = "Player 1" playerSymbol = "X" isActive={currentPlayer === 'X'}/>
          <Player playerName = "Player 2" playerSymbol = "O" isActive={currentPlayer === 'O'}/>
        </ol>
        {(winner || draw) && <GameOver winner = {winner} onRestart = {handleRematch}/>}
        <GameBoard onPlayerInput={handleActivePlayer} turns = {gameTurns} board = {gameBoard} />
        </div>
        <Log turns = {gameTurns}/>
    </main>

  )
}

export default App
