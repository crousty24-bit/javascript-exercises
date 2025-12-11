const sumAll = (num1, num2) => {
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR: NaN'
    }
    for (let i = start ; i <= end; i++) {
        if (num1 < 0 || num2 < 0) {
            return 'ERROR : negative number'
        }
        else if (Number.isInteger(num1) && Number.isInteger(num2)) {
            sum += i;
        }
        else {
            return 'ERROR : not an integer'
        }
    } return sum;
}
console.log(sumAll(1, 10))
// missing condition if is non-integer parameter 'error'
// come back to it later

// Do not edit below this line
module.exports = sumAll;
