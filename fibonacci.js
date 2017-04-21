console.log("i am here");

var x = 1;
var y = 1;
var z = 0;
result = document.getElementById("output");
console.log("x",x);
result.innerHTML = x+" ";
result.innerHTML +=y + " ";
console.log("y",y);
while(z < 500){

	z = x+y;
	x=y;y=z;
	console.log("z",z);
	result.innerHTML += z + " "; 

}

