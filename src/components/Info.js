import { useState } from 'react';
import sortIcon from "../assets/images/sort.png";
import againIcon from "../assets/images/again.png";

export default function Info({currentMove, setCurrentMove, indexes, history}) {
    const [isAscending, setIsAscending] = useState(true);
    let sort="";
    let start="";

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
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
        
        if (move > 0) {  
            if (move > 0) {
                start =     <button onClick={() => jumpTo(0)} className="start" title='Again'>
                                <img src={againIcon} alt ="Again"/>
                            </button>
                }
            if (move > 1) {
                sort =  <button onClick={() =>setIsAscending(!isAscending)} className="sort"  title={isAscending ? "Descending" : "Ascending"}>
                            <img src={sortIcon} alt ="Sort" className={isAscending ? "" : "asc"}/>
                        </button>
            }
            console.log(squares[indexes[move-1]]);
            let description = 
            <div className="description">
                <span className="move">0{move}</span>  
                <span className="player">{squares[indexes[move-1]]}</span> 
                <span className="square">Row: <strong>{locations[indexes[move-1]]?.row}</strong> Column: <strong>{locations[indexes[move-1]]?.col}</strong></span> 
            </div>;
        
            return (
                <li key={move}>
                <button onClick={() => jumpTo(move)} className={move === currentMove ? "current" : "" }>{description}</button>
                </li>
            );
        }
      });

    return (
        <>
            <div className="options">
                {start}
                {sort}
            </div>
            <ul style={{
                flexDirection: isAscending ? "column" : "column-reverse" 
            }}>{moves}</ul>
        </>
    )
}
