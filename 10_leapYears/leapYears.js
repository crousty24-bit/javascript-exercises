const leapYears = (year) => {
    if (year % 400 === 0)  {
        return true 
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
    } else {
        return false
    }
}
console.log(leapYears(1984))
// new logic version with && to regroup conditions
// works as intended in a clear step by step style

// Do not edit below this line
//module.exports = leapYears;
