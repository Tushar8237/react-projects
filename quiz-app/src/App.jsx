import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import QuizForm from "./components/QuizForm";
import Result from "./components/Result";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentScore, setCurrentScore] = useState(null);
  const [isTakingQuiz, setIsTakingQuiz] = useState(false);

  const startQuiz = () => setIsTakingQuiz(true);

  const finishQuiz = (score) => {
    setCurrentScore(score);
    setIsTakingQuiz(false);
  };
  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      {!isTakingQuiz ? (
        <>
        <QuizForm setQuizData={setQuizData} />
        {quizData.length > 0 && <button onClick={startQuiz}>Take Quiz</button>}
        {currentScore !== null && <Result score={currentScore}/>}
        </>
      ) : (
        <Quiz quizData={quizData} finishQuiz={finishQuiz}/>
      )}
    </div>
  );
}

export default App;
