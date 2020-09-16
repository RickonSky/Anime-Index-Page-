var h1= document.querySelector("h1");
var frt= document.querySelector(".inp1");
var scd= document.querySelector(".inp2");
function coloring(){
	h1.style.background=
	 "linear-gradient(to right,"+frt.value+","+scd.value+")";
}

frt.addEventListener("input", coloring)
scd.addEventListener("input", coloring)