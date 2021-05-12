const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    handlePlayerChange();
}
function handlePlayerChange() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    statusDisplay.innerHTML = currentPlayerTurn();
    handleResultValidation();
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if ((a === 'X' && b === 'X' && c === 'X') ||
            (a === 'O' && b === 'O' && c === 'O')) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        if (currentPlayer === 'X') {
            statusDisplay.innerHTML = 'O has won!';
        }
        if (currentPlayer === 'O') {
            statusDisplay.innerHTML = 'X has won!';
        }
        gameActive = false;
        return;
    }
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
