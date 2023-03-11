import { IUsedLetters } from "@/types";
import { MouseEvent } from "react";

interface Props {
  handleClick: (e: MouseEvent) => void;
  letter: string;
  usedLetters: IUsedLetters;
}

function LetterButton({ handleClick, letter, usedLetters }: Props) {
  const bgColor = usedLetters.exact.has(letter)
    ? "bg-green-400"
    : usedLetters.inexact.has(letter)
    ? "bg-yellow-300"
    : usedLetters.wrong.has(letter)
    ? "bg-gray-500"
    : "bg-gray-300";
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`border rounded flex justify-center items-center w-8 h-10 uppercase text-sm ${bgColor} hover:scale-110 sm:w-12 sm:h-14 sm:text-lg`}
      data-key={letter}
    >
      {letter}
    </button>
  );
}

export default LetterButton;
