"use client";
import Keyboard from "@/components/Keyboard";
import WordGrid from "@/components/WordGrid";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
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

  const handleKeyup = (e: KeyboardEvent) => {
    const key = e.key;
    const newGuesses = [...allGuesses];
    console.log(newGuesses);
    if (newGuesses[guesses].length < 5 && key.match(/^[A-z]$/)) {
      newGuesses[guesses] = newGuesses[guesses] + key;
      console.log(newGuesses);
    }

    setAllGuesses(newGuesses);
  };

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
          <WordGrid guess={guess} word={word} key={idx} />
        ))}
      </div>
      {/* keyboard */}
      <div className="w-full">
        <Keyboard />
      </div>
    </main>
  );
}
