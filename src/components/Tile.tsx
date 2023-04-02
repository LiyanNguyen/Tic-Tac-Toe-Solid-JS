import { createSignal, Show } from 'solid-js';
import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"
import OHover from "../assets/OHover.png"
import XHover from "../assets/XHover.png"

type Props = {
	xTurn: boolean
	setXTurn: (value: boolean) => void
	boardArray: number[]
	tileValue: number
	tileIndex: number
	checkWinner: () => void
}

const Tile = (props: Props) => {
	const [isHovered, setIsHovered] = createSignal(false);
	const [tileValue, setTileValue] = createSignal(props.tileValue)

	const takeThisTile = async () => {
		if (tileValue() === 0) {
			setTileValue(props.xTurn? setTileValue(1) : setTileValue(2))
			props.xTurn? 
				props.boardArray[props.tileIndex] = 1 :
				props.boardArray[props.tileIndex] = 2
			props.setXTurn(!props.xTurn)
		}
	}
	
	return (
		<div
			class={styles.tile}
			onClick={() => takeThisTile().then(props.checkWinner)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* when tile is not yet taken */}
			<Show when={tileValue() === 0 && isHovered()}>
				<img class={styles.image} src={props.xTurn? XHover : OHover} />
			</Show>
			{/* when tile is already taken */}
			<Show when={tileValue() > 0}>
				<img class={styles.image} src={tileValue() === 1 ? XTile : OTile} />
			</Show>
		</div>
	);
};

export default Tile;