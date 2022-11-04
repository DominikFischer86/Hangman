import { useState, useEffect } from "react"

import { words } from "./data/wordlist"
import Word from "./components/Word"
import Letters from "./components/Letters"
import StartGame from "./components/StartGame"
import GameOver from "./components/GameOver"
import Victory from "./components/Victory"

import "./App.css"

const App = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [word, setWord] = useState<string>("")
  const [tries, setTries] = useState<number>(6)
  const [gamestart, setGamestart] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [victory, setVictory] = useState<boolean>(false)

  useEffect(() => {
    if (tries <= 0) setGameOver(true)
    if (gamestart) setVictory(checkVictoryCondition(word, guessedLetters))
  }, [tries, word, guessedLetters])

  const getKey = (letter: string) => {
    setGuessedLetters((currentLetters: string[]) => [...currentLetters, letter])
    if (word.includes(letter)) return
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

  const checkVictoryCondition = (word: string, guessedLetters: string[]) => {
    const wordArray: string[] = [...new Set(word.split(""))]
    const filteredArray: string[] = wordArray.filter(value => guessedLetters.includes(value))
    return wordArray.length === filteredArray.length
  }

  return (
    <div className="board">
      {!gamestart && <StartGame handleStart={handleStart} />}
      {gamestart && 
        <div className="main">
          <p>Lives: {tries}</p>
          <Word 
            word={word} 
            guessedLetters={guessedLetters} 
            gameOver={gameOver}
            victory={victory}
          />
          {!gameOver && !victory &&
            <Letters 
              getKey={getKey}
              guessedLetters={guessedLetters}
            />
          }
          {gameOver && <GameOver />}
          {victory && <Victory />}
        </div>
      }
    </div>
  )
}

export default App
