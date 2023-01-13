// var data;

// fetch("euh.jpg").then(() => {
//   console.log("hggg");
// })

// fetch("Data/data.json").then(results => results.json()).then((jsonData) => {
//   data = jsonData;

// console.log(data);
// console.log("et bah");
// console.log(Object.keys(data).length);
// document.dispatchEvent(new Event("dataLoaded"));  
// })
console.log(window.innerWidth);
console.log(window.innerHeight);

// // include html
// function includeHTML() {
// 	document.addEventListener("dataLoaded", () => {
// 	  var z, i, elmnt, file, xhttp;
// 	  /* Loop through a collection of all HTML elements: */
// 	  z = document.getElementsByTagName("*");
// 	  for (i = 0; i < z.length; i++) {
// 	    elmnt = z[i];
// 	    /*search for elements with a certain atrribute:*/
// 	    file = elmnt.getAttribute("w3-include-html");
// 	    if (file) {
// 		      /* Make an HTTP request using the attribute value as the file name: */
// 		      xhttp = new XMLHttpRequest();
// 		      xhttp.onreadystatechange = function() {
// 		        if (this.readyState == 4) {
// 		          if (this.status == 200) {

// 		          	// on y passe nbSound fois pour avoir le nombre de blocs correspondants dans le code html

// 		          	for (var j = 0; j < Object.keys(data).length; j++) {
// 		          		console.log(this.responseText)
// 		          		elmnt.innerHTML += this.responseText;	          	
// 		          	}
// 		          }
// 		          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
// 		    	  elmnt.removeAttribute("w3-include-html");
// 		          includeHTML();
// 		        }
// 		      }
// 		      xhttp.open("GET", file, true);
// 		      xhttp.send();
// 		      /* Exit the function: */
// 		      return;
// 	    }
// 	  }
// 	})
// }

function resize() {
	document.getElementById("ObjectsList").style.transform = "translateX(" + window.innerWidth*(1/5) + "px)";
	document.getElementById("ObjectImage").style.width = window.innerWidth/2 + "px";
	document.getElementById("ObjectImage").style.height = window.innerHeight/2 + "px";
	if (document.getElementById("Image") != null) {
		document.getElementById("Image").style.width = window.innerWidth*(2/5) + "px";
		document.getElementById("Image").style.height = window.innerHeight/2 + "px";
	}
	console.log(document.getElementById("ObjectImage"));
	console.log(document.getElementById("ObjectImage").style.width);
	console.log("terrr");
	document.getElementById("ObjectDetails").style.transform = "translateY(" + window.innerHeight/2 + "px)";
}

resize();
window.addEventListener('resize', () => {resize()});

console.log("vavv");

function CategoryChoose(name) {
	document.getElementById("CategoryName").style.visibility = "hidden";
	document.getElementById("CategoryName").style.position = "absolute";
	document.getElementById("Object").style.visibility = "visible";
	document.getElementById("Object").style.position = "relative";
	console.log(data.name)
	var object;
	for(let i = 0; i < data[name].length; i++) {
		object = document.createElement("input");
		object.type = "button";
		object.value = data[name][i][0];
		object.addEventListener("click", () => {ObjectChoose(name, i); });
		document.getElementById("ObjectsList").appendChild(object);
	}
	console.log(data);
	console.log(name);
}

function ObjectChoose(name, index) {


		fetch("Images/" + data[name][index][1] + ".jpg").then(results => results.blob()).then((imageBlob) => {
		  var url = URL.createObjectURL(imageBlob.slice(0, 4000))

		  var image = new Image()
		  image.src = url
		  image.id = "Image"
		  image.width = window.innerWidth*(2/5);
		  image.height = window.innerHeight/2


			document.getElementById("ObjectImage").innerHTML = "";
			document.getElementById("ObjectImage").appendChild(image);

		});
		var detail = document.createElement("div");
		console.log(data[name][index][2])
		detail.innerHTML = data[name][index][2];
		console.log(detail)
		// object.addEventListener("click", () => {CategoryChoose(Object.keys(data)[i]); });
		document.getElementById("ObjectDetails").innerHTML = "";
		document.getElementById("ObjectDetails").appendChild(detail);
}