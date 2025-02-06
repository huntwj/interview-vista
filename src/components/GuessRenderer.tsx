import { Guess } from "@/app/model/guess";
import LetterGuessRenderer from "./LetterGuessRenderer";

interface Props {
  guess: Guess;
}
const GuessRenderer: React.FC<Props> = ({ guess }) => {
  return (
    <div>
      {guess.map((letterGuess, i) => (
        <LetterGuessRenderer key={i} letterGuess={letterGuess} />
      ))}
    </div>
  );
};

export default GuessRenderer;
