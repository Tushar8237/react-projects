import React from 'react'
import '../styles/Board.css'

function Board({ size, snakes, ladders, position }) {
    const boardSize = size || 10
    const cells = Array.from({ length: boardSize * boardSize }, (_, index) => boardSize * boardSize - index);

    console.log(snakes, ladders, position)
  return (
    <div className='board'>
        {cells.map((cell) => (
            <div key={cell} className='cell'>
                {cell}
                {snakes[cell] && <div className='snake'>🐍</div>}
                {ladders[cell] && <div className='ladder'>🪜</div>}
                {Object.values(position).includes(cell) && <div className='player'>👨‍🚀</div>}
            </div>
        ))}
    </div>
  )
}

export default Board
