import {useState, memo} from "react";

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
    <div className="list">
      {squares.map((square, i) => {
        let win;
        if (winner) {
          win = winner.includes(i) ? true : false;
        }
        
        return <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i} win={win}  getSquare={getCurrent}/>;
      })}
      <DashedLines count={4}/>
    </div>
    <div className="status">{status}</div>
    
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
      description = 
      <div className="description">
        <span className="move">0{move}</span>  
        <span className="player">{squares[indexes[move-1]]}</span> 
        <span className="square">Row: <strong>{locations[indexes[move-1]]?.row}</strong> Column: <strong>{locations[indexes[move-1]]?.col}</strong></span> 
      </div>;

    } else {
      description = <span className="start">Start The Game</span>;
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
        <button onClick={() =>setIsAscending(!isAscending)} className="sort">Sort</button>
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

let DashedLines = memo(function DashedLines({count}){
  return (
    <div className="dashed">
      {
        [...Array(count)].map((li, i) => <DashedLine key={i}/>)
      }
    </div>
  )
})

function DashedLine(){
  let random = Math.ceil(60 * Math.random()) ;  
  return (
    <svg viewBox="0 0 100 100" className="line">
    <path 
        d="M 0 0 L 0 100 z"
        stroke-miterlimit="0" 
        fill="none" 
        stroke="#555"
        stroke-width=".2"
        stroke-dasharray={
          `
          ${Math.ceil(10)} 
          ${Math.ceil(6 * Math.random())} 
          ${Math.ceil(5 * Math.random())}
        `
        }
        stroke-dashoffset="1">
        <animate
            attributeName="stroke-dashoffset"
            values="10;0"
            dur="30s"
            calcMode="linear"
            repeatCount="indefinite" />
    </path>
  </svg>
  )
}