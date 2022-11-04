const GameOver = () => (
    <div className="gameOver">
        <p>Game Over!</p>
        <button onClick={() => window.open("/","_self")}>Play again!</button>
    </div>
)

export default GameOver