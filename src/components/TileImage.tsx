import XTile from "../assets/XTile.png"
import OTile from "../assets/OTile.png"
import { createSignal, onMount } from 'solid-js';
import { styled } from "solid-styled-components";

interface ITileImage {
	tileValue: number
}

const TileImage = (props: ITileImage) => {
	const [scale, setScale] = createSignal(0)

	onMount(() => {
		setInterval(() => {
			if (scale() <= 0.9) {
				setScale(prevScale => prevScale + 0.1);
			}
		});
	})
	
	return (
		<Image style={{scale:scale()}} src={props.tileValue === 1? XTile : OTile} />
	)
}

export default TileImage

const Image = styled("img")`
	width: 64px;
	height: 64px;
	transition: 0.25s ease;

	@media screen and (max-width: 500px) {
		width: 40px;
		height: 40px;
	}
`