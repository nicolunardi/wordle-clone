"use client";
import Keyboard from "@/components/Keyboard";
import WordGrid from "@/components/WordGrid";
import { Poppins } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import words from "@/data/words";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function Home() {
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

  const verifyWord = useCallback((word: string) => {
    return words.includes(word);
  }, []);

  const handleKeyup = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      const newGuesses = [...allGuesses];
      console.log(key);

      if (key === "Enter") {
        if (
          newGuesses[guesses].length === 5 &&
          verifyWord(newGuesses[guesses])
        ) {
          setGuesses((c) => c + 1);
          if (newGuesses[guesses] === word) {
            console.log("winner");
            setWord(words[Math.floor(Math.random() * words.length)]);
            setGuesses(0);
            newGuesses.forEach((_, idx) => (newGuesses[idx] = ""));
          }
        } else {
          // TODO
          // shake animation
        }
      } else if (key === "Backspace") {
        newGuesses[guesses] = newGuesses[guesses].slice(0, -1);
      } else if (newGuesses[guesses].length < 5 && key.match(/^[A-z]$/)) {
        newGuesses[guesses] += key;
      }

      setAllGuesses(newGuesses);
    },
    [allGuesses, guesses, verifyWord, word]
  );

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <main className="p-5 flex-1 flex flex-col items-center">
      {/* grid */}
      <div className="flex flex-col gap-2">
        {allGuesses.map((guess, idx) => (
          <WordGrid
            guess={guess}
            word={word}
            isGuessed={idx < guesses}
            key={idx}
          />
        ))}
      </div>
      {/* keyboard */}
      <div className="w-full">
        <Keyboard />
      </div>
    </main>
  );
}
