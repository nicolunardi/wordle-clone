const letters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "back"],
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
    </div>
  );
}

export default Keyboard;
