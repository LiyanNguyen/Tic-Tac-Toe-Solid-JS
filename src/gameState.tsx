import { createSignal, createRoot } from "solid-js";

const createCounter = () => {
	// 0 is blank, 1 is taken by X, 2 is taken by O
	// const [boardArray, setBoardArray] = createSignal([1, 2, 0, 0, 0, 0, 0, 0, 1])
	const [tileValue, setTileValue] = createSignal(0)
	const [Xturn, setXTurn] = createSignal(true)

	return { Xturn, setXTurn };
}

export default createRoot(createCounter);