var askName = prompt("what is your name?");
alert("Hi there, " + askName + "!");
var question = prompt("Can you guess what my lucky number is?")
console.log('hi there, '+ askName);
if (question == "7") {
  alert("You guessed right, " + askName + ", congratulations!");
} else {
  alert("Aw too bad, wrong guess. It was 7, good try though!");
}
