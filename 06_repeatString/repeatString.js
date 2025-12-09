function repeatString(string, num) {
    let repeatedString = "";
    if (num < 0 ) {
        return 'ERROR'
    }
    for (let i = 0; i < num ; i++) {
        repeatedString += string;
    }
    return repeatedString;
}

repeatString("hey", 10);
console.log(repeatString("hey", 10));

// Do not edit below this line
module.exports = repeatString;
