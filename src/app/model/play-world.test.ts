import { scoreUserGuess } from "./play-wordle";

describe("Play Wordle Model", () => {
  describe("Guess Checker", () => {
    it("should work with correct guesses", () => {
      expect(scoreUserGuess("ANVIL")("ANVIL")).toEqual([]);
    });
  });
});
