function GameStatus({ winner, isXNext, gameMode, difficulty, scores }) {
  const getDifficultyEmoji = () => {
    switch(difficulty) {
      case 'easy': return '😊'
      case 'medium': return '🤔'
      case 'hard': return '😈'
      default: return '🤖'
    }
  }

  const getDifficultyLabel = () => {
    switch(difficulty) {
      case 'easy': return 'Easy'
      case 'medium': return 'Medium'
      case 'hard': return 'Hard'
      default: return ''
    }
  }

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="h3 fw-bold text-dark mb-2">
          <span className="game-title">❌⭕ Tic Tac Toe</span>
        </h1>
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <span className="badge bg-secondary">
            {gameMode === 'pvp' ? '👥 Player vs Player' : `${getDifficultyEmoji()} Player vs AI`}
          </span>
          {gameMode === 'pva' && (
            <span className="badge bg-info">
              {getDifficultyLabel()}
            </span>
          )}
        </div>
        
        {winner ? (
          <div className="alert alert-success fw-semibold py-2 animate-bounce mb-3" role="alert">
            {winner === 'draw' ? "🤝 It's a Draw!" : `🎉 ${winner} Wins!`}
          </div>
        ) : (
          <div className="alert alert-info py-2 current-player-alert mb-3" role="alert">
            Current Player: <span className="badge bg-primary fs-6 pulse">{isXNext ? 'X' : 'O'}</span>
          </div>
        )}
      </div>

      {/* Score Board */}
      <div className="score-board mb-3">
        <div className="row g-2 text-center">
          <div className="col-4">
            <div className="score-card score-x">
              <div className="score-label">Player X</div>
              <div className="score-value">{scores.X}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="score-card score-draw">
              <div className="score-label">Draws</div>
              <div className="score-value">{scores.draws}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="score-card score-o">
              <div className="score-label">Player O</div>
              <div className="score-value">{scores.O}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameStatus
