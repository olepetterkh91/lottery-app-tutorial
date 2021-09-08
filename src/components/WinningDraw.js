function WinningDraw({ winningNumbers, selectedNumbers }) {
	function isSelected(number) {
		return selectedNumbers?.includes(number);
	}

	return (
		<div className="row">
			<div className="col-3"></div>
			{winningNumbers?.map((num, index) => {
				return (
					<div className="col-1 p-3" key={index}>
						<div
							className={`bg-${
								isSelected(num) ? "danger" : "warning"
							} text-center text-white rounded-circle`}
							style={{
								width: "60px",
								height: "60px",
								cursor: "pointer",
							}}
						>
							<div style={{ paddingTop: "15px" }}>{num}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default WinningDraw;
