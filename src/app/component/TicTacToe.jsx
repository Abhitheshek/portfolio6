import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0, ties: 0 });

  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Handle player's move
  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setCurrentPlayer("O");

    if (checkWinner(newBoard, "X")) {
      setGameOver(true);
      setWinner("X");
      setScore({ ...score, X: score.X + 1 });
      return;
    }

    if (isBoardFull(newBoard)) {
      setGameOver(true);
      setScore({ ...score, ties: score.ties + 1 });
      return;
    }

    // AI's turn
    setTimeout(() => makeAIMove(newBoard), 500);
  };

  // AI move using minimax algorithm
  const makeAIMove = (currentBoard) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = "O";
        let score = minimax(currentBoard, 0, false);
        currentBoard[i] = "";
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    if (bestMove !== null) {
      const newBoard = [...currentBoard];
      newBoard[bestMove] = "O";
      setBoard(newBoard);
      setCurrentPlayer("X");

      if (checkWinner(newBoard, "O")) {
        setGameOver(true);
        setWinner("O");
        setScore({ ...score, O: score.O + 1 });
        return;
      }

      if (isBoardFull(newBoard)) {
        setGameOver(true);
        setScore({ ...score, ties: score.ties + 1 });
      }
    }
  };

  // Minimax algorithm
  const minimax = (board, depth, isMaximizing) => {
    if (checkWinner(board, "O")) return 10 - depth;
    if (checkWinner(board, "X")) return depth - 10;
    if (isBoardFull(board)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "O";
          bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
          board[i] = "";
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "X";
          bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
          board[i] = "";
        }
      }
      return bestScore;
    }
  };

  // Check for winner
  const checkWinner = (board, player) => {
    return winCombos.some(combo => {
      return combo.every(index => board[index] === player);
    });
  };

  // Check if board is full
  const isBoardFull = (board) => {
    return board.every(cell => cell !== "");
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameOver(false);
    setWinner(null);
  };

  

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="w-full min-h-screen font-sans bg-gradient-to-br from-stone-900 to-slate-800 text-white flex items-center justify-center rounded-lg"
  >
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-md w-full p-6"
    >
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-orange-600 font-extrabold text-center mb-8"
      >
        Game
      </motion.h1>

      {/* Game Board */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {board.map((cell, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1 // Staggered animation for cells
            }}
            whileHover={{ 
              scale: cell === "" && !gameOver ? 1.05 : 1,
              backgroundColor: cell === "" && !gameOver ? "#374151" : ""
            }}
            onClick={() => handleClick(index)}
            disabled={cell !== "" || gameOver}
            className={`h-24 text-4xl font-bold rounded-lg transition-colors duration-300
              ${cell === "" && !gameOver ? "hover:bg-gray-700" : ""}
              ${cell === "X" ? "text-green-500" : "text-red-500"}
              bg-gray-800`}
          >
            {cell && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                {cell}
              </motion.span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Game Status */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-8"
      >
        {gameOver ? (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-2xl font-bold"
          >
            {winner ? `${winner === "X" ? "You won!" : "AI won!"}` : "It's a tie!"}
          </motion.p>
        ) : (
          <motion.p
            animate={{
              scale: currentPlayer === "X" ? [1, 1.05, 1] : 1
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-2xl"
          >
            {currentPlayer === "X" ? "Your turn" : "AI thinking..."}
          </motion.p>
        )}
      </motion.div>

      {/* Reset Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "#ea580c"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={resetGame}
        className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-xl font-bold transition-colors duration-300"
      >
        New Game
      </motion.button>
    </motion.div>
  </motion.div>
  );
};

export default TicTacToe;
