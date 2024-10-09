import React, { useState } from "react";
import Answer from "../answer/index";

function MathQuiz() {
  const [userAnswer, setUserAnswer] = useState('');
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [a, setA] = useState(getRandomNumber());
  const [b, setB] = useState(getRandomNumber());
  const [score, setScore] = useState(0);
  function generateNewQuestion() {
    setA(getRandomNumber());
    setB(getRandomNumber());
  }
  function updatePoints() {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    generateNewQuestion();
  }
  return (
    <div className="math-quiz">
      <h1>Math Quiz</h1>
      <p>
        What will happen if: {a} + {b}?
      </p>
      <p>Your current account: {score}</p>
      <Answer updatePoints={updatePoints} userAnswer={userAnswer} setUserAnswer={setUserAnswer}/>
    </div>
  );
}
export default MathQuiz;
