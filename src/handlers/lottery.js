const numbers = generateArrayOfNumbers(40);

export function generateArrayOfNumbers(count) {
    let lottery = []
    for (var i = 1; i <= count; i++) {
        lottery.push(i);
    }
    return lottery
}

export function generateRandomUserNumbers() {
    const lottery = generateArrayOfNumbers(10)
    const randomLotteryNumbers = lottery?.map((number) => {
        console.log(generateNumbersArray(7))
        return generateNumbersArray(7)
    })
    return randomLotteryNumbers
}

export function generateNumbersArray(count) {
    let numbersToChooseFrom = generateArrayOfNumbers(40);
    const totalNumbers = generateArrayOfNumbers(7);
    let drawnNumbers = []
    totalNumbers?.forEach((num) => {
        // Make sure to remove existing numbers from pool of numbers to draw from
        const newNumbersToChooseFrom = numbersToChooseFrom.filter(num => !drawnNumbers?.includes(num))
        drawnNumbers.push(generateRandomNumber(newNumbersToChooseFrom.length,  newNumbersToChooseFrom))
    });
    const sortedNumArray = sortNumbers(drawnNumbers);
    return sortedNumArray;
}

export function generateRandomNumber(totalNumbers, totalNumbersArray) {
    const randomNumberIndex = Math.floor(Math.random() * totalNumbers + 1);
    return totalNumbersArray[randomNumberIndex - 1];
}

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}