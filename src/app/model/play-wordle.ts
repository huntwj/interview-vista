import { gradeInput, Guess } from "../guess";

/// What does the model look like for when a user "plays" wordle?
export function reducer(state: PlayWordle, action: Action): PlayWordle {
  switch (action.type) {
    case "UPDATEINPUTWORD":
      return {
        ...state,
        inputWord: action.inputWord,
      };
    case "ADDGUESS":
      const graded = gradeInput(action.guess, state.answer);
      return {
        ...state,
        previousGuesses: [...state.previousGuesses, graded],
        inputWord: "",
      };
    case "RESET": {
      return {
        ...state,
        inputWord: "",
        previousGuesses: [],
      };
    }
    default:
      return state;
  }
}

export type PlayWordle = {
  // Let's figure out what the type directing the app will look like.
  answer: string;
  WORDLE_WORD_LENGTH: number;
  inputWord: string;

  previousGuesses: Guess[];
};

// TODO: What should this look like?
type GradedGuess = undefined;

export const scoreUserGuess = (userGuess: string): GradedGuess => {
  // TODO: Implement me!
};

type UpdateInputWord = {
  type: "UPDATEINPUTWORD";
  inputWord: string;
};

type Action = UpdateInputWord | AddGuess | Reset;

export const updateInputWord = (inputWord: string): Action => ({
  type: "UPDATEINPUTWORD",
  inputWord,
});

type AddGuess = {
  type: "ADDGUESS";
  guess: string;
};

export const addGuessAction = (guess: string): Action => ({
  type: "ADDGUESS",
  guess,
});

type Reset = {
  type: "RESET";
};

export const reset = (): Action => ({
  type: "RESET",
});
