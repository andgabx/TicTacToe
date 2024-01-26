    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let players = {};

    function startGame() {
        players.player1 = document.getElementById('player1').value || 'Player 1';
        players.player2 = document.getElementById('player2').value || 'Player 2';
        document.getElementById('playerForm').classList.add('hidden');
        document.getElementById('ticTacToeBoard').classList.remove('hidden');
    }

    function makeMove(square, index) {
        if (gameState[index] !== '' || !gameActive) {
            return;
        }
        gameState[index] = currentPlayer;
        square.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                endGame(gameState[a]);
                return;
            }
        }

        if (!gameState.includes('')) {
            endGame('Draw');
        }
    }

    function endGame(winner) {
        gameActive = false;
        let winnerName = winner === 'X' ? players.player1 : players.player2;
        if (winner === 'Draw') {
            winnerName = 'Tied';
        } else {
            winnerName += ' won!';
        }
        document.getElementById('winnerAnnouncement').innerText = winnerName;
        document.getElementById('winnerModal').classList.remove('hidden');
    }
    