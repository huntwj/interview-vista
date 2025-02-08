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
    <>
      <input
        value={inputWord}
        onChange={handleChange}
        onKeyUp={keyUp}
        type="text"
        style={{ color: "black" }}
      />
      <button
        onClick={() => onAddGuess(inputWord)}
        disabled={!canAddGuess}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Add guess
      </button>
    </>
  );
};

export default GuessInput;
