"use client";
import { IUsedLetters } from "@/app/types";
import words from "@/data/words";
import { useEffect, useState } from "react";

function useGame() {
  const [word, setWord] = useState<string>("");
  const [allGuesses, setAllGuesses] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [guesses, setGuesses] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [usedLetters, setUsedLetters] = useState<IUsedLetters>({
    exact: new Set(),
    inexact: new Set(),
    wrong: new Set(),
  });
  const [invalidWord, setInvalidWord] = useState<boolean>(false);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const resetGame = (): void => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses(0);
    setAllGuesses(allGuesses.map((c) => ""));
    setUsedLetters({
      exact: new Set(),
      inexact: new Set(),
      wrong: new Set(),
    });
  };

  const verifyWord = (word: string) => {
    return words.includes(word);
  };

  const hasWon = () => {
    return allGuesses[guesses - 1] === word;
  };

  const hasLost = () => {
    console.log(guesses);
    return guesses === 6;
  };

  const updateLettersObject = (guess: string) => {
    const newUsedLetters = { ...usedLetters };
    for (const letter of guess) {
      if (word.includes(letter)) {
        word.indexOf(letter) === guess.indexOf(letter)
          ? newUsedLetters.exact.add(letter)
          : newUsedLetters.inexact.add(letter);
      } else {
        newUsedLetters.wrong.add(letter);
      }
    }
    setUsedLetters(newUsedLetters);
  };

  const submitGuess = (newGuesses: string[]) => {
    // if the player has guessed the correct word
    if (newGuesses[guesses] === word) {
      console.log("winner");
      resetGame();
    } else {
      // if all guesses are used reset then game
      if (guesses === 5) {
        resetGame();
        // otherwise play on
        return;
      } else {
        setGuesses((c) => c + 1);
        updateLettersObject(newGuesses[guesses]);
      }
    }
  };

  const updateGuesses = (key: string): void => {
    if (hasWon() || hasLost()) {
      return;
    }
    const newGuesses = [...allGuesses];

    if (key === "Enter") {
      // if the player has input a 5 letter word and the word is valid
      if (newGuesses[guesses].length === 5 && verifyWord(newGuesses[guesses])) {
        submitGuess(newGuesses);
        return;
      } else {
        // for input shake on invalid word
        setInvalidWord(true);
        return;
      }
    } else if (key === "Backspace") {
      newGuesses[guesses] = newGuesses[guesses].slice(0, -1);
    } else if (newGuesses[guesses].length < 5 && key.match(/^[A-z]$/)) {
      newGuesses[guesses] += key.toLowerCase();
    }

    setAllGuesses(newGuesses);
  };

  return {
    word,
    allGuesses,
    guesses,
    updateGuesses,
    usedLetters,
    invalidWord,
    setInvalidWord,
  };
}

export default useGame;
