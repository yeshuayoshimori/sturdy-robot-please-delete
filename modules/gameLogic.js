
class GameLogic {

    constructor(gameBoard) {  //play with logic using the col and rows
        this.gameBoard = gameBoard;
        this.currentPlayer = "X";
        this.gameOver = false;
        this.turnCount = 0;

    }

    makeMove(row, col) {
        if (this.gameOver) return; //Checks for state if you are dead/lost

        if (this.gameBoard.board[row][col] === null) { //checks if there is a value of null (nothing) in the board || === checks if there is empty
            this.gameBoard.updateCell(row, col, this.currentPlayer); //update cell in updateCell
            this.gameBoard.renderBoard('game-container'); //not ideal, redndering the board

            if (this.checkForWin()) {  //can't click anymore and you win!
                this.gameOver = true;
                alert(`Player ${this.currentPlayer} wins!`); //`literal string` || can use recurssion for MineSweeper
            } else if (this.checkForDraw()) {
                this.gameOver = true;
                alert("It's a draw!");
            } else {
                this.switchPlayer();
                this.turnCount++;
            }
        }
    }

    checkForWin() {
        for (let r = 0; r < this.gameBoard.rows; r++) {
            if (this.checkLine(this.gameBoard.board[r][0], this.gameBoard.board[r][1], this.gameBoard.board[r][2])) {
                return true;
            }
        }

        for (let c = 0; c < this.gameBoard.rows; c++) {
            if (this.checkLine(this.gameBoard.board[0][c], this.gameBoard.board[1][c], this.gameBoard.board[2][c])) {
                return true;
            }
        }

        if (this.checkLine(this.gameBoard.board[0][0], this.gameBoard.board[1][1], this.gameBoard.board[2][2])) {
            return true;
        }
        if (this.checkLine(this.gameBoard.board[0][2], this.gameBoard.board[1][1], this.gameBoard.board[2][0])) {
            return true;
        }

        return false;
    }

    checkLine(a, b, c) {
        return a !== null && a == b && a == c; //check
    }

    checkForDraw() {
        if (this.turnCount >= 8) { //for 9

            return true;
        }
        //for (let r = 0; r < this.gameBoard.rows; r++) {
        //    for (let c = 0; c < this.gameBoard.cols; c++) { //can also check for a number of stuff like 9 boards, then its done so it doesnt srpass 9

        //    }
        return false;
    }
        

    switchPlayer() {
        //if (this.currentPlayer === "X") { //cheks fo x 
        //     this.currentPlayer = "o"; //switch to O
        // } else {
        //     this.currentPlayer = "X";
        // }
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"; //?= if true X switch O. else X , so like thiscurrentPlayer === X ? then O, if not X
    }

}


export default GameLogic;