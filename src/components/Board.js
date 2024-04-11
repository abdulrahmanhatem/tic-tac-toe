import { useState, useEffect } from 'react'
import Lines from './Lines';
import calculateWinner from '../helpers/calculateWinner';
import useSound from '../hooks/useSound';
import Confetti from "react-confetti";
import { updateResult, getResult } from "../helpers/result";

function Square({value, onSquareClick, win}){
    return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value && <span>{value}</span>}</button>;
}

export default function Board({xIsNext, squares, onPlay, getCurrent, settings}) {
    const [startBg, setStartBg] = useState(false)
    const {isSFXMute, sFXVolume} = settings;
    const result = getResult();

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
        if (!startBg) {
            
            setStartBg(true)
        }
        
        const nextSquares = squares.slice();  

        if (squares[i] || winners){
            
            useSound("buzz", sFXVolume, isSFXMute)
            return;
        }


        getCurrent(i)
        nextSquares[i] = xIsNext ? "X" : "O";
        useSound((xIsNext ? "x" : "o"), sFXVolume, isSFXMute);

        winners = calculateWinner(nextSquares);
        full = nextSquares.every(i => i !== null);
        if(winners){
            useSound("win", sFXVolume, isSFXMute)
            const doubleWin = winners.length > 3;
            if (doubleWin) {
                updateResult(nextSquares[i], "double")
            }else{
                updateResult(nextSquares[i])
            }
            
        }else{
            if(full){
                useSound("draw", sFXVolume, isSFXMute)
                updateResult("draw")
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
        <div className="results">
            <div className='result'>
                <span>X</span>
                <span className='value'>{result.X ? result.X : 0}</span>
            </div>
            <div className='result'>
                <span>O</span>
                <span className='value'>{result.O? result.O : 0}</span>
            </div>
            <div className='result'>
                <span>Draw</span>
                <span className='value'>{result.draw? result.draw : 0}</span>
            </div>
        </div>
        {winners && 
        <Confetti className="confetti"
            numberOfPieces={500} 
            colors={["#dcb288", "#444", "#000"]} 
            tweenDuration={3000}
            recycle={false}
            />
            }
        </>
    );
}

  