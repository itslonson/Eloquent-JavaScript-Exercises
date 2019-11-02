// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument.

// Also write a listToArray function that produces an array from a list.

// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.

const testArray = [1, 2, 3];

const arrayToList = array => {
  // convert array to list
  let list = null;
  for (let index = array.length - 1; index >= 0; index--) {
    list = { value: array[index], rest: list };
  }
  return list;
};

const listToArray = list => {
  // convert list to array
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
};

const prepend = (element, list) => {
  // add the element to the front of the input list
  return { value: element, rest: list };
};

const nth = (list, position) => {
  // return the element at the given position in the list
  return listToArray(list)[position];
};

const nthRecursive = (list, position) => {
  if (!list) {
    return undefined;
  } else if (position == 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, position - 1);
  }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
