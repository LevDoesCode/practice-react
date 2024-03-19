import { useState } from "react";

const startSymbol = null;
const initialGameBoard = [
    [startSymbol, startSymbol, startSymbol],
    [startSymbol, startSymbol, startSymbol],
    [startSymbol, startSymbol, startSymbol],
];

export default function GameBoard({ onSelectSquare, turns }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         // const newGameBoard = prevGameBoard.map((row) => [...row]);
    //         const newGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // }

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button> */}
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
