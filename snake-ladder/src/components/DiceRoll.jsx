import React from 'react'

function DiceRoll({ onRoll }) {
  return (
    <div>
        <button onClick={onRoll} className='dice-button'>Roll Dice</button>
    </div>
  )
}

export default DiceRoll
