type Grade = "green" | "orange" | "gray";

export type GradedLetter = {
  letter: string;
  grade: Grade;
};

export type Guess = GradedLetter[];

export const gradeInput = (userInput: string, targetAnswer: string): Guess => {
  let checkAnswer: string = targetAnswer;

  const result = userInput.split("").map((letter, i): GradedLetter => {
    if (targetAnswer[i] === letter) {
      checkAnswer =
        checkAnswer.substring(0, i) +
        checkAnswer.substring(i + 1, checkAnswer.length);
      return { letter, grade: "green" };
    } else if (!checkAnswer.includes(letter)) {
      return { letter, grade: "gray" };
    } else {
      return { letter, grade: "orange" };
    }
  });

  return result.map((gradedLetter) => {
    if (gradedLetter.grade !== "orange") {
      return gradedLetter;
    } else if (checkAnswer.includes(gradedLetter.letter)) {
      checkAnswer = removeFirstInstance(checkAnswer, gradedLetter.letter);
      return gradedLetter;
    } else {
      return {
        ...gradedLetter,
        grade: "gray",
      };
    }
  });
};

function removeFirstInstance(checkAnswer: string, letter: string): string {
  const idx = checkAnswer.indexOf(letter);
  if (idx !== -1) {
    return (
      checkAnswer.substring(0, idx) +
      checkAnswer.substring(idx + 1, checkAnswer.length)
    );
  } else {
    return checkAnswer;
  }
}
