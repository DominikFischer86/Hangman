type LetterProps = {
    alphabet: string[]
    remainingLetters: string[] 
    pickedLetters: string[] 
    getKey: (keyId: string) => void
}

const Letters = ({alphabet, remainingLetters, pickedLetters, getKey}: LetterProps): JSX.Element => (
    <div>
      {alphabet.map((letter: string) => {
        const isLetterIncorrectlyChosen = !remainingLetters.includes(letter)
        const isLetterCorrectlyChosen = pickedLetters.includes(letter)
        const isLetterChosen: boolean = isLetterCorrectlyChosen || isLetterIncorrectlyChosen

        return (
          <button
            key={letter}
            disabled={isLetterChosen}
            id={letter}
            className="letters"
            onClick={() => getKey(letter)}
          >
            {letter}
          </button>
        )})
      }
    </div>
  )

  export default Letters