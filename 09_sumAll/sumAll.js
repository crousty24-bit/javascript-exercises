const sumAll = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR: NaN'
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) { 
        return 'ERROR : not an Integer'
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR : negative number'
    }
    
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    
    for (let i = start ; i <= end; i++) {
        sum += i;
    } 
    return sum;
}
console.log(sumAll(1, 10))
// adding Number.isInteger if True, execute sum

// now code works as intended and throw an error according to
// a missing condition

// Do not edit below this line
module.exports = sumAll;
