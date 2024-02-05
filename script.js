// JavaScript code for Tic-Tac-Toe game

document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');
    let currentPlayer = 'X';
    let winner = null;

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                winner = cells[a].innerHTML;
                status.textContent = `${winner} is the winner`;
                status.style.color = 'black';
                status.style.fontSize = '20px' ;
                
                return true;
            }
        }

        // Check for a tie
        if (![...cells].some(cell => !cell.innerHTML) && !winner) {
            status.textContent = "It's a tie!";
            status.style.color = 'black';
            

            return true;
        }

        return false;
    }

    // Function to handle cell click
    function handleCellClick(e) {
        const cell = e.target;
        if (!cell.innerHTML && !winner) {
            cell.innerHTML = currentPlayer;
            if (!checkWinner()) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Function to reset the game
    function resetGame() {
        cells.forEach(cell => cell.innerHTML = '');
        status.textContent = '';
        currentPlayer = 'X';
        winner = null;
    }

    // Event listeners
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetBtn.addEventListener('click', resetGame);
});
