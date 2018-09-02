var summary = [];

var funcSuma = function() {
	var sum = 0;
	var total = document.querySelector(".total");
	for (var i = 0; i < summary.length; i++) {
		sum = sum + Number(summary[i].itemQuantity);
	}
	total.innerHTML = sum;
}


document.querySelector(".add").addEventListener("click", function() {
	var product = document.querySelector(".product").value;
	var number = document.querySelector(".number").value;
	var item = {
		productName: product,
		itemQuantity: number
	}
	summary.push(item);
	var result = document.querySelector(".result dl");
	var dt = document.createElement("DT");
	var dd = document.createElement("DD");
	var dtTextNode = document.createTextNode(item.productName);
	var ddTextNode = document.createTextNode(item.itemQuantity);
	dt.appendChild(dtTextNode);
	dd.appendChild(ddTextNode);
	result.appendChild(dt);
	result.appendChild(dd);
	funcSuma();
	document.querySelector(".product").value = "";
	document.querySelector(".number").value = "";
});

document.querySelector(".removeLast").addEventListener("click", function() {
	summary.pop();
	var result = document.querySelector(".result dl");
	result.removeChild(result.lastChild);
	result.removeChild(result.lastChild);
	funcSuma();
});

document.querySelector(".emptyCarr").addEventListener("click", function() {
	summary = [];
	var result = document.querySelector(".result dl");
	result.innerHTML = "";
	funcSuma();
});

document.querySelector(".add2medias").addEventListener("click", function() {
	var product = "Medias";
	var number = 2;
	var item = {
		productName: product,
		itemQuantity: number
	}
	summary.push(item);
	var result = document.querySelector(".result dl");
	var dt = document.createElement("DT");
	var dd = document.createElement("DD");
	var dtTextNode = document.createTextNode(product);
	var ddTextNode = document.createTextNode(number);
	dt.appendChild(dtTextNode);
	dd.appendChild(ddTextNode);
	result.appendChild(dt);
	result.appendChild(dd);
	funcSuma();
});

document.querySelector(".add1htc").addEventListener("click", function() {
	var product = "Htc";
	var number = 1;
	var item = {
		productName: product,
		itemQuantity: number
	}
	summary.push(item);
	var result = document.querySelector(".result dl");
	var dt = document.createElement("DT");
	var dd = document.createElement("DD");
	var dtTextNode = document.createTextNode(product);
	var ddTextNode = document.createTextNode(number);
	dt.appendChild(dtTextNode);
	dd.appendChild(ddTextNode);
	result.appendChild(dt);
	result.appendChild(dd);
	funcSuma();
});

document.querySelector(".add5bollis").addEventListener("click", function() {
	var product = "Bollis";
	var number = 5;
	var item = {
		productName: product,
		itemQuantity: number
	}
	summary.push(item);
	var result = document.querySelector(".result dl");
	var dt = document.createElement("DT");
	var dd = document.createElement("DD");
	var dtTextNode = document.createTextNode(product);
	var ddTextNode = document.createTextNode(number);
	dt.appendChild(dtTextNode);
	dd.appendChild(ddTextNode);
	result.appendChild(dt);
	result.appendChild(dd);
	funcSuma();
});

document.querySelector(".add9muslims").addEventListener("click", function() {
	var product = "Muslims";
	var number = 9;
	var item = {
		productName: product,
		itemQuantity: number
	}
	summary.push(item);
	var result = document.querySelector(".result dl");
	var dt = document.createElement("DT");
	var dd = document.createElement("DD");
	var dtTextNode = document.createTextNode(product);
	var ddTextNode = document.createTextNode(number);
	dt.appendChild(dtTextNode);
	dd.appendChild(ddTextNode);
	result.appendChild(dt);
	result.appendChild(dd);
	funcSuma();
});

document.querySelector("button[tooltip]").addEventListener("mouseover", function() {
	var tooltipText = document.querySelector("button[tooltip]").getAttribute("tooltip");
	console.log(tooltipText);
});