import styles from './tile.module.css';
import smallO from "../assets/smallO.png"
import smallX from "../assets/smallX.png"

type Props = {
	xTurn: boolean
}

const TurnIndicator = (props: Props) => {
	return (
		<div class={styles.turnIndicator}>
			<img class={styles.smallImage} src={props.xTurn ? smallX : smallO} />
			<p>TURN</p>
		</div>
	);
};

export default TurnIndicator;