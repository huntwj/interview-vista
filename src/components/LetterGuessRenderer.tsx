type LetterGuess = {
  letter: string;
  color: string;
};

interface Props {
  letterGuess: LetterGuess;
}

const LetterGuessRenderer: React.FC<Props> = ({ letterGuess }) => {
  return (
    <span style={{ margin: 5, padding: 5, backgroundColor: letterGuess.color }}>
      {letterGuess.letter}
    </span>
  );
};

export default LetterGuessRenderer;
