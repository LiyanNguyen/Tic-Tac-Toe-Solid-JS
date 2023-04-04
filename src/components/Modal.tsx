import { Setter } from 'solid-js/types/reactive/signal';
import styles from './tile.module.css';

type Props = {
	setOpenModal: Setter<boolean>
	resetBoard: () => void
	playNextRound: () => void
	testText: string
}

const Modal = (props: Props) => {
	let winner = ""
	// props.XhasWon? winner = "X" : winner = "O"
	let headerText = props.testText === "R" ? "RESTART GAME?" : `${props.testText} TAKES THE ROUND`
	let leftButtonText = props.testText === "R" ? "NO, CANCEL" : "QUIT"
	let rightButtonText = props.testText === "R" ? "YES, RESTART" : "NEXT ROUND"

	const confirmResetBoard = () => {
		props.resetBoard()
		props.setOpenModal(false)
	}
	
	return (
		<div class={styles.blackLayer}>
			<div class={styles.modalContainer}>
				<p class={styles.headerText} style={{ color: "var(--silver)" }}>{headerText}</p>
				<div class={styles.buttonContainer}>
					<button class={styles.leftButton} onClick={() => props.setOpenModal(false)}>{leftButtonText}</button>
					<button class={styles.rightButton} onClick={props.testText === "R" ? confirmResetBoard : props.playNextRound} >{rightButtonText}</button>
				</div>
			</div>
		</div>
	)
}

export default Modal