import { ChangeEventHandler, KeyboardEventHandler } from "react";

type Props = {
  inputWord: string;
  onChange: (newInput: string) => void;
  onAddGuess: (newGuess: string) => void;
};

const GuessInput: React.FC<Props> = ({ inputWord, onChange, onAddGuess }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value.toLocaleUpperCase());
  };

  const canAddGuess = inputWord.length === 5;

  const keyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter" && canAddGuess) {
      onAddGuess(inputWord);
    }
  };

  return (
    <div>
      <input
        value={inputWord}
        onChange={handleChange}
        onKeyUp={keyUp}
        type="text"
        style={{ color: "black" }}
      />
      <button onClick={() => onAddGuess(inputWord)} disabled={!canAddGuess}>
        Add guess
      </button>
    </div>
  );

  return <div>This is my component</div>;
};

export default GuessInput;
