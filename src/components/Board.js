import { useState, useContext } from 'react'
import Lines from './Lines';
import calculateWinner from '../helpers/calculateWinner';
import {Sound} from "./Sound";

function Square({value, onSquareClick, win}){
    return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value}</button>;
}

export default function Board({xIsNext, squares, onPlay, getCurrent}) {
    let [sound, setSound] = useState("tick");

    let sFXSettings = useContext(SettingsContext);

    console.log(sFXSettings);

    const winners = calculateWinner(squares);
    let status;
    let full = squares.every(i => i !== null);

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
            if (winners) {
                win = winners.includes(i) ? true : false;
            }
            
            return <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i} win={win}  getSquare={getCurrent}/>;
        })}
        <Lines count={4}/>
        </div>
        <div className="status">{status}</div>
        {/* <Sound type="background" isMute={isBackgroundMute} volume={backgroundVolume}/> */}
        </>
    );
}

  