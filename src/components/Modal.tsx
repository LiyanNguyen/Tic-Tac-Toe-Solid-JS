import { Setter } from 'solid-js/types/reactive/signal';
import { Show } from 'solid-js';
import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"

type Props = {
	setOpenModal: Setter<boolean>
	resetScores: () => void
	playNextRound: () => void
	// 0 if tie, 1 if X wins, 2 if O wins, 3 if restarting game
	modalCondition: number
}

const Modal = (props: Props) => {

	let headerText = ""
	if (props.modalCondition === 0) headerText = "round tied"
	if (props.modalCondition === 1 || props.modalCondition === 2) headerText = "takes the round"
	if (props.modalCondition === 3) headerText = "restart game?"

	let leftButtonText = ""
	if (props.modalCondition === 3) { leftButtonText = "no, cancel" } else { leftButtonText = "quit"}
	
	let rightButtonText = ""
	if (props.modalCondition === 3) { rightButtonText = "yes, restart" } else { rightButtonText = "next round" }
	
	const confirmResetBoard = () => {
		props.playNextRound()
		props.resetScores()
	}

	const headerStyle = () => {
		if (props.modalCondition === 1) return { color: "var(--lightBlue)" }
		if (props.modalCondition === 2) return { color: "var(--lightYellow)" }
		else return { color: "var(--silver)" }
	}
	
	return (
		<div class={styles.blackLayer}>
			<div class={styles.modalContainer}>
				<div class={styles.headerContainer}>
					<Show when={props.modalCondition === 1 || props.modalCondition === 2}>
						<img src={props.modalCondition == 1 ? XTile : OTile} class={styles.image} />
					</Show>
					<p class={styles.headerText} style={headerStyle()}>{headerText}</p>

				</div>
				<div class={styles.buttonContainer}>
					<button class={styles.leftButton} onClick={() => props.setOpenModal(false)}>{leftButtonText}</button>
					<button class={styles.rightButton} onClick={props.modalCondition === 3 ? confirmResetBoard : props.playNextRound}>{rightButtonText}</button>
				</div>
			</div>
		</div>
	)
}

export default Modal