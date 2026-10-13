import GameBoard from '../modules/gameBoard.js';
import UserInput from '../modules/userinput.js';
import GameLogic from '../modules/gameLogic.js';

class GameEngine {

	constructor(containerId) {
		this.gameBoard = new GameBoard(3, 3);
		this.gameLogic = new GameLogic(this.gameBoard);
		this.userinput = new UserInput(this.gameLogic);

		this.gameBoard.renderBoard(containerId);
	}
}

export default GameEngine;