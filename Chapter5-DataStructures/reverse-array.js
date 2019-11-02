// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.

const reverseArray = array => {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

const reverseArrayInPlace = array => {
  // iterate from the first element to the middle element
  for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    // el binding is used as transfer value, so the first element would be equal to last and vice versa
    let el = array[i];
    // change places of the first and the last item in the array
    array[i] = array[array.length - 1 - i]; // the first is now last
    array[array.length - 1 - i] = el; // the last is now first
  }
  return array;
};

let myArr = ["start", 1, 2, 3, 4, "finish"];

console.log(reverseArray(myArr));
console.log(reverseArrayInPlace(myArr));
