type StartGameProps = {
    handleStart: () => void
}

const StartGame = ({handleStart}: StartGameProps): JSX.Element => {
    return (
      <div className="startGame">
        <h1>Hangman</h1>
        <button onClick={handleStart}>Spiel starten</button>
      </div>
    )
}

export default StartGame
