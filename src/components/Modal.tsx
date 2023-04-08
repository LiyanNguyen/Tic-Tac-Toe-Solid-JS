import { Setter } from 'solid-js/types/reactive/signal';
import { Show, createSignal, onMount } from 'solid-js';
import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"
import { styled } from "solid-styled-components";

interface IModal {
	setOpenModal: Setter<boolean>
	resetScores: () => void
	playNextRound: () => void
	// 0 if tie, 1 if X wins, 2 if O wins, 3 if restarting game
	modalCondition: number
}

const Modal = (props: IModal) => {
	const { setOpenModal, resetScores, playNextRound, modalCondition } = props
	const [headerText, setHeaderText] = createSignal("")
	const [leftButtonText, setLeftButtonText] = createSignal("")
	const [rightButtonText, setRightButtonText] = createSignal("")

	onMount(() => {
		if (modalCondition === 0) setHeaderText("round tied")
		if (modalCondition === 1 || modalCondition === 2) setHeaderText("takes the round")
		if (modalCondition === 3) setHeaderText("restart game?")

		if (modalCondition === 3) { setLeftButtonText("no, cancel") } else { setLeftButtonText("quit") }

		if (modalCondition === 3) { setRightButtonText("yes, restart") } else { setRightButtonText("next round") }
	})
	
	const confirmResetBoard = () => {
		playNextRound()
		resetScores()
	}

	const headerStyle = () => {
		if (modalCondition === 1) return { color: "var(--lightBlue)" }
		if (modalCondition === 2) return { color: "var(--lightYellow)" }
		else return { color: "var(--silver)" }
	}
	
	return (
		<BlackLayer>
			<ModalContainer>
				<div class="header">
					<Show when={modalCondition === 1 || modalCondition === 2}>
						<img src={modalCondition == 1 ? XTile : OTile}/>
					</Show>
					<p class="headerText" style={headerStyle()}>{headerText()}</p>
				</div>
				<div class="buttonContainer">
					<button class="leftButton" onClick={() => setOpenModal(false)}>{leftButtonText()}</button>
					<button class="rightButton" onClick={modalCondition === 3 ? confirmResetBoard : playNextRound}>{rightButtonText()}</button>
				</div>
			</ModalContainer>
		</BlackLayer>
	)
}

export default Modal

const BlackLayer = styled("div")`
	background: rgba(0,0,0,0.5); 
	position: absolute; 
	z-index: 1; 
	width: 100%; 
	height: 100%; 
	display: flex; 
	align-items: center; 
	justify-content: center;
`

const ModalContainer = styled("div")`
	background-color: var(--semiDarkNavy);
	height: 266px;
	width: 100%;
	display: flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	gap: 24px;

	.header {
		display: flex;
		gap: 24px;
		align-items: center;
	}

	.headerText {
		font-size: 50px;
		font-weight:700;
		text-transform: uppercase;
	}

	img {
		width: 64px;
		height: 64px;
		transition: 0.25s ease;
	}

	.buttonContainer {
		display: flex;
		gap: 16px;
	}

	.leftButton {
		background-color: var(--silver);
		box-shadow: inset 0px -4px 0px #6B8997;
		border-radius: 10px;
		padding: 15px;
		border: none;
		font-weight: 700;
		font-size: 16px;
		text-transform: uppercase;
		transition: 0.15s ease;

		&:hover {
			background-color: var(--silverHover);
		}
	}

	.rightButton {
		background-color: var(--lightYellow);
		box-shadow: inset 0px -4px 0px #CC8B13;
		border-radius: 10px;
		padding: 15px;
		border: none;
		font-weight: 700;
		font-size: 16px;
		text-transform: uppercase;
		transition: 0.15s ease;

		&: hover {
			background-color: var(--lightYellowHover);
		}
	}

	@media screen and (max-width: 500px) {
		img {
			width: 40px;
			height: 40px;
		}
		
		.headerText {
			font-size: 24px;
		}
	}
`