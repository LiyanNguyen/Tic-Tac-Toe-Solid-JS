import { createSignal, Show } from 'solid-js';
import styles from './tile.module.css';
import OHover from "../assets/OHover.png"
import XHover from "../assets/XHover.png"
import TileImage from './TileImage';

type Props = {
	xTurn: boolean
	setXTurn: (value: boolean) => void
	boardArray: any
	tileValue: number
	tileIndex: number
	checkWinner: () => void
}

const Tile = (props: Props) => {
	const [isHovered, setIsHovered] = createSignal(false);
	const [tileValue, setTileValue] = createSignal(props.tileValue)

	const takeThisTile = () => {
		if (tileValue() === 0) {
			setTileValue(props.xTurn? setTileValue(1) : setTileValue(2))
			props.xTurn? 
				props.boardArray[props.tileIndex] = 1 :
				props.boardArray[props.tileIndex] = 2
			props.setXTurn(!props.xTurn)
			props.checkWinner()
		}
	}
	
	return (
		<div
			class={styles.tile}
			onClick={takeThisTile}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* when tile is not yet taken */}
			<Show when={tileValue() === 0 && isHovered()}>
				<img class={styles.image} src={props.xTurn? XHover : OHover} />
			</Show>
			{/* when tile is already taken */}
			<Show when={tileValue() > 0}>
				<TileImage tileValue={tileValue()} />
			</Show>
		</div>
	);
};

export default Tile;