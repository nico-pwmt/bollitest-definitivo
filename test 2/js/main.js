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
		var posX = $(this).offset().left;
		var posY = $(this).offset().top;
		var width = $(this).outerWidth();
		var height = $(this).outerHeight();
		$("body").append(tooltip);
		var tooltipWidth = tooltip.outerWidth();
		var tooltipHeight = tooltip.outerHeight();
		if ($(this).data("tooltip-position") == "bottom") {
			tooltip.css({"left": posX + width / 2 - tooltipWidth / 2, "top": posY + height + 5});
			tooltip.addClass("bottom");
		}	else if ($(this).data("tooltip-position") == "left") {
			tooltip.css({"left": posX - tooltipWidth - 5, "top": posY + height / 2 - tooltipHeight / 2});
			tooltip.addClass("left");
		} else if ($(this).data("tooltip-position") == "right") {
			tooltip.css({"left": posX + width + 5, "top": posY + height / 2 - tooltipHeight / 2});
			tooltip.addClass("right");
		} else {
			tooltip.css({"left": posX + width / 2 - tooltipWidth / 2, "top": posY - tooltipHeight - 5});
		}
	}).on("mouseleave", function() {
		$(".tooltip").remove();
	});

	/* LIGHTBOXES */

	$(".openLightbox").on("click", function() {
		$(".holder").css("display", "block");
		var width = $(".lightbox").outerWidth();
		var height = $(".lightbox").outerHeight();
		$(".lightbox").css({"margin-top": - height / 2, "margin-left": - width / 2});
	});
	$(".lightbox .close").on("click", function() {
		$(".holder").css("display", "none");
	});

	$(".openVertLightbox").on("click", function() {
		$(".holderVert").css("display", "block");
	});
	$(".vertLightbox .close").on("click", function() {
		$(".holderVert").css("display", "none");
	});

	$(".openFlexLightbox").on("click", function() {
		$(".holderFlex").css("display", "flex");
	});
	$(".flexLightbox .close").on("click", function() {
		$(".holderFlex").css("display", "none");
	})

})();



/*

	quitarle las comillas a las propiedades de objetos en .css() hace q deje de funcionar, what ond ??

	toortip math

*/

/* ----------------------- */

/* 

	dijiste si un elemento tiene POSITION, el DISPLAY no hace nada. pero si tiene RELATIVE no lo transofmra en INLINE-BLOCK,
	por lo q hay q definirle los dos, no? el display es inutil solo cuando es position absolute?

	no se si la solucion q esperabas era darle una pseudo clase al holder del vertical align lightbox (.holderVert:before)
	pero es la mejor solucion q encontre pq la otra requeria darle tremendo line height y eso es problema

*/