import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"
import smallO from "../assets/smallO.png"
import smallX from "../assets/smallX.png"
import Restart from "../assets/restart.png"
import { styled } from "solid-styled-components";

interface IBoardHeader {
	xTurn: boolean
	showRestartModal: () => void
}

const BoardHeader = (props: IBoardHeader) => {
	return (
		<Container>
			<GameLogo>
				<img src={XTile}/>
				<img src={OTile}/>
			</GameLogo>
			<Turn>
				<SmallImage src={props.xTurn ? smallX : smallO}/>
				<p>TURN</p>
			</Turn>
			<Reset onClick={props.showRestartModal}>
				<SmallImage src={Restart}/>
			</Reset>
		</Container>
	);
};

export default BoardHeader;

const Container = styled("div")`
	display: flex;
	align-items: center;
	gap: 20px;
	width: 460px;

	@media screen and (max-width: 500px) {
		width: 328px;
	}
`
const GameLogo = styled("div")`
	display: flex;
	gap: 10px;
	width: 140px;

	img {
		width: 32px;
		height: 32px;
	}

	@media screen and (max-width: 500px) {
		width: 96px;
	}
`
const Turn = styled("div")`
	width: 140px;
	height: 52px;
	background-color: var(--semiDarkNavy);
	box-shadow: inset 0px -4px 0px #10212A;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding-bottom: 2px;

	p {
		color: var(--silver);
		font-weight: 700;
	}

	@media screen and (max-width: 500px) {
		width: 96px;
		height: 40px;
		padding-bottom: 3px;
	}	
`
const SmallImage = styled("img")`
	width: 20px;
	height: 20px;

	@media screen and (max-width: 500px) {
		width: 16px;
		height: 16px;
	}
`
const Reset = styled("div")`
	width: 52px;
	height: 52px;
	background: var(--silver);
	box-shadow: inset 0px -4px 0px #6B8997;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.15s ease;
	margin-left: auto;

	&:hover {
		background-color: var(--silverHover);
	}

	@media screen and (max-width: 500px) {
		width: 40px;
		height: 40px;
	}
`