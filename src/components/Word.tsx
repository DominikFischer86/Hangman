type WordProps = {
    word: string
    guessedLetters: string[]
    gameOver: boolean
}

const Word = ({word, guessedLetters, gameOver}: WordProps): JSX.Element => {
    const wordArray : string[] = Array.from(word)

    const wordToGuess = wordArray.map(
        (letter: string, i: number): JSX.Element => {
          return (
            <span key={i} className="blanks">
              <span 
              className={guessedLetters.includes(letter) ? "letter visible" : gameOver ? "letter visible red": "letter"} 
              >
                {letter}
              </span>
            </span>
          )
        }
    )

    return (
      <div>
        <div className="word">
          {wordToGuess}
        </div>
      </div>
    )
  }

  export default Word