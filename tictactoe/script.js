let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

const print = document.getElementById('print');
const cells = document.querySelectorAll('.cell');

function handleClick(index) {
  if (gameBoard[index - 1] === '' && gameActive) {
    gameBoard[index - 1] = currentPlayer;
    cells[index - 1].textContent = currentPlayer;
    
    if (checkWin()) {
      print.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
      print.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      print.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  print.textContent = "Player X's turn";
  cells.forEach(cell => {
    cell.textContent = '';
  });
}