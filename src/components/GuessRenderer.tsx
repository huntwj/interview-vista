import LetterGuessRenderer from "./LetterGuessRenderer";

type LetterGuess = {
  letter: string;
  color: string;
};

interface Props {
  guess: LetterGuess[];
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
