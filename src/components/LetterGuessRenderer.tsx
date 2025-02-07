import { GradedLetter } from "@/app/guess";

interface Props {
  letterGuess: GradedLetter;
}

const LetterGuessRenderer: React.FC<Props> = ({ letterGuess }) => {
  return (
    <span style={{ margin: 5, padding: 5, backgroundColor: letterGuess.grade }}>
      {letterGuess.letter}
    </span>
  );
};

export default LetterGuessRenderer;
