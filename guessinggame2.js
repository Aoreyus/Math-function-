var user1= Math.floor(Math.random()*6+1);

if((user1 <1) || (user1>6) || isNaN(user1)){
window.alert("You cannot follow direction");
}

else{
var user2=prompt("Guess a number between 1-6");
if(user1==user2){
window.alert("You win!");
}
else{
window.alert("You lost, Player 1 choosed" + " " + user1);
}
}