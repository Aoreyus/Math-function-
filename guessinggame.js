var user1=prompt("Player 1, chose a number between 1-6"); 
var user1= Math.floor(parseInt(user1));
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
