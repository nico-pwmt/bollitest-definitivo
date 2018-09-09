(function() {

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

	$(".addRelated").on("click", function() {
		var product = $(this).data("product");
		var number = $(this).data("quantity");
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

	$("[data-tooltip]").on("mouseenter", function() {
		var text = $(this).data("tooltip");
		var tooltip = $("<span class='tooltip'>" + text + "</span>");
		var pos = $(this).offset();
		var width = $(this).outerWidth();
		$("body").append(tooltip);
		var tooltipWidth = tooltip.outerWidth();
		var tooltipHeight = tooltip.outerHeight();
		tooltip.css({"top": pos.top - tooltipHeight - 5, "left": pos.left + width / 2 - tooltipWidth / 2})
	}).on("mouseleave", function() {
		var pos = $(this).offset();
		$(".tooltip").remove();
	});

	$(".openLightbox").on("click", function() {
		var width = $(".lightbox").outerWidth();
		var height = $(".lightbox").outerHeight();
		$(".lightbox").css({"display": "block", "margin-top": - height / 2  , "margin-left": - width / 2});
	});
	$(".lightbox .close").on("click", function() {
		$(".lightbox").css("display", "none");
	});

})();

/* 

	centrar lightbox con flexbox
	centrar mediante inline-block
	SIN CUENTAS
	agregar y quitar una clase

	limpiar codig

	fondito semi negro de lightbox

	data-tooltip-position: bottom/top/right/left

*/



/*
	ubicacion del tooltip en css. quitar el choclo requiere hacer choclo de variables?

*/