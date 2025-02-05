/// What does the model look like for when a user "plays" wordle?

const MAX_GUESSES = 6;

type LetterScore = "correct" | "misplaced" | "incorrect";

type ScoredLetter = {
  letter: string; // This should be a single character.
  score: LetterScore;
};

type ScoredGuess = {
  scoredLetters: ScoredLetter[];
};

type WordlePlay = {
  // This could also be an ID that let's the server know what game we're
  // playing. If we're storing the answer locally, then we'll just store
  // it here in the model.
  answer: string;

  previousGuesses: ScoredGuess[];

  // Note: This should only ever be undefined when the user has made all
  // their guesses and previousGuesses.length === MAX_GUESSES
  currentInput: string | undefined;
};

// This is an (intentionally) incorrect implementation of the
// scoreUserGuess function.
export const scoreUserGuess =
  (answer: string) =>
  (userGuess: string): ScoredGuess => {
    const target = answer.toLocaleUpperCase();
    return {
      scoredLetters: userGuess
        .toLocaleUpperCase()
        .split("")
        .map((letter) => ({
          letter,
          score: "incorrect",
        })),
    };
  };
