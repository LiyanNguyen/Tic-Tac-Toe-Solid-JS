import { For, createSignal } from 'solid-js';
import styles from './tile.module.css';
import Tile from './Tile';

const GameBoard = () => {
	const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
	const [xTurn, setXTurn] = createSignal(true)

	const checkWinner = () => {
		if (boardArray[0] === boardArray[1] && boardArray[2]) {
			alert("X WIN!")
			// END THE GAME
			// PUT THE MODAL IN FRONT
		}
	}

	return (
		<div class={styles.gameBoard}>
			<For each={boardArray}>
				{(value, index) => <Tile
					xTurn={xTurn()}
					setXTurn={setXTurn}
					boardArray={boardArray}
					tileValue={value}
					tileIndex={index()}
					checkWinner={checkWinner}
				/>}
			</For>
		</div>
	);
};

export default GameBoard;