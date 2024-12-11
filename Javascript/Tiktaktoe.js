document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('board');
    const winnerElement = document.getElementById('winner');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
  
    function createBoard() {
      boardElement.innerHTML = '';
      board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => makeMove(index));
        boardElement.appendChild(cellElement);
      });
    }
  
    function makeMove(index) {
      if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        createBoard();
        const winner = checkWinner();
        if (winner) {
          winnerElement.textContent = `${winner} wins!`;
        } else if (!board.includes('')) {
          winnerElement.textContent = 'It\'s a draw!';
        }
      }
    }
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
  
      return null;
    }
  
    function resetGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      winnerElement.textContent = '';
      createBoard();
    }
  
    // Ensure the reset button is properly linked
    window.resetGame = resetGame;
  
    // Initialize the board on page load
    createBoard();
  });
  