export function createArray(size) {
  if (size < 0) {
    return [];
  }
  return new Array(size);
}

export function fillArrayWithRandomNumbers(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.random();
  }

  return array;
}
function printArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
function sortArray(array) {}
// const filledArray = fillArrayWithRandomNumbers(createArray(3));
// console.log(filledArray);
// printArray(filledArray);
var message = "hello " + "world";
var messege1;
messege1 = message + " 1 " + message;
// console.log(messege1);
// var n = prompt("Введите число");
console.log(n > 3 ? "n > 3" : "n <= 3");
var n = "n2";
console.log(n > "6");
