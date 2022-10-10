import React, {useState} from "react";
import Chessboard from "chessboardjsx";
import './App.css';
import {Chess} from "chess.js";
import StockfishIntegration from "./StockfishIntegration";
function App() {
    const startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const [fen, setFen] = useState(startingFen)
    const [game] = useState(new Chess(startingFen))

    function handleMove(move) {
        const isPawn = game.get(move.from).type === 'p'
        const isPromotionSquare = move.to[1] === '1' || move.to[1] === '8'
        if(isPawn && isPromotionSquare){
            move = {...move, promotion: "q"}
        }
        if(!game.move(move)) {
            return
        }
        setFen(game.fen())
    }


    return (
        <div className="App">
            <div className="chess-container">
                <h1>Chess App</h1>
                <StockfishIntegration>
                    {({ position, onDrop }) => (
                        <Chessboard
                            id="stockfish"
                            position={position}
                            width={320}
                            onDrop={onDrop}
                            orientation="black"
                        />
                    )}
                </StockfishIntegration>
            </div>
        </div>
    );
}

export default App;
