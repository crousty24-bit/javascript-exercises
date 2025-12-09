const removeFromArray = (arr, num) => {
    let index = arr.indexOf(num); 
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
console.log(removeFromArray([1, 2, 3, 4], 4))

// Do not edit below this line
module.exports = removeFromArray;
