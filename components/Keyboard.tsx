import { BackspaceIcon } from "@heroicons/react/24/outline";

const letters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function Keyboard() {
  return (
    <div className="flex flex-col gap-2 items-center my-5">
      <div className="flex gap-2">
        {letters[0].map((letter, idx) => (
          <button
            className="border rounded flex justify-center items-center w-12 h-14 bg-gray-300 uppercase"
            key={idx}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {letters[1].map((letter, idx) => (
          <button
            className="border rounded flex justify-center items-center w-12 h-14 bg-gray-300 uppercase"
            key={idx}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {
          <button className="border rounded flex justify-center items-center h-14 w-16 bg-gray-300 uppercase text-sm">
            {"enter"}
          </button>
        }
        {letters[2].map((letter, idx) => (
          <button
            className="border rounded flex justify-center items-center w-12 h-14 bg-gray-300 uppercase"
            key={idx}
          >
            {letter}
          </button>
        ))}
        {
          <button className="border rounded flex justify-center items-center w-16 h-14 bg-gray-300 uppercase">
            {<BackspaceIcon className="w-6 h-6" />}
          </button>
        }
      </div>
    </div>
  );
}

export default Keyboard;
