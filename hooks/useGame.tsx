"use client";
import { IUsedLetters } from "@/types";
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
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
  const [usedLetters, setUsedLetters] = useState<IUsedLetters>({
    exact: new Set(),
    inexact: new Set(),
    wrong: new Set(),
  });
  const [invalidWord, setInvalidWord] = useState<boolean>(false);
  const [currStreak, setCurrStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);

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
    setIsGameEnded(false);
  };
  /**
   * Check that the word exists in the dictionary
   *
   * @param {string} word - The word that is to be checked
   * @return {boolean}
   */
  const verifyWord = (word: string): boolean => {
    return words.includes(word);
  };

  const hasLost = () => {
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

  const submitGuess = () => {
    setGuesses((c) => c + 1);
    // if the player has guessed the correct word
    if (allGuesses[guesses] === word) {
      setCurrStreak((c) => c + 1);
      setIsGameEnded(true);
    } else {
      // if all guesses are used end game
      if (guesses === 5) {
        setBestStreak((c) => Math.max(currStreak, c));
        setCurrStreak(0);
        setIsGameEnded(true);
        // otherwise play on
      } else {
        updateLettersObject(allGuesses[guesses]);
      }
    }
  };

  /**
   * Updates the guesses array based on player input:
   * "Enter": submit a guess
   * "Backspace": deletes a letter from the end of the guess
   * "a-z": adds a letter to the guess
   *
   * @param {string} key - the key that was input by the user
   * @return {*}  {void}
   */
  const updateGuesses = (key: string): void => {
    if (isGameEnded) {
      return;
    }
    console.log(guesses);
    if (key === "Enter") {
      // if the player has input a 5 letter word and the word is valid
      if (allGuesses[guesses].length === 5 && verifyWord(allGuesses[guesses])) {
        submitGuess();
        return;
      } else {
        // for input shake on invalid word
        setInvalidWord(true);
        return;
      }
    } else {
      const newGuesses = [...allGuesses];

      if (key === "Backspace") {
        newGuesses[guesses] = newGuesses[guesses].slice(0, -1);
      } else if (newGuesses[guesses].length < 5 && key.match(/^[A-z]$/)) {
        newGuesses[guesses] += key.toLowerCase();
      }
      setAllGuesses(newGuesses);
    }
  };

  return {
    word,
    allGuesses,
    guesses,
    updateGuesses,
    usedLetters,
    invalidWord,
    setInvalidWord,
    isGameEnded,
    resetGame,
    hasLost,
    currStreak,
    bestStreak,
  };
}

export default useGame;
