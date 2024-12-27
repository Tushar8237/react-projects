import React, { useState } from "react";

function Quiz({ quizData, finishQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [useAnswer, setUseAnswer] = useState("");

  const handleAnswer = () => {
    if (
      useAnswer.toLocaleLowerCase() ===
      quizData[currentQuestion].correctAnswer.toLocaleLowerCase()
    ) {
      setScore(score + 1);
    }
    setUseAnswer("");
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz(score + 1);
    }
  };
  return (
    <div>
      <h2>Take Quiz</h2>
      <p>{quizData[currentQuestion].question}</p>
      <input
        type="text"
        placeholder="Your Answer"
        value={useAnswer}
        onChange={(e) => setUseAnswer(e.target.value)}
      />
      <button onClick={handleAnswer}>Next</button>
    </div>
  );
}

export default Quiz;