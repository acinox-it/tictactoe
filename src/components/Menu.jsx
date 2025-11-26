import { useState } from 'react'

function Menu({ onStartGame }) {
  const [selectedMode, setSelectedMode] = useState(null)

  const handleModeSelect = (mode) => {
    if (mode === 'pvp') {
      onStartGame('pvp')
    } else {
      setSelectedMode('pva')
    }
  }

  const handleDifficultySelect = (difficulty) => {
    onStartGame('pva', difficulty)
    setSelectedMode(null)
  }

  if (selectedMode === 'pva') {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-5">
            <div className="game-container text-center menu-container">
              <button 
                onClick={() => setSelectedMode(null)}
                className="btn btn-link text-decoration-none mb-3"
              >
                ⬅️ Back
              </button>
              <div className="mb-4">
                <h2 className="display-6 fw-bold text-dark mb-3">Choose Difficulty</h2>
                <p className="text-muted">Select AI difficulty level</p>
              </div>
              <div className="d-grid gap-3">
                <button
                  onClick={() => handleDifficultySelect('easy')}
                  className="btn btn-success btn-lg py-3 fw-semibold menu-btn difficulty-btn"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-4">😊</span>
                    <div className="flex-grow-1 text-center">
                      <div className="fw-bold">Easy</div>
                      <small className="text-white-50">Random moves</small>
                    </div>
                    <span></span>
                  </div>
                </button>
                <button
                  onClick={() => handleDifficultySelect('medium')}
                  className="btn btn-warning btn-lg py-3 fw-semibold menu-btn difficulty-btn"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-4">🤔</span>
                    <div className="flex-grow-1 text-center">
                      <div className="fw-bold">Medium</div>
                      <small className="text-white-50">Balanced play</small>
                    </div>
                    <span></span>
                  </div>
                </button>
                <button
                  onClick={() => handleDifficultySelect('hard')}
                  className="btn btn-danger btn-lg py-3 fw-semibold menu-btn difficulty-btn"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-4">😈</span>
                    <div className="flex-grow-1 text-center">
                      <div className="fw-bold">Hard</div>
                      <small className="text-white-50">Unbeatable AI</small>
                    </div>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="game-container text-center menu-container">
            <div className="mb-4">
              <h1 className="display-3 fw-bold text-dark mb-3">
                <span className="game-title-large">❌⭕</span>
              </h1>
              <h2 className="display-5 fw-bold text-dark">Tic Tac Toe</h2>
              <p className="text-muted mt-2">Choose your game mode</p>
            </div>
            <div className="d-grid gap-3">
              <button
                onClick={() => handleModeSelect('pvp')}
                className="btn btn-primary btn-lg py-4 fw-semibold menu-btn"
              >
                <span className="fs-4 me-2">👥</span> 
                <span className="fs-5">Player vs Player</span>
              </button>
              <button
                onClick={() => handleModeSelect('pva')}
                className="btn btn-secondary btn-lg py-4 fw-semibold menu-btn"
              >
                <span className="fs-4 me-2">🤖</span> 
                <span className="fs-5">Player vs AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
