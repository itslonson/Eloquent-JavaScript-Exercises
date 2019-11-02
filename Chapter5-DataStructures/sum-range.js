// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

const range = (start, end) => {
  let array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
};

const sum = array => {
  let sum = 0;
  for (number of array) {
    sum += number;
  }

  return sum;
};

const optRange = (start, end, step) => {
  let array = [];

  if (start < end) {
    for (let i = start; i <= end; step ? (i += Math.abs(step)) : i++) {
      array.push(i);
    }
    return array;
  } else if (start > end) {
    for (let i = start; i >= end; step ? (i -= Math.abs(step)) : i--) {
      array.push(i);
    }
    return array;
  } else {
    array.push(start);
    return array;
  }
};

const rangeDigits = range(0, 10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : Sum 55

const optRangeDigits = optRange(10, 0, -2); // [10, 8, 6, 4, 2, 0] : Sum 30

console.log("Sum of ", rangeDigits, " array is ", sum(rangeDigits));
console.log("Sum of ", optRangeDigits, " array is ", sum(optRangeDigits));
