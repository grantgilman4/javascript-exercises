const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(array) {
  let finalSum = 0
  for (const value of array) {
    finalSum += value
  }
    return finalSum;
  };

const multiply = function(array) {
  let prod = 1
  for (const value of array) {
    prod *= value
  }
    return prod;
};

const power = function(x, y) {
	return (x ** y);
};

const factorial = function(x) {
	if (x  === (-1)) return 0;
  if (x === 0) return 1;
  let fact = 1;
  for (i = x; i > 0; i--) {
    fact *= i
  };
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
