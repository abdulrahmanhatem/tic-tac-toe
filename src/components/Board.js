import Lines from './Lines';
import calculateWinner from '../helpers/calculateWinner'

function Square({value, onSquareClick, win}){
    return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value}</button>;
}


export default function Board({xIsNext, squares, onPlay, getCurrent}) {
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
        <Lines count={4}/>
        </div>
        <div className="status">{status}</div>
        </>
    );
}

  