import { scoreUserGuess } from "./play-wordle";

const correct = (letter: string) => ({
  letter,
  score: "correct",
});

describe("Play Wordle Model", () => {
  describe("Guess Checker", () => {
    it("should work with correct guesses", () => {
      expect(scoreUserGuess("ANVIL")("ANVIL")).toEqual({
        scoredLetters: [
          correct("A"),
          correct("N"),
          correct("V"),
          correct("I"),
          correct("L"),
        ],
      });
    });
  });
});
