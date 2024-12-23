import React from "react";

function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Complete</h2>
      <p>
        Your score: {score}/{total}
      </p>
      <p>{score === total ? "Perfect!" : "Keep Practicing!"}</p>
    </div>
  );
}

export default Result;
