//your code here!
var ol = document.getElementById("infi-list");

function append(index){
	const item = document.createElement("div");
	item.textContent = `Item ${index}`
	ol.appendChild(item);
}

for(let i=1; i<1000; i++){
	append(i);
}