import React from 'react'

function PlayerInfo({ currentPlayer }) {
  return (
    <div className='player-info'>
        <p>It's Player {currentPlayer}'s turn!</p>
    </div>
  )
}

export default PlayerInfo
