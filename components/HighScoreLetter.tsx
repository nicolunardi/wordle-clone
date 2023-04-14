type props = {
  idx: number;
  data: string;
};

function HighScoreLetter({ idx, data }: props) {
  const bgColor =
    idx === 0 ? "bg-green-400" : data ? "bg-yellow-300" : "bg-gray-500";
  return (
    <div className="flex" key={idx}>
      <div
        className={`flex items-center justify-center h-8 w-8 sm:w-10 sm:h-10  rounded ${bgColor}`}
        key={idx}
      >
        {data}
      </div>
    </div>
  );
}

export default HighScoreLetter;
