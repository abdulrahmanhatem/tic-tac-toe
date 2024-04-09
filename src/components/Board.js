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
    const result = getResult()
    console.log(result);

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
            updateResult(nextSquares[i])
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
            <span>x: {result.X ? result.X : 0}</span>
            <span>o: {result.O? result.O : 0}</span>
            <span>Draw: {result.draw? result.draw : 0}</span>
        </div>
        {winners && 
        <Confetti 
            numberOfPieces={500} 
            colors={["#dcb288", "#444", "#000"]} 
            tweenDuration={3000}
            recycle={false}
            />
            }
        </>
    );
}

  