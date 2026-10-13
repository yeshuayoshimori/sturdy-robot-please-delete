
class UserInput {
    constructor(gameLogic) {
        this.gameLogic = gameLogic;
        this.addEventListeners();
    }

    addEventListeners() {
        const gameContainer = document.getElementById('game-container');
        gameContainer.addEventListener("click", this.handleClick.bind(this)); //bind= binds it to the actual class userInput and not to handleclick(event)
    }


    handleClick(event) {
        const cell = event.target.closest("td"); //collision stuff so passes thorugh the handle click, whoever click pass closest TD
        if (cell) {
            const row = parseInt(cell.dataset.row); //Dataset useful, its a wildcard to input any info u  want inside, but it stors as a string that is want you put parseInt
            const col = parseInt(cell.dataset.col); //same as above
            this.gameLogic.makeMove(row, col); //register the move
        }
    }
}

export default UserInput;