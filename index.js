var randomNumber1 = Math.random() * 6;
var randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;

var firstImage = document.querySelectorAll("img")[0];
firstImage.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";
var secondImage = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
  document.querySelector("h1").style.color = "Green";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won";
  document.querySelector("h1").style.color = "Blue";
} else {
  document.querySelector("h1").innerHTML = "Game Draw... No winner";
  document.querySelector("h1").style.color = "red";
}
