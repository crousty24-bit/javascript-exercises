const removeFromArray = (arr, ...num) => { 
    for(value of num) {
        while(arr.indexOf(value) !== -1) {
            arr.splice(arr.indexOf(value), 1);
        } 
    }
    return arr;
}
console.log(removeFromArray([1, 2, 2, 3, 4, 5, 6, 7, 8, 9], 2, 4, 3, 7, 10))
// add ...parameter turn into array of values
// for (item of arr) "value" is just a name, contains the values of arr num
// while to remove multiple of the same value

// Do not edit below this line
module.exports = removeFromArray;
