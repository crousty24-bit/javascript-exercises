const sumAll = (num1, num2) => {
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR'
    }
    for (let i = start ; i <= end; i++) {
        if (num1 < 0 || num2 < 0) {
            return 'ERROR'
        }
        else {
            sum += i;
        } 
    } return sum;
}
console.log(sumAll("caca", 4))

// Do not edit below this line
module.exports = sumAll;
