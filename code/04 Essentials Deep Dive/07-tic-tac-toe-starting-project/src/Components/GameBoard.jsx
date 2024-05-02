import { useState } from "react"



export default function GameBoard({onPlayerInput, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);



    // function handlePlayerInput(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            
    //         updatedBoard[rowIndex][colIndex] = activePlayersymbol;
    //         return updatedBoard;
    //     })
    //     onPlayerInput();
    // }

    return <ol id = "game-board">
        {board.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key = {colIndex}>
                    <button disabled = {playerSymbol !== null ? true : false} onClick = {() => onPlayerInput(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
    </ol>
}