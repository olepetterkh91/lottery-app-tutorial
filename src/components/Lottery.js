import React, { useState } from "react";
import WinningDraw from "./WinningDraw";

function Lottery() {
	const numbers = generateNumbersArray(40);
	const [selectedNumbers, setSelectedNumbers] = useState([]);
	const [winningNumbers, setWinningNumbers] = useState([]);

	function generateNumbersArray(total) {
		// Generate all lottery numbers
		let lotteryNumbers = [];
		for (let i = 1; i <= total; i++) {
			lotteryNumbers.push(i);
		}
		return lotteryNumbers;
	}

	function generateWinningNumbers() {
		const totalNumbers = [1, 2, 3, 4, 5, 6, 7];
		const winNumArray = totalNumbers?.map((num) =>
			generateRandomNumber(numbers.length, numbers)
		);
		const sortedWinArray = sortNumbers(winNumArray);
		setWinningNumbers(sortedWinArray);
	}

	function generateRandomNumber(totalNumbers, totalNumbersArray) {
		const randomNumberIndex = Math.floor(Math.random() * totalNumbers + 1);
		return totalNumbersArray[randomNumberIndex - 1];
	}

	function sortNumbers(numbers) {
		return numbers.sort((a, b) => a - b);
	}

	function selectNumberHandler(number) {
		console.log(selectedNumbers);
		let newSelectedNumbers = selectedNumbers;
		if (selectedNumbers?.includes(number)) {
			newSelectedNumbers = selectedNumbers?.filter(
				(num) => number !== num
			);
		} else if (
			!selectedNumbers?.includes(number) &&
			selectedNumbers?.length < 7
		) {
			if (selectedNumbers?.length > 0) {
				newSelectedNumbers = sortNumbers(
					selectedNumbers.concat(number)
				);
			} else {
				newSelectedNumbers = [number];
			}
		} else {
			newSelectedNumbers = selectedNumbers;
		}

		setSelectedNumbers(newSelectedNumbers);
	}

	function isNumberSelected(number) {
		return selectedNumbers?.includes(number);
	}

	return (
		<div className="container">
			<button onClick={generateWinningNumbers}>Draw</button>
			{winningNumbers && (
				<React.Fragment>
					<h2>Winning numbers</h2>
					<WinningDraw
						winningNumbers={winningNumbers}
						selectedNumbers={selectedNumbers}
					/>
				</React.Fragment>
			)}
			<h2>Your selected numbers</h2>
			<div className="row">
				{selectedNumbers?.map((num, index) => {
					return (
						<div className="col-1 p-3" key={index}>
							<div
								className={`bg-success text-center text-white rounded-circle`}
								style={{
									width: "60px",
									height: "60px",
									cursor: "pointer",
								}}
							>
								<div
									onClick={() => selectNumberHandler(num)}
									style={{ paddingTop: "15px" }}
								>
									{num}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2>Select numbers</h2>
			<div className="row">
				{numbers?.map((num, index) => (
					<div className="col-1 p-3" key={index}>
						<div
							className={`bg-${
								isNumberSelected(num)
									? "danger text-white"
									: "light"
							} text-center rounded-circle`}
							style={{
								width: "60px",
								height: "60px",
								cursor: "pointer",
							}}
						>
							<div
								onClick={() => selectNumberHandler(num)}
								style={{ paddingTop: "15px" }}
							>
								{num}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Lottery;
