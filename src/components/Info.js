import { useState } from 'react';

export default function Info({currentMove, setCurrentMove, indexes, history}) {
    const [isAscending, setIsAscending] = useState(true);
    let sort="";

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
          if (move > 1) {
            sort = <button onClick={() =>setIsAscending(!isAscending)} className="sort">{isAscending ? "Descending" : "Ascending"}</button>
          }
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
            {sort}
                <button onClick={() => jumpTo(0)} className="start">Start { history.length > 1 ? "Again" : "Game"}</button>
            </div>
            <ul style={{
                flexDirection: isAscending ? "column" : "column-reverse" 
            }}>{moves}</ul>
        </>
    )
}
