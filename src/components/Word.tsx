import { useState, useEffect } from "react"
import { mergeArrays } from "../helpers/helpers"

type WordProps = {
    word: string
    currentLetter: string
}

let guessedWordArrayHistory: string[][] = []
let previousArray: any = []
let finalArray: any = []

const Word = ({word, currentLetter}: WordProps): JSX.Element => {
    const [finalWord, setFinalWord] = useState<string[]>([])
    const wordArray : string[] = Array.from(word)
    const wordArrayWithCorrectLetters: string[] = wordArray.map(
      (letter: string) => 
      letter === currentLetter
        ? currentLetter
        : "_"
      )

    if (wordArray.includes(currentLetter)) guessedWordArrayHistory.push(wordArrayWithCorrectLetters)
    const lastTwoFromArray = guessedWordArrayHistory.slice(-2)

    lastTwoFromArray.forEach(array => {
      finalArray = mergeArrays(array, previousArray)
      previousArray = array
    })

    useEffect(()=> {
      setFinalWord(finalArray)
    }, [finalArray])

    

    const loopFromThis = !finalWord.length ? wordArrayWithCorrectLetters : finalWord

    console.log(finalWord)

    const wordToGuess = loopFromThis.map(
        (letter: string, i: number): JSX.Element => {
            if(currentLetter !== letter) return (<span key={i}> </span>)
            return (<span key={i}>{letter}</span>)
        }
    )
    
    const blanks = wordArray.map(
        (_: string, i: number): JSX.Element => 
        (<span key={i}>_</span>)
    )

    return (
      <div>
        <div className="word">
          {wordToGuess}
        </div>
        <div className="blanks">
          {blanks}
        </div>
      </div>
    )
  }

  export default Word