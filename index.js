function randomNumber1(){
var n1 =Math.floor(Math.random()*6)+1;
return n1;
}
function randomNumber2(){
  var n2=Math.floor(Math.random()*6)+1;
  return n2;
}


 n1=randomNumber1();
 n2=randomNumber2();

document.querySelector(".img1").setAttribute("src", "images/dice" + n1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + n2 + ".png");

if(n1>n2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(n1<n2){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
