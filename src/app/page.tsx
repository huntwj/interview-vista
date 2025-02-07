"use client";

import GuessInput from "@/components/GuessInput";
import GuessList from "@/components/GuessList";
import { useState } from "react";
import { gradeInput, type Guess } from "./guess";

const WORDLE_WORD_LENGTH = 5;

export default function Home() {
  const answer = "ANVIL";
  const [inputWord, setInputWord] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState<Guess[]>([]);

  const addGuess = (input: string) => {
    if (inputWord.length === WORDLE_WORD_LENGTH) {
      const guess = gradeInput(input, answer);
      setPreviousGuesses([...previousGuesses, guess]);
      setInputWord("");
    }
  };

  const resetGuesses = () => {
    setInputWord("");
    setPreviousGuesses([]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>
      <p>Hint: The target word is ANVIL.</p>
      <p>TODO: Remove the hint above!</p>
      <GuessInput
        inputWord={inputWord}
        onAddGuess={addGuess}
        onChange={setInputWord}
      />
      <GuessList guesses={previousGuesses} />
      <button onClick={resetGuesses}>Reset</button>
      <div>
        <p className="text-2xl">Things we can do to improve this:</p>

        <ul className="list-disc">
          <li>Implement the Wordle game state as a type</li>
          <li>Include a mechanism to change the target word</li>
          <li>
            {
              "Use internet's official Wordle lists for answers and guesses (allowed-words.txt)."
            }
          </li>
          <li>Limit the user to six guesses.</li>
          <li>Prevent guesses after the user guesses correctly.</li>
        </ul>
      </div>
    </main>
  );
}
