var stem2 ={
classroom:"F103",
students:12
};

var x=prompt("classroom or students?");
var lowercase= x.toLowerCase();
if ((lowercase==="classroom")||(lowercase==="students")){
	window.alert(stem2[lowercase]);
}
else{
window.alert("You tried " + 1 + "time");
	for (i=2; i <4; i++) {
  	var x=prompt("classroom or students?");
		var lowercase= x.toLowerCase();
		if ((lowercase==="classroom")||(lowercase==="students")){
			window.alert(stem2[lowercase]);
      i=3;
		}
		else {
			window.alert("You tried " + i + " times");
		}
  }
}