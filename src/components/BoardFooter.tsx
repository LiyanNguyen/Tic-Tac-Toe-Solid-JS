import { styled } from "solid-styled-components";

interface IBoardFooter {
	XScore: number
	YScore: number
	TieScore: number
}

const BoardFooter = (props: IBoardFooter) => {
	return (
		<Container>
			<Rectangle color="#31C3BD">
				<p>X</p>
				<b>{props.XScore}</b>
			</Rectangle>
			<Rectangle color="#A8BFC9">
				<p>TIES</p>
				<b>{props.TieScore}</b>
			</Rectangle>
			<Rectangle color="#F2B137">
				<p>O</p>
				<b>{props.YScore}</b>
			</Rectangle>
		</Container>
	);
};

export default BoardFooter;

const Container = styled("div")`
	display: flex;
	align-items: center;
	gap: 20px;
	width: 460px;

	@media screen and (max-width: 500px) {
		width: 328px;
	}
`

const Rectangle = styled("div")`
	width: 140px;
	height: 72px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	background-color ${props => props.color};

	p {
		color: var(--darkNavy);
		font-size: 14px;
	}

	b {
		color: var(--darkNavy);
		font-weight: 700;
		font-size: 24px;
	}

	@media screen and (max-width: 500px) {
		width: 96px;
	}
`