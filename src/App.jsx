import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useGame } from './hooks/useGame'
import Menu from './components/Menu'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import GameControls from './components/GameControls'

function App() {
  const {
    board,
    isXNext,
    gameMode,
    difficulty,
    winner,
    winningLine,
    scores,
    handleClick,
    resetGame,
    startGame,
    backToMenu,
    resetScores
  } = useGame()

  if (!gameMode) {
    return <Menu onStartGame={startGame} />
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="game-container">
            <GameStatus 
              winner={winner} 
              isXNext={isXNext} 
              gameMode={gameMode}
              difficulty={difficulty}
              scores={scores}
            />
            <Board 
              board={board}
              onSquareClick={handleClick}
              winningLine={winningLine}
              winner={winner}
            />
            <GameControls 
              onReset={resetGame}
              onBackToMenu={backToMenu}
              onResetScores={resetScores}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

