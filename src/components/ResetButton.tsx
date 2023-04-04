
import styles from './tile.module.css';
import Redo from "../assets/Redo.png"

type Props = {
	resetBoard: () => void
}

const ResetButton = (props: Props) => {
	return (
		<div onClick={props.resetBoard} class={styles.resetButton}>
			<img class={styles.smallImage} src={Redo} />
		</div>
	);
};

export default ResetButton;