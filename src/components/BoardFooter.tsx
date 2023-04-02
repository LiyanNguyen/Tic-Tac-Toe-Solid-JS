import type { Component } from 'solid-js';
import styles from './tile.module.css';

const BoardHeader: Component = () => {
	// SIGNAL HERE

	return (
		<div class={styles.boardFooter}>
			<div>
				<p>X (YOU)</p>
				<b class={styles.score}>0</b>
			</div>
			<div>
				<p>TIES</p>
				<b class={styles.score}>0</b>
			</div>
			<div>
				<p>O (CPU)</p>
				<b class={styles.score}>0</b>
			</div>
		</div>
	);
};

export default BoardHeader;