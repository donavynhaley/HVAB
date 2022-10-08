import React from "react";
import Chessboard from "chessboardjsx";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="chess-container">
                <h1>Chess App</h1>
                <Chessboard
                    position={"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"}
                    calcWidth={(screenSize) => {
                        const spacing = 200
                        const ratio = (screenSize.screenHeight - spacing) / (screenSize.screenWidth - spacing)
                        console.log(ratio)
                        return screenSize.screenWidth * ratio
                    }}
                />
            </div>
        </div>
    );
}

export default App;
