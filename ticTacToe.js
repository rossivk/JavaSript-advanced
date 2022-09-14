function ticTacToe(input) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ').map(num => Number(num));
        if (!board[row][col]) {
            board[row][col] = player;
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        for (let j = 0; j < board.length; j++) {
            for (let k = 0; k < board[j].length; k++) {
            }
            player = player === 'X' ? 'O' : 'X';
        }
        counter++;

        if (counter === 9) {
            console.log(`The game ended! Nobody wins :(`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        }

        if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
            console.log(`Player O wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        } else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
            console.log(`Player X wins!`);
            board.forEach(element => console.log(element.join('\t')));
            return;
        }

    }
}
