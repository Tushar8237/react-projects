import React, { useState } from "react";

function QuizForm({ setQuizData }) {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [quizList, setQuizList] = useState([]);

  const handleAddQuestion = () => {
    if (question && correctAnswer) {
      const newQuestion = { question, correctAnswer };
      setQuizList([...quizList, newQuestion]);
      setQuestion("");
      setCorrectAnswer("");
    }
  };

  const handleSubmit = () => {
    setQuizData(quizList);
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />

      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSubmit}>SubmitQuestion</button>
    </div>
  );
}

export default QuizForm;
