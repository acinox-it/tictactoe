import Square from './Square'

function Board({ board, onSquareClick, winningLine, winner }) {
  return (
    <div className="game-board mb-4">
      <div className="row g-2">
        {board.map((cell, index) => (
          <Square
            key={index}
            value={cell}
            onClick={() => onSquareClick(index)}
            isWinning={winningLine.includes(index)}
            disabled={cell !== null || winner !== null}
          />
        ))}
      </div>
    </div>
  )
}

export default Board
