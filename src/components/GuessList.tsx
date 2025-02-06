import GuessRenderer, { Guess } from "./GuessRenderer";

type Props = {
  guesses: Guess[];
};

const GuessList: React.FC<Props> = ({ guesses }) => (
  <>
    {guesses.map((guess, idx) => (
      <GuessRenderer key={`${idx}-${guess}`} guess={guess} />
    ))}
  </>
);

export default GuessList;
