function randomIntFromRange(a, b) {
  return Math.round((b - a) * Math.random() + a);
}
var numberToGuess = randomIntFromRange(0, 100);
var guestNumber;
var attempts = 0;

// do {
//   guestNumber = prompt("Угадай число");
//   attempts++;
//   if (guestNumber < numberToGuess) {
//     alert("Введеное число меньше загаданного");
//   } else if (guestNumber > numberToGuess) {
//     alert("Введеное число больше загаданого");
//   }
// } while (guestNumber != numberToGuess);
// alert("Ты победил!Количкство попыток:" + attempts);
