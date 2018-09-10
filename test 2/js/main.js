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

	/* TOOLTIP */

	$("[data-tooltip]").on("mouseenter", function() {
		var text = $(this).data("tooltip");
		var tooltip = $("<span class='tooltip'>" + text + "</span>");
		var pos = $(this).offset();
		var width = $(this).outerWidth();
		$("body").append(tooltip);
		var tooltipWidth = tooltip.outerWidth();
		var tooltipHeight = tooltip.outerHeight();
		if ($(this).data("tooltip-position") == "bottom") {
			tooltip.css({"top": pos.top + tooltipHeight / 2, "left": pos.left + width / 2 - tooltipWidth / 2});
		}	else if ($(this).data("tooltip-position") == "left") {
			tooltip.css({"top": pos.top, "left": pos.left + width / 2 - tooltipWidth * 2});
		} else if ($(this).data("tooltip-position") == "right") {
			tooltip.css({"top": pos.top, "left": pos.left + width + tooltipWidth / 2});
		} else {
			tooltip.css({"top": pos.top - tooltipHeight - 5, "left": pos.left + width / 2 - tooltipWidth / 2});
		}
	}).on("mouseleave", function() {
		var pos = $(this).offset();
		$(".tooltip").remove();
	});

	/* LIGHTBOXES */

	$(".openLightbox").on("click", function() {
		$(".holder").css("display", "block");
		var width = $(".lightbox").outerWidth();
		var height = $(".lightbox").outerHeight();
		$(".lightbox").css({"margin-top": - height / 2, "margin-left": - width / 2, "display": "block"});
	});
	$(".lightbox .close").on("click", function() {
		$(".holder, .lightbox").css("display", "none");
	});

	$(".openVertLightbox").on("click", function() {
		$(".holder").css("display", "block");
		$(".vertLightbox").css("display", "inline-block")
	});
	$(".vertLightbox .close").on("click", function() {
		$(".holder, .vertLightbox").css("display", "none");
	});

	$(".openFlexLightbox").on("click", function() {
		$(".holderFlex").css("display", "flex");
		$(".flexLightbox").css("display", "flex");
	});
	$(".flexLightbox .close").on("click", function() {
		$(".holderFlex").css("display", "none");
	})

})();



/*

	quitarle las comillas a las propiedades de objetos en .css() hace q deje de funcionar, what ond ??

	los lightbox y sus respectivos holder no estan lo mas optimamente hechos porq la idea es usar un solo sistema pero para 
	diferenciar los 3, muchas repeticiones

	vertical align lightbox no me sale :(

	tooltip incompleto para ahorrar tiempo, pero esa es la aproximacion correcta? con if elses ifs?
	falta limpiar toda la matematica con q solo quite y ponga una clase y acomodarlos mejor y acomodar el pinchito

	data-tooltip-position por default lo manda a "top" por si el atributo no esta aclarado

*/