function WordGrid() {
  return (
    <div className="flex gap-2 4">
      {Array.from(Array(5).fill(0)).map((row, idx) => (
        <div
          className="h-14 w-14 border rounded flex justify-center items-center"
          key={idx}
        ></div>
      ))}
    </div>
  );
}

export default WordGrid;
