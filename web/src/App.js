import React, {useEffect, useState} from "react";
import Chessboard from "chessboardjsx";
import './App.css';
import {Chess} from "chess.js";
import {flushSync} from "react-dom";
import gameEngine from "./Stockfish/gameEngine";

function App() {
    const startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const [fen, setFen] = useState(startingFen)
    const [score, setScore] = useState(0)
    const [game] = useState(new Chess(startingFen))
    const chess = gameEngine(game, setFen, setScore);
    useEffect(() => {
        chess.prepareMove()
    }, [])

    function handleMove({sourceSquare, targetSquare, piece}) {
        if (sourceSquare === targetSquare) {
            return;
        }

        let playerMove = {
            from: sourceSquare,
            to: targetSquare
        }

        const isPawn = piece[1] === 'P'
        const isPromotionSquare = targetSquare[1] === '1' || targetSquare[1] === '8'
        if (isPawn && isPromotionSquare) {
            playerMove = {...playerMove, promotion: "q"}
        }
        const move = game.move(playerMove)
        if (move === null) {
            return
        }
        flushSync(() => {
            setFen(game.fen())
        })
        chess.prepareMove()
    }



    return (
        <div className="App">
            <div className="chess-container">
                <h1>Chess App</h1>
                <h2>Score {score}</h2>
                <Chessboard
                    id="chessboard"
                    position={fen}
                    calcWidth={({screenWidth, screenHeight}) => {
                        const spacing = 100
                        return screenWidth > screenHeight ? screenHeight - spacing : screenWidth - spacing
                    }}
                    onDrop={handleMove}
                    orientation="black"
                />
            </div>
        </div>
    );
}

export default App;
