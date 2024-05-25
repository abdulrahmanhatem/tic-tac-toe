
import { useState, createContext, lazy, Suspense } from 'react'
const Board = lazy(() => import('./Board'))
const Info = lazy(() => import('./Info'))
const Settings = lazy(() => import('./Settings'))

const SettingsContext = createContext()

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const [indexes, setIndexes] = useState([]);
    const [settings, setSettings] = useState({
      isSFXMute: false,
      sFXVolume: 50
    });
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function getCurrentSquare(i) {
      const nextIndexes = indexes.slice();
      setIndexes([...nextIndexes, i]) 
  
    }
  
    return (
      <div className="game">
          <div className="game-board">
            <Suspense fallback={<></>}>
              <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} getCurrent={getCurrentSquare} settings={settings}/>
            </Suspense>
          </div>
          {
           
           indexes.length > 0 &&
            <div className="game-info">
              <Suspense fallback={<></>}>
                <Info currentMove={currentMove} indexes={indexes} history={history} setCurrentMove={setCurrentMove}/>
              </Suspense>
          </div>
          }

        <span className='settings'>
          <Suspense fallback={<></>}>
            <Settings settings = {settings} setSettings={setSettings}/>
          </Suspense>
        </span>
      </div>
    )
  }