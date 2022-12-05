type WinstreakTypes = {
  winStreak: number
  highscore: number
}

const WinStreakCounter = ({ winStreak, highscore }: WinstreakTypes) => (
  <div className="winStreakCounter">
    <p>
      Siege in Folge: <span>{winStreak}x</span>
    </p>
    <p>
      Highscore: <span>{highscore}</span>
    </p>
  </div>
)

export default WinStreakCounter
