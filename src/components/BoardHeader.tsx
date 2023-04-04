import ResetButton from '../components/ResetButton';
import TurnIndicator from '../components/TurnIndicator';
import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"

type Props = {
	xTurn: boolean
	resetBoard: () => void
}

const BoardHeader = (props: Props) => {
	return (
		<div class={styles.boardHeader}>
			<div class={styles.headerLeft}>
				<img src={XTile} class={styles.headerLeftImage} />
				<img src={OTile} class={styles.headerLeftImage} />
			</div>
			<TurnIndicator xTurn={props.xTurn}/>
			<ResetButton resetBoard={props.resetBoard} />
		</div>
	);
};

export default BoardHeader;