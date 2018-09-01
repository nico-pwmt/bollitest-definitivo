/*
document.querySelector(".add").addEventListener("click", function() {
	var number = document.querySelector(".number").value;
	var result = document.querySelector(".result ol").innerHTML;
	document.querySelector(".result ol").innerHTML = Number(number) + Number(result);
	document.querySelector(".number").value = "";
});
*/

/*
document.querySelector(".add").addEventListener("click", function() {
	var number = document.querySelector(".number").value;
	var list = document.querySelector(".result ol");
	var li = document.createElement("LI");
	var txtNode = document.createTextNode(number);
	li.appendChild(txtNode);
	list.appendChild(li);
	document.querySelector(".number").value = "";
	var total = document.querySelector(".total");
	total.innerHTML = Number(total.innerHTML) + Number(li.innerHTML);
});
*/

var summary = [];

var funcSuma = function() {
	var sum = 0;
	var total = document.querySelector(".total");
	for (i = 0; i < summary.length; i++) {
		sum = sum + Number(summary[i].itemQuantity);
		total.innerHTML = sum;
	}
	if (summary.length == 0) {
		total.innerHTML = 0;
	}
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