import type { Component } from 'solid-js';
import styles from './tile.module.css';
import Redo from "../assets/Redo.png"

const ResetButton: Component = () => {
	// SIGNAL HERE

	return (
		<div class={styles.resetButton}>
			<img class={styles.smallImage} src={Redo} />
		</div>
	);
};

export default ResetButton;