import React from 'react'
import "../App.css";

export default function Result(props) {
  return (
    <div className='score-section'>
      <h2>Completed</h2>
      <h1>Total Score {props.score} %</h1>
      <h4>Your Correct Questions {props.correctAns} out of 5</h4>
      <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}
