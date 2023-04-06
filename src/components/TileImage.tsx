import XTile from "../assets/XTile.png"
import OTile from "../assets/OTile.png"
import styles from './tile.module.css';
import { createSignal, onMount } from 'solid-js';

type Props = {
	tileValue: number
}

const TileImage = (props: Props) => {
	const [scale, setScale] = createSignal(0)

	onMount(() => {
		setInterval(() => {
			if (scale() <= 0.9) {
				setScale(prevScale => prevScale + 0.1);
			}
		});
	})
	
	return (
		<img class={styles.image} style={{scale:scale()}} src={props.tileValue === 1? XTile : OTile} />
	)
}

export default TileImage