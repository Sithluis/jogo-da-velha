let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X'; // Definindo o jogador atual

function startGame() {
    // Limpa o tabuleiro
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X'; // Reinicia o jogador atual para 'X'
    displayBoard();
}

function displayBoard() {
    let boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < board[i].length; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = board[i][j];
            cell.onclick = function() {
                makeMove(i, j);
            };
            row.appendChild(cell);
        }
        boardElement.appendChild(row);
    }
}

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        displayBoard();

        if (checkWinner(row, col, currentPlayer)) {
            alert('Jogador ' + currentPlayer + ' venceu!');
            startGame();
        } else {
            switchPlayer();
        }
    } else {
        alert('Posição ocupada. Escolha outra posição.');
    }
}

function checkWinner(row, col, player) {
    // Implemente a lógica para verificar se há um vencedor
    // Retorna true se o jogador vencer, senão retorna false
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

startGame();


function checkWinner(row, col, player) {
    // Verificar linha
    if (
        (board[row][0] === player && board[row][1] === player && board[row][2] === player) ||
        // Verificar coluna
        (board[0][col] === player && board[1][col] === player && board[2][col] === player) ||
        // Verificar diagonal principal
        (row === col && board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        // Verificar diagonal secundária
        (row + col === 2 && board[0][2] === player && board[1][1] === player && board[2][0] === player)
    ) {
        return true; // Se alguma das condições acima for verdadeira, o jogador venceu
    }
    return false; // Caso contrário, não há vencedor ainda
}