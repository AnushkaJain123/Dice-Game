// For First Image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSrc);

// For Second Image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSrc2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);

// Conditions

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins! 🎉";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
}
else
{
  document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
}
