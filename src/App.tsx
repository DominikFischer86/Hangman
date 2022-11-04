import { useState, useEffect } from "react"

import { words } from "./data/wordlist"
import Word from "./components/Word"
import Letters from "./components/Letters"
import StartGame from "./components/StartGame"

import "./App.css"

const alpha: number[] = Array.from(Array(26)).map((_,i) => i + 65)
const alphabet: string[] = alpha.map(x => String.fromCharCode(x).toLowerCase())

let pickedLetters: string[] = []
let remainingLetters: string[] = []

const App = () => {
  const [key, setKey] = useState<string>("")
  const [word, setWord] = useState<string>("")
  const [tries, setTries] = useState<number>(10)
  const [gamestart, setGamestart] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)

  useEffect(() => {
    if (tries <= 0) setGameOver(true)
  }, [tries])

  const getKey = (keyId: string) => {
    setKey(keyId)
    evaluateResult(keyId)
  }

  const evaluateResult = (keyId: string) => {
    pickedLetters.push(keyId)
    if (word.includes(keyId)) return
    else return setTries(tries => tries-1)
  }

  const getRandomWord = (words: string[]): string => {
    const randomIndex: number = Math.floor(words.length * Math.random())
    return words[randomIndex]
  }

  const handleStart = (): void => {
    setGamestart(true)
    setWord(getRandomWord(words))
  }

  remainingLetters = alphabet.filter((letter: string) => !pickedLetters.includes(letter))

  return (
    <div className="board">
      {!gamestart && <StartGame handleStart={handleStart} />}
      {gamestart && !gameOver &&
        <div className="main">
          <p>Lives: {tries}</p>
          <Word word={word} currentLetter={key} />
          <Letters 
            alphabet={alphabet} 
            remainingLetters={remainingLetters} 
            pickedLetters={pickedLetters} 
            getKey={getKey} 
          />
        </div>
      }
      {gameOver && <p className="gameOver">Game Over!</p>}
    </div>
  )
}

export default App
