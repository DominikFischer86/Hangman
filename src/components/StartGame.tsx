type StartGameProps = {
    handleStart: () => void
}

const StartGame = ({handleStart}: StartGameProps): JSX.Element => {
    return (
      <div className="startGame">
        <h1>Hangman</h1>
        <button onClick={handleStart}>Start Game</button>
      </div>
    )
  }

  export default StartGame