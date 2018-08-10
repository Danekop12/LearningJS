var name = prompt("Как тебя зовут?");
var years = prompt("А сколько тебе лет?");
function yearYou(year) {
  return year - years;
}
alert("Привет" + name + "!Ты родился" + yearYou(2018));
