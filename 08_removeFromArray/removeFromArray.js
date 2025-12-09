const removeFromArray = (arr, ...num) => {
    for(value of num) {
        let index = arr.indexOf(value); 
        if (index !== -1) {
            arr.splice(index, 1);
        } 
    }
    return arr;
}
console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 4, 3, 7))

// Do not edit below this line
module.exports = removeFromArray;
