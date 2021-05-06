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
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
