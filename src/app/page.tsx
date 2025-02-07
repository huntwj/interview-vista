"use client";

import GuessInput from "@/components/GuessInput";
import GuessList from "@/components/GuessList";
import { useState, useReducer } from "react";
import { gradeInput, type Guess } from "./guess";
import {
  addGuessAction,
  PlayWordle,
  reducer,
  reset,
  updateInputWord,
} from "./model/play-wordle";

const initGameState: PlayWordle = {
  answer: "ANVIL",
  WORDLE_WORD_LENGTH: 5,
  inputWord: "",
  previousGuesses: [],
};

export default function Home() {
  const [gameState, dispatch] = useReducer(reducer, initGameState);

  const setInputWord = (inputWord: string) =>
    dispatch(updateInputWord(inputWord));
  const addGuess = (guess: string) => dispatch(addGuessAction(guess));
  const resetGuesses = () => dispatch(reset());

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>
      <GuessInput
        inputWord={gameState.inputWord}
        onAddGuess={addGuess}
        onChange={setInputWord}
      />
      <GuessList guesses={gameState.previousGuesses} />
      <button onClick={resetGuesses}>Reset</button>
      <div>
        <p className="text-2xl">Things we can do to improve this:</p>

        <ul className="list-disc">
          <li>Implement the Wordle game state as a type</li>
          <li>Include a mechanism to change the target word</li>
          <li>
            {
              "Use internet's official Wordle lists for answers and guesses (allowed-words.txt)"
            }
          </li>
          <li>Limit the user to six guesses</li>
          <li>Prevent guesses after the user guesses correctly</li>
          <li>Improve UI: Style the add guess button</li>
          <li>Improve UI: Make the output grid more consistent</li>
        </ul>
      </div>
    </main>
  );
}
