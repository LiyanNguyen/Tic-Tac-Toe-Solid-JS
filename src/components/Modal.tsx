type Props = {}

const Modal = (props: Props) => {
	return (
		<div style={{ "background": "rgba(0,0,0,0.5)", position: "absolute", "z-index": 1, width: "100%", height: "100%", display: "flex", "align-items": "center", "justify-content": "center" }}>
			<div style={{ "background-color": "var(--semiDarkNavy)", height: "266px", width: "100%", display: "flex", "flex-direction":"column", "align-items": "center", "justify-content": "center", gap:"24px" }}>
				<p>RESTART GAME?</p>
				<div style={{display:"flex", gap:"12px"}}>
					<button style={{ "background-color":"var(--silver)"}}>NO CANCEL</button>
					<button style={{ "background-color": "var(--lightYellow)" }}>YES RESTART</button>
				</div>
			</div>
			
		</div>
	)
}

export default Modal