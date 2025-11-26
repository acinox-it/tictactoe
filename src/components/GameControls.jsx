function GameControls({ onReset, onBackToMenu, onResetScores }) {
  return (
    <div className="d-flex gap-2 justify-content-center flex-wrap">
      <button
        onClick={onReset}
        className="btn btn-success px-4 py-2 fw-semibold control-btn"
      >
        🔄 New Round
      </button>
      <button
        onClick={onResetScores}
        className="btn btn-warning px-4 py-2 fw-semibold control-btn"
      >
        📊 Reset Scores
      </button>
      <button
        onClick={onBackToMenu}
        className="btn btn-dark px-4 py-2 fw-semibold control-btn"
      >
        ⬅️ Menu
      </button>
    </div>
  )
}

export default GameControls
