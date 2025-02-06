"use client";

import GuessInput from "@/components/GuessInput";
import GuessList from "@/components/GuessList";
import GuessRenderer, { Guess, LetterGuess } from "@/components/GuessRenderer";
import { ChangeEventHandler, useMemo, useState } from "react";

const WORDLE_WORD_LENGTH = 5;

export default function Home() {
  const answer = "ANVIL";
  const [inputWord, setInputWord] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState<Guess[]>([]);

  console.log("inputWord", inputWord);

  const gradeInput = (input: string): Guess =>
    input.split("").map((letter, index) => {
      if (letter === answer[index]) {
        return { letter, color: "green" };
      } else if (answer.includes(letter)) {
        return { letter, color: "orange" };
      } else {
        return { letter, color: "grey" };
      }
    });

  const guess = useMemo(() => {
    if (inputWord.length !== answer.length) {
      return [];
    }

    const result = inputWord.split("").map((letter, index) => {
      if (letter === answer[index]) {
        return { letter, color: "green" };
      } else if (answer.includes(letter)) {
        return { letter, color: "orange" };
      } else {
        return { letter, color: "grey" };
      }
    });
    return result;
  }, [inputWord]);

  const addGuess = (input: string) => {
    if (inputWord.length === WORDLE_WORD_LENGTH) {
      const guess = gradeInput(input);
      setPreviousGuesses([...previousGuesses, guess]);
      setInputWord("");
    }
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
      <div>
        <p className="text-2xl">Things we can do to improve this:</p>

        <ul className="list-disc">
          <li>Configure Jest to work properly</li>
          <li>Handle repeated letters correctly.</li>
          <li className="li">
            Add a button to submit a guess. It should only be enabled when the
            input has exactly five letters.
          </li>
          <li>
            Keep track of past guesses in a list and show all results together.
          </li>
          <li>Include a mechanism to change the target word</li>
          <li>
            {"Use internet's official Wordle lists for answers and guesses."}
          </li>
          <li>Limit the user to six guesses.</li>
          <li>Add a reset button</li>
          <li>Prevent guesses after the user guesses correctly.</li>
        </ul>
      </div>
    </main>
  );
}
