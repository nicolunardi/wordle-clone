"use client";
import Keyboard from "@/components/Keyboard";
import WordGrid from "@/components/WordGrid";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import useGame from "@/hooks/useGame";
import PlayOnModal from "@/components/PlayOnModal";
import HighscoreModal from "@/components/HighscoreModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function Home() {
  const {
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
  } = useGame();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHighscoresModalOpen, setIsHighscoresModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (isGameEnded) {
      setIsModalOpen(true);
    }
  }, [isGameEnded]);

  useEffect(() => {
    const handleKeyup = (e: KeyboardEvent) => {
      const key = e.key;
      updateGuesses(key);
    };
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [updateGuesses]);

  return (
    <main className="p-5 flex-1 flex flex-col items-center gap-6">
      {/* grid */}
      <div className="flex flex-col gap-2">
        {allGuesses.map((guess, idx) => (
          <WordGrid
            guess={guess}
            word={word}
            isGuessed={idx < guesses}
            invalidWord={invalidWord}
            current={guesses === idx}
            setInvalidWord={() => setInvalidWord(false)}
            key={idx}
          />
        ))}
      </div>
      {/* keyboard */}
      <div className="w-full">
        <Keyboard updateGuesses={updateGuesses} usedLetters={usedLetters} />
      </div>
      <p>Current streak: {currStreak}</p>
      <p>{word}</p>
      <button onClick={() => setIsHighscoresModalOpen(true)}>Highscores</button>
      {isModalOpen && (
        <PlayOnModal
          resetGame={resetGame}
          hasLost={hasLost}
          word={word}
          closeModal={() => setIsModalOpen(false)}
          currStreak={currStreak}
          bestStreak={bestStreak}
        />
      )}
      {isHighscoresModalOpen && (
        <HighscoreModal closeModal={() => setIsHighscoresModalOpen(false)} />
      )}
    </main>
  );
}
