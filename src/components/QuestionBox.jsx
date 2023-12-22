import React, {useState} from 'react'
import questions from '../questions'
import "./Result.jsx"
import "../App.css";
import Result from './Result';

export default function QuestionBox() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0)
  const [correctAns,setCorrectAns]=useState(0)
  const [showResult,setShowResult]=useState(false)
  const [highlight,setHighlight]=useState(false)



  const handleAnswerOption = (isCorrect) => {
    if(isCorrect) {
      setScore(score+20)
      setCorrectAns(correctAns+1)
      handleNextQuestion()
    } else {
      setScore(score)
      setCorrectAns(correctAns)
      handleNextQuestion()
    }
    }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if(nextQuestion<questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowResult(true)
    }
  }

  const handlePlayAgain = () => {
    setScore(0)
    setCorrectAns(0)
    setCurrentQuestion(0)
    setShowResult(false)
  }

  const handleHighlightColor = () => {
    setHighlight(true)
  }
  const removeHighlightColor = () => {
    setHighlight(false)
  }

  return (
    <>
      <div className='app'>
        {showResult ? (<Result score={score} correctAns={correctAns} handlePlayAgain={handlePlayAgain} />) : (
          <>
          <div className='question-section'>
            <h3>Score:{score}</h3>
            <div className='question-count'>
              <span>Question {currentQuestion+1} of {questions.length}</span>
            </div>
            <div className={`question-text ${highlight ? "highlight" : "removeHighlight" }`} >
              {questions[currentQuestion].text}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((ans,i)=>{
              return (
                <button
                  className='button'
                  key={i} 
                  onClick={()=>handleAnswerOption(ans.isCorrect)}>
                  {ans.text}
                </button>
              )

            })}
            <div className='actions'>
            <button onClick={handleHighlightColor}>Highlight</button>
            <button onClick={removeHighlightColor}>Remove Highlight</button>
          </div>
          </div>
        </>
        )}
        
      </div>
    </>
  )
}
