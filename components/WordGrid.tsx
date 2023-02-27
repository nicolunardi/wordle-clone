"use client";
interface Props {
  word: string;
  guess: string;
}

function WordGrid({ word, guess }: Props) {
  return (
    <div className="flex gap-2 4">
      {Array.from(Array(5).fill(0)).map((_, idx) => {
        const bgColor = !guess[idx]
          ? ""
          : word[idx] === guess[idx]
          ? "bg-green-400"
          : word.includes(guess[idx])
          ? "bg-yellow-300"
          : "bg-gray-500";
        return (
          <div
            className={`h-14 w-14 border rounded flex justify-center items-center ${bgColor} uppercase`}
            key={idx}
          >
            {guess[idx]}
          </div>
        );
      })}
      <h1>{word}</h1>
    </div>
  );
}

export default WordGrid;
