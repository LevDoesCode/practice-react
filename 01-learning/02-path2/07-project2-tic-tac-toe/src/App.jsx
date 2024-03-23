import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combos";
import GameOver from "./components/GameOver";

const startSymbol = null;
const initialGameBoard = [
    [startSymbol, startSymbol, startSymbol],
    [startSymbol, startSymbol, startSymbol],
    [startSymbol, startSymbol, startSymbol],
];

function getActivePlayer(gameTurns) {
    if (gameTurns.length === 0) {
        return "X";
    }

    return gameTurns[0].player === "X" ? "O" : "X";
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState({
        X: "Player 1",
        O: "Player 2",
    });

    const activePlayer = getActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
            break;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = getActivePlayer(prevTurns);
            return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
