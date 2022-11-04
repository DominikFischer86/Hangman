type LetterProps = {
    guessedLetters: string[]
    getKey: (keyId: string) => void
}

const Letters = ({getKey, guessedLetters}: LetterProps): JSX.Element => {
  const alpha: number[] = Array.from(Array(26)).map((_,i) => i + 65)
  const alphabet: string[] = alpha.map(x => String.fromCharCode(x).toLowerCase())
  
  return (
    <div>
      {alphabet.map((letter: string) => (
          <button
            key={letter}
            disabled={guessedLetters.includes(letter)}
            id={letter}
            className="letters"
            onClick={() => getKey(letter)}
          >
            {letter}
          </button>
        ))
      }
    </div>
  )}

  export default Letters