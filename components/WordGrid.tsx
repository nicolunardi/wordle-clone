"use client";

import { useEffect, useState } from "react";

interface Props {
  word: string;
  guess: string;
  isGuessed: boolean;
  invalidWord: boolean;
  current: boolean;
  setInvalidWord: () => void;
}

function WordGrid({
  word,
  guess,
  isGuessed,
  invalidWord,
  current,
  setInvalidWord,
}: Props) {
  const [effect, setEffect] = useState<boolean>(false);

  const handleEffect = () => {
    setEffect(false);
    setInvalidWord();
  };

  useEffect(() => {
    setEffect(invalidWord);
  }, [invalidWord]);

  return (
    <div className="flex gap-2">
      {Array.from(Array(5).fill(0)).map((_, idx) => {
        const bgColor = !isGuessed
          ? ""
          : word[idx] === guess[idx]
          ? "bg-green-400"
          : word.includes(guess[idx])
          ? "bg-yellow-300"
          : "bg-gray-500";

        const borderColor =
          current && guess[idx]
            ? "border border-gray-800"
            : guess[idx]
            ? ""
            : "border";

        return (
          <div
            className={`h-14 w-14 ${borderColor} rounded flex justify-center items-center ${bgColor} uppercase  ${
              current && effect && "animate-wiggle"
            } `}
            key={idx}
            onAnimationEnd={handleEffect}
          >
            {guess[idx]}
          </div>
        );
      })}
    </div>
  );
}

export default WordGrid;
