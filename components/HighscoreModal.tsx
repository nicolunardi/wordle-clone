import highscores from "@/highscores.json";
import HighScoreLetter from "./HighScoreLetter";

type Props = {
  closeModal: () => void;
};

function HighscoreModal({ closeModal }: Props) {
  return (
    <div
      className="flex flex-col w-full h-[80%] max-w-lg absolute top-1/2 -translate-y-1/2 
      bg-white p-3 items-center justify-between border rounded shadow-lg shadow-gray-300"
    >
      <h1 className="text-2xl">Highscores</h1>
      <div className="w-full h-[80%] overflow-auto">
        {highscores.scores.map((score, idx) => (
          <div
            className="w-full flex gap-4 sm:gap-10 justify-center py-1"
            key={idx}
          >
            {/* ranking */}
            <div>
              <HighScoreLetter idx={idx} data={(idx + 1).toString()} />
            </div>
            {/* name */}
            <div className="flex gap-2">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <HighScoreLetter key={idx} idx={idx} data={score.name[idx]} />
                ))}
            </div>
            {/* score */}
            <div className="flex gap-2">
              {Array(2)
                .fill(0)
                .map((_, idx) => (
                  <HighScoreLetter
                    key={idx}
                    idx={idx}
                    data={score.score.toString().padStart(2, "0")[idx]}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="border rounded  p-3 bg-white hover:bg-green-400 hover:text-white"
        autoFocus
        onClick={() => {
          closeModal();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default HighscoreModal;
