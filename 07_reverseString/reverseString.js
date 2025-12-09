const reverseString = (string) => {
    let str = string.split(''); 
    let arr = str.reverse();
    let reversed = arr.join('');
    return reversed;
 
} 
  
console.log(reverseString('hello there'));


// Do not edit below this line
module.exports = reverseString;
