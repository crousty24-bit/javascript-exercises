const add = (a, b) => a + b ;

const subtract = (a, b) => a - b;

const sum = (arr) => {
	let sum = arr.reduce((total, current) => total + current, 0);
  return sum
};

const multiply = (arr) => {
  let result = arr.reduce((total, current) => total * current, 1);
  return result
};

const power = (a, b) => a ** b;

const factorial = (a) => {
  if (a === 0) return 1;
  let resultFacto = 1;
  for(let i = 1; i <= a ; i++)
    resultFacto *= i;
	return resultFacto;
};
// arrow version : 
const facto = (a) => a === 0 ? 1 : a * facto(a - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
