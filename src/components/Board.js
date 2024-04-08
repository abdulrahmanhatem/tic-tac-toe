import { useState, useContext } from 'react'
import Lines from './Lines';
import calculateWinner from '../helpers/calculateWinner';
import {Sound} from "./Sound";
import {background, x, o, win, draw, buzz} from "../assets/sounds";

function Square({value, onSquareClick, win}){
    return <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>{value && <span>{value}</span>}</button>;
}

export default function Board({xIsNext, squares, onPlay, getCurrent}) {
    let [sound, setSound] = useState("tick");

    const winners = calculateWinner(squares);
    let status;
    let full = squares.every(i => i !== null);

    if(winners){
        const doubleWin = winners.length > 3;
        status = "Winner: " + (doubleWin ? " Double Win for " : "") + squares[winners[0]];
        playSound("win")
    }else{
        if(full){
            status = "Draw!";
            playSound("draw")
        }else{
            status = "Next turn: " + (xIsNext ? "X" : "O");
            playSound((xIsNext ? "x" : "o"))
        }
    }

    function handleClick (i) {
        const nextSquares = squares.slice();  

        if (squares[i] || winners){
            
            if (squares[i] ) {
                playSound("buzz")
                console.log("Clicked before");
                
            }
            return;
        }


        getCurrent(i)
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    function playSound(type){
        let sound;
        switch (type) {
            case "win":
                sound = win;
                break;
            case "draw":
                sound = draw;
                break;
            case "o":
                sound = o;
                break;
            case "x":
                sound = x;
                break;
            case "buzz":
                sound = buzz;
                break;

            default:
                break;
        }
        if (sound) {
            new Audio(sound).play().catch(e => console.log("No Interact"))
        }
        
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

  