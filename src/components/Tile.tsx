import { createSignal, Show } from 'solid-js';
import { styled } from "solid-styled-components";
import OHover from "../assets/OHover.png"
import XHover from "../assets/XHover.png"
import TileImage from './TileImage';

interface ITile {
	xTurn: boolean
	setXTurn: (value: boolean) => void
	boardArray: any
	tileValue: number
	tileIndex: number
	checkWinner: () => void
}

const Tile = (props: ITile) => {
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
		<Container onClick={takeThisTile} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Show when={tileValue() === 0 && isHovered()}>
				<img src={props.xTurn? XHover : OHover} />
			</Show>
			<Show when={tileValue() > 0}>
				<TileImage tileValue={tileValue()} />
			</Show>
		</Container>
	);
};

export default Tile;

const Container = styled("div")`
  width: 140px;
	height: 140px;
	background-color: var(--semiDarkNavy);
	box-shadow: inset 0px -8px 0px #10212A;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	img {
		width: 64px;
		height: 64px;
		transition: 0.25s ease;
	}

	@media screen and (max-width: 500px) {
		width: 96px;
		height: 96px;
		border-radius: 10px;

		img {
			width: 40px;
			height: 40px;
		}
	}
`