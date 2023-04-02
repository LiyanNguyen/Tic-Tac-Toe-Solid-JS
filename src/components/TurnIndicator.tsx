import { Component } from 'solid-js';
import styles from './tile.module.css';
import smallO from "../assets/smallO.png"
import smallX from "../assets/smallX.png"

const TurnIndicator: Component = () => {
	// SIGNAL HERE

	return (
		<div class={styles.turnIndicator}>
			<img class={styles.smallImage} src={smallX} />
			<p>TURN</p>
		</div>
	);
};

export default TurnIndicator;