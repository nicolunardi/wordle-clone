"use client";

import { IUsedLetters } from "@/types";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { MouseEvent } from "react";
import LetterButton from "./LetterButton";

interface Props {
  updateGuesses: (key: string) => void;
  usedLetters: IUsedLetters;
}

const letters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function Keyboard({ updateGuesses, usedLetters }: Props) {
  const handleClick = (e: MouseEvent) => {
    updateGuesses(e.currentTarget.getAttribute("data-key")!);
  };

  return (
    <div className="flex flex-col gap-2 items-center my-5">
      <div className="flex gap-2">
        {/* top row */}
        {letters[0].map((letter, idx) => (
          <LetterButton
            key={idx}
            handleClick={handleClick}
            letter={letter}
            usedLetters={usedLetters}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {/* middle row */}
        {letters[1].map((letter, idx) => (
          <LetterButton
            key={idx}
            handleClick={handleClick}
            letter={letter}
            usedLetters={usedLetters}
          />
        ))}
      </div>
      {/* bottom row */}
      <div className="flex gap-2">
        {/* enter button */}
        {
          <button
            onClick={(e) => handleClick(e)}
            className="border rounded flex justify-center items-center h-14 w-16 bg-gray-300 uppercase text-sm"
            data-key="Enter"
          >
            {"enter"}
          </button>
        }
        {/* letters */}
        {letters[2].map((letter, idx) => (
          <LetterButton
            key={idx}
            handleClick={handleClick}
            letter={letter}
            usedLetters={usedLetters}
          />
        ))}
        {/* backspace button */}
        {
          <button
            onClick={(e) => handleClick(e)}
            className="border rounded flex justify-center items-center w-16 h-14 bg-gray-300 uppercase"
            data-key="Backspace"
          >
            {<BackspaceIcon className="w-6 h-6" />}
          </button>
        }
      </div>
    </div>
  );
}

export default Keyboard;
