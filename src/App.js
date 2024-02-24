import {useState} from "react";

function Square({value, onSquareClick, win}){

  return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value}</button>;
}

export function Board({xIsNext, squares, onPlay, getCurrent}) {
  const winner = calculateWinner(squares);
  let status;
  let full = squares.every(i => i !== null);

  if(winner){
    status = "Winner: " + squares[winner[0]];
  }else{
    if(full){
      status = "Draw!";
    }else{
      status = "Next turn: " + (xIsNext ? "X" : "O");
    }
    
  }

  function handleClick (i) {
    const nextSquares = squares.slice();

    
    if (squares[i] || winner){
      return;
    }
    getCurrent(i)
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
    
    
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="list">
      {squares.map((square, i) => {
        let win;
        if (winner) {
          win = winner.includes(i) ? true : false;
        }
        
        return <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i} win={win}  getSquare={getCurrent}/>;
      })}
    </div>
      
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const [indexes, setIndexes] = useState([]);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function getCurrentSquare(i) {
    const nextIndexes = indexes.slice();
    setIndexes([...nextIndexes, i]) 
  }

  let locations = [
    {row:1, col:1},
    {row:1, col:2},
    {row:1, col:3},
    {row:2, col:1},
    {row:2, col:2},
    {row:2, col:3},
    {row:3, col:1},
    {row:3, col:2},
    {row:3, col:3},
  ]

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {  
      description = move + ". " + squares[indexes[move-1]] + ` (${locations[indexes[move-1]]?.row}, ${locations[indexes[move-1]]?.col})`;
    } else {
      description = 'Start The Game';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className={move === currentMove ? "current" : "" }>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} getCurrent={getCurrentSquare}/>
      </div>
      <div className="game-info">
        <button onClick={() =>setIsAscending(!isAscending)}>Sort</button>
        <ul style={{
          flexDirection: isAscending ? "column" : "column-reverse" 
        }}>{moves}</ul>
      </div>
    </div>
  )
}

function calculateWinner(squares){
  const lines =[
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null
}