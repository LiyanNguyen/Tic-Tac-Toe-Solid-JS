import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"
import smallO from "../assets/smallO.png"
import smallX from "../assets/smallX.png"
import Restart from "../assets/restart.png"

type Props = {
	xTurn: boolean
	showRestartModal: () => void
}

const BoardHeader = (props: Props) => {
	return (
		<div class={styles.boardHeader}>
			<div class={styles.headerLeft}>
				<img src={XTile} class={styles.headerLeftImage} />
				<img src={OTile} class={styles.headerLeftImage} />
			</div>
			<div class={styles.turnIndicator}>
				<img class={styles.smallImage} src={props.xTurn ? smallX : smallO} />
				<p>TURN</p>
			</div>
			<div onClick={props.showRestartModal} class={styles.resetButton}>
				<img class={styles.smallImage} src={Restart} />
			</div>
		</div>
	);
};

export default BoardHeader;