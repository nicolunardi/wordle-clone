type Props = {
  hasLost: () => boolean;
  resetGame: () => void;
  word: string;
  closeModal: () => void;
  currStreak: number;
  bestStreak: number;
};

function PlayOnModal({
  hasLost,
  resetGame,
  word,
  closeModal,
  currStreak,
  bestStreak,
}: Props) {
  return (
    <div className="flex flex-col w-full h-60 max-w-lg absolute top-1/4 bg-white p-5 items-center justify-between border rounded shadow-lg shadow-gray-300">
      <h1 className="text-lg font-bold">
        {hasLost() ? "Too Bad, Try again" : "Congratulations"}
      </h1>
      <p>
        {hasLost()
          ? `The word was ${word}. Your best streak was ${bestStreak}`
          : `Lets keep the streak up!`}
      </p>
      <p>{`Current streak: ${currStreak}`}</p>
      <button
        className="border rounded  p-3 bg-white hover:bg-green-400 hover:text-white"
        autoFocus
        onClick={() => {
          resetGame();
          closeModal();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default PlayOnModal;
