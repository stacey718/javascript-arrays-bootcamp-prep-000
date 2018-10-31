var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  [element,...array]
  return [element,...array] 
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  [...array, element]
  return [...array, element]
}
<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
=======
function destructivelyAddElementToTheEndOfArray(array, element) {
  array.push();
>>>>>>> bb11a490bd84ba0f0d03f228477aa1434556a91e
  return array;
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  return array.slice(1);
=======
  array.slice();
  return array;
>>>>>>> bb11a490bd84ba0f0d03f228477aa1434556a91e
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}