import Lines from './Lines';
import calculateWinner from '../helpers/calculateWinner';
import useSound from '../hooks/useSound';

function Square({value, onSquareClick, win}){
    return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value && <span>{value}</span>}</button>;
}

export default function Board({xIsNext, squares, onPlay, getCurrent, settings}) {
    const {isSFXMute, sFXVolume, isBgMute, bgVolume} = settings;

    let winners, full, status ;

    winners = calculateWinner(squares);
    full = squares.every(i => i !== null);

    if(winners){
        const doubleWin = winners.length > 3;
        status = "Winner: " + (doubleWin ? " Double Win for " : "") + squares[winners[0]];
    }else{
        if(full){
            status = "Draw!";
        }else{
            status = "Next turn: " + (xIsNext ? "X" : "O");
        }
    }

    function handleClick (i) {
        
        const nextSquares = squares.slice();  

        if (squares[i] || winners){
            
            useSound("buzz", sFXVolume, isSFXMute)
            return;
        }


        getCurrent(i)
        nextSquares[i] = xIsNext ? "X" : "O";
        useSound((xIsNext ? "x" : "o"), sFXVolume, isSFXMute)


        
        winners = calculateWinner(nextSquares);
        full = nextSquares.every(i => i !== null);
        if(winners){
            useSound("win", sFXVolume, isSFXMute)
        }else{
            if(full){
                useSound("draw", sFXVolume, isSFXMute)
            }
        }
        
        onPlay(nextSquares);
    }

    return (
        <>
        <div className="list">
        {squares.map((square, i) => {
            let win;
            if (winners) {
                win = winners.includes(i) ? true : false;
            }
            
            return <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i} win={win}  getSquare={getCurrent}/>;
        })}
        <Lines count={4}/>
        </div>
        <div className="status">{status}</div>
        </>
    );
}

  