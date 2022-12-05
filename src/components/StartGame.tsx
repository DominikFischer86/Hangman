import WinStreakCounter from "../components/WinStreakCounter"

type StartGameProps = {
  handleStart: () => void
  winStreak: number
  highscore: number
}

const StartGame = ({
  handleStart,
  winStreak,
  highscore,
}: StartGameProps): JSX.Element => {
  return (
    <div className="startGame">
      <div>
        <h1>Hangman</h1>
        <WinStreakCounter winStreak={winStreak} highscore={highscore} />
      </div>
      <button onClick={handleStart}>Spiel starten</button>
    </div>
  )
}

export default StartGame
