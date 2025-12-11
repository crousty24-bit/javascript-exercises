const convertToCelsius = (num) => {
    let celsius = (num-32) * 5/9; // applied raw math conv from wiki into code
    return Number(celsius.toFixed(1)) // Number() convert a string into number
}
console.log(convertToCelsius(68.5))

const convertToFahrenheit = (num) => {
    let fahrenheit = (num * 9/5 + 32);
    return Number(fahrenheit.toFixed(1)) // toFixed(1) will round up to 1 decimal
}
console.log(convertToFahrenheit(20.5))


// ok with this method, but need to convert string to number
// still it's pretty clean
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
