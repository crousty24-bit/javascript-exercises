const sumAll = (num1, num2) => {
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    for (let i = start ; i <= end; i++) {
        sum += i;
    } return sum;
}
console.log(sumAll("123", 1))

// Do not edit below this line
module.exports = sumAll;
