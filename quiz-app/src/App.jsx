import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import QuizForm from "./components/QuizForm";
import Result from "./components/Result";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentScore, setCurrentScore] = useState(null);
  const [isTakingQuiz, setIsTakingQuiz] = useState(false);
  const [progress, setProgress] = useState(0);

  
  const startQuiz = () => setIsTakingQuiz(true);
  
  const finishQuiz = (score) => {
    setCurrentScore(score);
    setIsTakingQuiz(false);
  };
  
  // Progress bar
  const incrementProgress = () => {
    setProgress((prev) => (prev + 10 <= 100 ? prev + 10 : 100))
  }

  const resetProgressBar = () => {
    setProgress(0);
  }
  
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

      <div>
        <h1>
          Progress Bar
        </h1>
        <ProgressBar progress={progress}/>
        <div className="buttons">
          <button onClick={incrementProgress}>Increment</button>
          <button onClick={resetProgressBar}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
