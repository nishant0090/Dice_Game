var randomNumber1 = (Math.floor(Math.random()*6))+1;
// if(randomNumber1===1) document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
// if(randomNumber1===2) document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
// if(randomNumber1===3) document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
// if(randomNumber1===4) document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
// if(randomNumber1===5) document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
var randomImageSource = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = (Math.floor(Math.random()*6))+1;
// if(randomNumber2===2) document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
// if(randomNumber2===3) document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
// if(randomNumber2===4) document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
// if(randomNumber2===1) document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
// if(randomNumber2===5) document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1===randomNumber2) document.querySelector("h1").innerHTML = "Draw!";
else if(randomNumber1>randomNumber2) document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
else if(randomNumber2>randomNumber1) document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
