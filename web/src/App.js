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
                        const spacing = 100
                        const size = screenSize.screenWidth > screenSize.screenHeight ? screenSize.screenHeight - spacing : screenSize.screenWidth  -spacing
                        return size
                    }}
                />
            </div>
        </div>
    );
}

export default App;
