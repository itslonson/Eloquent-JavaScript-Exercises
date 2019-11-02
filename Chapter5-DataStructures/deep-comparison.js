// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them

const deepEqual = (first, second) => {
  let firstProps = 0;
  let secondProps = 0;

  if (first === second) return true;
  if (
    first === null ||
    typeof first != "object" ||
    second === null ||
    typeof second != "object"
  )
    return false;

  for (const key in first) {
    firstProps += 1;
  }

  for (const key in second) {
    secondProps += 1;
    if (!(key in first) || !deepEqual(first[key], second[key])) return false;
  }

  return firstProps === secondProps;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
