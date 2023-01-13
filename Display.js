function resize() {
	var scale = Math.min(window.innerWidth/2, window.innerHeight*(2/3));
	var rightDisplaySize = scale*(4/5);
	console.log(scale)
	console.log(rightDisplaySize)

	console.log(document.getElementById("ObjectsList").clientWidth)
	console.log(document.getElementById("ObjectsList"))

	document.getElementById("ObjectsList").style.transform = "translateX(" + (- (document.getElementById("ObjectsList").clientWidth + window.innerWidth/2))/2 + "px)";
	document.getElementById("ObjectImage").style.width = scale + "px";
	document.getElementById("ObjectImage").style.height = scale + "px";
	if (document.getElementById("Image") != null) {
		document.getElementById("Image").style.width = rightDisplaySize + "px";
		document.getElementById("Image").style.height = rightDisplaySize + "px";
	}
	console.log(document.getElementById("ObjectImage"));
	console.log(document.getElementById("ObjectImage").style.width);
	document.getElementById("ObjectDetails").style.transform = "translate(" + (scale - rightDisplaySize)/2 + "px," + (rightDisplaySize + 5) + "px)";
	document.getElementById("ObjectDetails").style.width = rightDisplaySize + "px";
}

resize();
window.addEventListener('resize', () => {resize()});

function CategoryChoose(name) {
	document.getElementById("CategoryName").style.visibility = "hidden";
	document.getElementById("CategoryName").style.position = "absolute";
	document.getElementById("Object").style.visibility = "visible";
	console.log(data.name)
	var object;
	for(let i = 0; i < data[name].length; i++) {
		object = document.createElement("input");
		object.type = "button";
		object.value = data[name][i][0];
		object.addEventListener("click", () => { ObjectChoose(name, i); });
		document.getElementById("ObjectsList").appendChild(object);
	}


	object = document.createElement("input");
	object.type = "button";
	object.value = "Retour";
	object.addEventListener("click", () => { back(); });
	document.getElementById("ObjectsList").appendChild(object);

	resize();
}

function back() {
	document.getElementById("CategoryName").style.visibility = "visible";
	document.getElementById("CategoryName").style.position = "relative";
	document.getElementById("Object").style.visibility = "hidden";
	document.getElementById("ObjectsList").innerHTML = "";
	document.getElementById("ObjectImage").innerHTML = "";
	document.getElementById("ObjectDetails").innerHTML = "";
}

function ObjectChoose(name, index) {
	fetch("Images/" + data[name][index][1] + ".jpg").then(results => results.blob()).then((imageBlob) => {
		var url = URL.createObjectURL(imageBlob.slice(0, 4000))

		var image = new Image()
		image.src = url;
		image.id = "Image";

		document.getElementById("ObjectImage").innerHTML = "";
		document.getElementById("ObjectImage").appendChild(image);
		resize();
	});
	var detail = document.createElement("div");
	detail.innerHTML = data[name][index][2];
	document.getElementById("ObjectDetails").innerHTML = "";
	document.getElementById("ObjectDetails").appendChild(detail);
	resize();
}