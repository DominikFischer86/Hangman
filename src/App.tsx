import { useState, useEffect } from "react"

import { words } from "./data/wordlistGerman"
import { useLocalstorage } from "./hooks/useLocalstorage"
import Word from "./components/Word"
import Letters from "./components/Letters"
import StartGame from "./components/StartGame"
import GameOver from "./components/GameOver"
import Victory from "./components/Victory"
import Gallows from "./components/Gallows"
import WinStreakCounter from "./components/WinStreakCounter"

import "./App.css"

const initialState = {
  guessedLetters: [],
  word: "",
  tries: 6,
  gameStart: false,
  gameOver: false,
  victory: false,
}

const App = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>(
    initialState.guessedLetters
  )
  const [word, setWord] = useState<string>(initialState.word)
  const [tries, setTries] = useState<number>(initialState.tries)
  const [winStreak, setWinStreak] = useState<number>(0)
  const [highscore, setHighscore] = useLocalstorage("highscore", 0)
  const [gamestart, setGamestart] = useState<boolean>(initialState.gameStart)
  const [gameOver, setGameOver] = useState<boolean>(initialState.gameOver)
  const [victory, setVictory] = useState<boolean>(initialState.victory)

  useEffect(() => {
    if (tries <= 0) setGameOver(true)
    if (gamestart) setVictory(checkVictoryCondition(word, guessedLetters))
  }, [tries, word, guessedLetters])

  useEffect(() => {
    if (winStreak > highscore) setHighscore(winStreak)
  }, [winStreak])

  const getKey = (letter: string) => {
    setGuessedLetters((currentLetters: string[]) => [...currentLetters, letter])
    if (word.includes(letter)) return
    else return setTries(tries => tries - 1)
  }

  const getRandomWord = (words: string[]): string => {
    const maxWordLength = words.filter(word => word.length <= 10)
    const randomIndex: number = Math.floor(maxWordLength.length * Math.random())
    return maxWordLength[randomIndex]
  }

  const handleStart = (): void => {
    setGamestart(true)
    setWord(getRandomWord(words))
  }

  const handleNewGame = (result: string): void => {
    result === "victory"
      ? setWinStreak(winStreak => winStreak + 1)
      : setWinStreak(0)
    setGuessedLetters(initialState.guessedLetters)
    setWord(initialState.word)
    setTries(initialState.tries)
    setGamestart(initialState.gameStart)
    setGameOver(initialState.gameOver)
    setVictory(initialState.victory)
  }

  const checkVictoryCondition = (word: string, guessedLetters: string[]) => {
    const wordArray: string[] = [...new Set(word.split(""))]
    const filteredArray: string[] = wordArray.filter(value =>
      guessedLetters.includes(value)
    )
    return wordArray.length === filteredArray.length
  }

  return (
    <div className="board">
      {!gamestart && (
        <StartGame
          handleStart={handleStart}
          winStreak={winStreak}
          highscore={highscore}
        />
      )}
      {gamestart && (
        <div className="main">
          <WinStreakCounter winStreak={winStreak} highscore={highscore} />
          <Gallows tries={tries} gameOver={gameOver} victory={victory} />
          <Word
            word={word}
            guessedLetters={guessedLetters}
            gameOver={gameOver}
            victory={victory}
          />
          {!gameOver && !victory && (
            <Letters getKey={getKey} guessedLetters={guessedLetters} />
          )}
          {gameOver && <GameOver handleNewGame={handleNewGame} />}
          {victory && <Victory handleNewGame={handleNewGame} />}
        </div>
      )}
    </div>
  )
}

export default App
