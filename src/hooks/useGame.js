import { useState } from 'react'
import { calculateWinner, getAIMove } from '../utils/gameLogic'

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameMode, setGameMode] = useState(null)
  const [difficulty, setDifficulty] = useState('medium')
  const [winner, setWinner] = useState(null)
  const [winningLine, setWinningLine] = useState([])
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })

  const handleClick = (index) => {
    if (board[index] || winner || !gameMode) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)

    const result = calculateWinner(newBoard)
    if (result) {
      setWinner(result.winner)
      setWinningLine(result.line)
      setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }))
      return
    }

    if (newBoard.every(cell => cell !== null)) {
      setWinner('draw')
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
      return
    }

    setIsXNext(!isXNext)

    // AI move for PvA mode
    if (gameMode === 'pva' && isXNext) {
      setTimeout(() => {
        const aiMove = getAIMove(newBoard, difficulty)
        if (aiMove !== null) {
          newBoard[aiMove] = 'O'
          setBoard([...newBoard])
          
          const aiResult = calculateWinner(newBoard)
          if (aiResult) {
            setWinner(aiResult.winner)
            setWinningLine(aiResult.line)
            setScores(prev => ({ ...prev, [aiResult.winner]: prev[aiResult.winner] + 1 }))
          } else if (newBoard.every(cell => cell !== null)) {
            setWinner('draw')
            setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
          }
          setIsXNext(true)
        }
      }, 500)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
    setWinningLine([])
  }

  const startGame = (mode, diff = 'medium') => {
    setGameMode(mode)
    setDifficulty(diff)
    resetGame()
  }

  const backToMenu = () => {
    setGameMode(null)
    setDifficulty('medium')
    resetGame()
  }

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 })
  }

  return {
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
  }
}
