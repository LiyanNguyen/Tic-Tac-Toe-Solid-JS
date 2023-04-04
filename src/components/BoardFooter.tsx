import styles from './tile.module.css';

type Props = {
	XScore: number
	YScore: number
	TieScore: number
}

const BoardHeader = (props: Props) => {
	return (
		<div class={styles.boardFooter}>
			<div>
				<p>X</p>
				<b class={styles.score}>{props.XScore}</b>
			</div>
			<div>
				<p>TIES</p>
				<b class={styles.score}>{props.TieScore}</b>
			</div>
			<div>
				<p>O</p>
				<b class={styles.score}>{props.YScore}</b>
			</div>
		</div>
	);
};

export default BoardHeader;