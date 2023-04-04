
import styles from './tile.module.css';
import Redo from "../assets/Redo.png"

type Props = {
	showRestartModal: () => void
}

const ResetButton = (props: Props) => {
	return (
		<div onClick={props.showRestartModal} class={styles.resetButton}>
			<img class={styles.smallImage} src={Redo} />
		</div>
	);
};

export default ResetButton;