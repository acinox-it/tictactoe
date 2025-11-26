function Square({ value, onClick, isWinning, disabled }) {
  return (
    <div className="col-4">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`btn square-btn w-100 ${isWinning ? 'winning-cell' : ''}`}
      >
        {value && (
          <span className={`cell ${value === 'X' ? 'x-mark' : 'o-mark'}`}>
            {value}
          </span>
        )}
      </button>
    </div>
  )
}

export default Square
