import type { Component } from 'solid-js';
import ResetButton from '../components/ResetButton';
import TurnIndicator from '../components/TurnIndicator';
import styles from './tile.module.css';
import OTile from "../assets/OTile.png"
import XTile from "../assets/XTile.png"

const BoardHeader: Component = () => {
	return (
		<div class={styles.boardHeader}>
			<div class={styles.headerLeft}>
				<img src={XTile} class={styles.headerLeftImage} />
				<img src={OTile} class={styles.headerLeftImage} />
			</div>
			<TurnIndicator />
			<ResetButton />
		</div>
	);
};

export default BoardHeader;