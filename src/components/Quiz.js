import React, { useState } from 'react';

const Quiz = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === props.correctAnswer);

    const obj = {
        id : props.id,
        question : props.question,
        options : props.options,
        correctAnswer : props.correctAnswer,
        selectedAnswer : answer,
        isCorrect : answer === props.correctAnswer
    }
    props.btnClick(props.num, obj);
  };

  return (
    <div className={`quiz-container ${props.type}`}>
      <h2>{props.question}</h2>
      
      <ul className="options-list">
        {props.options.map((option, index) => (
          <li key={index} className="option">
            <button 
              onClick={() => handleAnswerSelect(option)}
              className={`option-button ${selectedAnswer === option || props.type === "notAnswer" ? 'selected' : ''} 
                ${((isCorrect === true && option === props.correctAnswer) || (props.isCorrect === true && props.selectedAnswer=== option)) ? 'correct' : ''}
                ${(isCorrect === false && option === selectedAnswer) || (props.isCorrect === false && props.selectedAnswer === option) ? 'incorrect' : ''}`}
              disabled={isCorrect !== null || props.type === "Answered"} // Disable after answering
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {(isCorrect !== null  || props.type === "Answered") && (
        <div className="result">
          {(isCorrect || props.isCorrect )? (
            <p className="correct-message">Correct!</p>
          ) : (
            <p className="incorrect-message">Incorrect. The correct answer is {props.correctAnswer}.</p>
          )}
        </div>
      )}
    </div>
  );
};




export default Quiz;
