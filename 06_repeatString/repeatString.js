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

let newString = repeatString("hey", 3);
console.log(newString);


//const repeatString

// Do not edit below this line
module.exports = repeatString;
