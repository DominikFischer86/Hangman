type WordProps = {
  word: string
  guessedLetters: string[]
  gameOver: boolean
  victory: boolean
}

const Word = ({
  word,
  guessedLetters,
  gameOver,
  victory,
}: WordProps): JSX.Element => {
  const wordArray: string[] = Array.from(word)

  const wordToGuess = wordArray.map(
    (letter: string, i: number): JSX.Element => {
      const letterFound: boolean = guessedLetters.includes(letter) || gameOver

      return (
        <span
          key={i}
          className={letterFound ? "blanks visibleLetter" : "blanks"}
        >
          {letterFound && (
            <span
              className={
                gameOver ? "letter red" : victory ? "letter green" : "letter"
              }
            >
              {letter}
            </span>
          )}
        </span>
      )
    }
  )

  return (
    <div>
      <div className="word">{wordToGuess}</div>
    </div>
  )
}

export default Word
