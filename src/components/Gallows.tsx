type GallowsProps = {
  tries: number
  gameOver: boolean
  victory: boolean
}

const Gallows = ({ tries, gameOver, victory }: GallowsProps): JSX.Element => {
  const bodyParts: string[] = gameOver
    ? [
        "head",
        "body",
        "left_arm",
        "right_arm",
        "left_leg",
        "right_leg",
        "ropeGO",
      ]
    : ["head", "body", "left_arm", "right_arm", "left_leg", "right_leg"]
  const gallowsParts: string[] = gameOver
    ? ["base", "beam", "top"]
    : ["base", "beam", "top", "rope"]

  const getGallows = () =>
    gallowsParts.map(part => <div key={part} className={part}></div>)

  const getHangman = () =>
    bodyParts
      .reverse()
      .slice(tries)
      .map(part => <div key={part} className={`${part} tries-${tries}`}></div>)

  const getSavedHangman = () =>
    bodyParts
      .reverse()
      .map(part => <div key={part} className={`${part}`}></div>)

  return (
    <div className={victory ? "gallows victory" : "gallows"}>
      {getGallows()}
      <div className={gameOver ? "hangman swinging" : "hangman"}>
        {victory ? getSavedHangman() : getHangman()}
      </div>
    </div>
  )
}

export default Gallows
