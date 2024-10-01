function squareNumbers(arr) {
    if (!Array.isArray(arr)) {
        return ("Input must be an array");
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return ("Array must contain only numbers");
        }
    }

    let squaredArr = [];

    for (let i = 0; i < arr.length; i++) {
        let squaredNum = Math.pow(arr[i], 2);
        squaredArr.push(squaredNum);
    }

    return squaredArr;
}


console.log(squareNumbers([2, 20, 30]))
// console.log(squareNumbers("ashok"))
// console.log(squareNumbers(["ashok",20,30,10]))