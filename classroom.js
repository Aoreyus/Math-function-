var stem2 ={
classroom:"F103",
students:12,
}
var x=prompt("classroom or students?");
var lowercase= x.toLowerCase()
if ((lowercase==="classroom")||(lowercase==="students")){
window.alert(stem2[lowercase]);
}
else{
  tryAgain();
}
function tryAgain(){
var x=prompt("classroom or students?");
var lowercase= x.toLowerCase()
if ((lowercase==="classroom")||(lowercase==="students")){
window.alert(stem2[lowercase]);
}
else{
  tryAgain();
}
}