import { useEffect } from "react";
import { generateArrayOfNumbers, generateNumbersArray, generateRandomUserNumbers } from "../handlers/lottery";

function UserSelectedNumbers({randomNumbers, setRandomNumbers, winningNumbers}) {

    useEffect(() => {
        const userLotteryNumbersArray = generateRandomUserNumbers()
        console.log(userLotteryNumbersArray, "USERLOTTERY NUMBERS ARRAY")
        setRandomNumbers(userLotteryNumbersArray)
    }, [])

    return (
        <div>
            {randomNumbers?.map((row, index) => {
                return (
                    <div key={index} className="row">
                        {row?.map((num, index) => {
                            console.log(row, index)
                            return (
                                <div className="col-1 p-3" key={index}>
                                <div
                                    className={`bg-danger text-center text-white rounded-circle`}
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div style={{ paddingTop: "15px" }}>{num}</div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default UserSelectedNumbers