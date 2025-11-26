export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]
  for (let line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line }
    }
  }
  return null
}

export const getAIMove = (squares, difficulty = 'hard') => {
  const availableMoves = squares.reduce((acc, cell, idx) => {
    if (cell === null) acc.push(idx)
    return acc
  }, [])

  // Easy: Random move
  if (difficulty === 'easy') {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)]
  }

  // Medium: 50% optimal, 50% random
  if (difficulty === 'medium') {
    if (Math.random() < 0.5) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)]
    }
  }

  // Hard: Minimax algorithm (unbeatable)
  const minimax = (board, isMaximizing) => {
    const result = calculateWinner(board)
    if (result?.winner === 'O') return 10
    if (result?.winner === 'X') return -10
    if (board.every(cell => cell !== null)) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'O'
          const score = minimax(board, false)
          board[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'X'
          const score = minimax(board, true)
          board[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  let bestScore = -Infinity
  let bestMove = null
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      squares[i] = 'O'
      const score = minimax(squares, false)
      squares[i] = null
      if (score > bestScore) {
        bestScore = score
        bestMove = i
      }
    }
  }
  return bestMove
}

