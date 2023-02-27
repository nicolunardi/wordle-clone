import Keyboard from "@/components/Keyboard";
import WordGrid from "@/components/WordGrid";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export default function Home() {
  return (
    <main className="p-5 flex-1 flex flex-col items-center">
      {/* grid */}
      <div className="flex flex-col gap-2">
        {Array.from(
          Array(6)
            .fill(0)
            .map((row, idx) => <WordGrid key={idx} />)
        )}
      </div>
      {/* keyboard */}
      <div className="w-full">
        <Keyboard />
      </div>
    </main>
  );
}
