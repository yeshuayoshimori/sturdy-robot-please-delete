class GameBoard {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    renderBoard(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        const table = document.createElement("table");
        table.classList.add("game-board");

        for (let r = 0; r < this.rows; r++) {
            const row = document.createElement("tr"); //Table row
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement("td"); //table data
                cell.textContent = this.board[r][c] || '';//If null call the other one //Accessing row and column C and R
                cell.dataset.row = r;
                cell.dataset.col = c;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        container.appendChild(table); //Append it in the div in table, the tr and inside the td
    }

    updateCell(row, col, value) {
        this.board[row][col] = value;
    }
}

export default GameBoard;

//let dataset = {
  //  row:r
   // col:c,
//