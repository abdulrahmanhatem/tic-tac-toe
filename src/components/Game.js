
import { useState } from 'react'
import Board from './Board'; 
import Info from './Info';
import Settings from './Settings';


export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const [indexes, setIndexes] = useState([]);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function getCurrentSquare(i) {
      const nextIndexes = indexes.slice();
      setIndexes([...nextIndexes, i]) 
    }
  
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} getCurrent={getCurrentSquare}/>
        </div>
        <div className="game-info">
          <Info currentMove={currentMove} indexes={indexes} history={history} setCurrentMove={setCurrentMove}/>
        </div>
        <span className='settings'>
          <Settings/>
          
        </span>
      </div>
    )
  }