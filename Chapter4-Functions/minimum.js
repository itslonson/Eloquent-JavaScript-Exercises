// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

const min = (a, b) => {
  return a === b ? `${a} = ${b}` : a > b ? b : a;
};

console.log(min(2, 1));
