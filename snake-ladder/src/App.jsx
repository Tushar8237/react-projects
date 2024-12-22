import { useState } from 'react'
import './App.css'
import PlayerInfo from './components/PlayerInfo'
import DiceRoll from './components/DiceRoll'
import Board from './components/Board'
import { SNAKES, LADDERS, BOARD_SIZE } from './constant/gameRules';

function App() {
  const [position , setPosition] = useState({1 : 1, 2 : 1});
  const [currentPlayer , setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const newPosition = position[currentPlayer] + diceRoll;

    let finalPosition = newPosition;
    if (SNAKES[newPosition]) {
      finalPosition = SNAKES[newPosition];
    } else if (LADDERS[newPosition]) {
      finalPosition = LADDERS[newPosition];
    }

    if (finalPosition <= BOARD_SIZE) {
      setPosition({
        ...position,
        [currentPlayer]: finalPosition
      });
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }
  return (
    <div className='app'>
      <h1>
        Snake and Ladder Game
      </h1>
      <PlayerInfo currentPlayer={currentPlayer}/>
      <DiceRoll onRoll={rollDice}/>
      <Board siz={BOARD_SIZE} snakes={SNAKES} ladders={LADDERS} position={position}/>
    </div>
  )
}

export default App
