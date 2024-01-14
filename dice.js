var randomNumber1=Math.floor(Math.random()*6)+1;
var dicefile="dice"+randomNumber1+".png";
// document.querySelectorAll("img")[0].setAttribute("src",dicefile);
document.getElementById("leftDice").setAttribute("src",dicefile);

var randomNumber2=Math.floor(Math.random()*6)+1;
var dicefile2="dice"+randomNumber2+".png";
document.getElementById("RightDice").setAttribute("src",dicefile2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
