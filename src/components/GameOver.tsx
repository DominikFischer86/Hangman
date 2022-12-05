const GameOver = ({ handleNewGame }: any) => (
  <div className="gameOver">
    <p>Game Over!</p>
    <button onClick={() => handleNewGame("loss")}>Nochmal probieren!</button>
  </div>
)

export default GameOver
