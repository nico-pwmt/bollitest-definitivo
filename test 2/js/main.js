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

	var $tooltip;

	$("[data-tooltip]").on("mouseenter", function() {
		var text = $(this).data("tooltip");
		$tooltip = $("<span class='tooltip'>" + text + "</span>");
		var posX = $(this).offset().left;
		var posY = $(this).offset().top;
		var width = $(this).outerWidth();
		var height = $(this).outerHeight();
		$("body").append($tooltip);
		var tooltipWidth = $tooltip.outerWidth();
		var tooltipHeight = $tooltip.outerHeight();
		var tooltipPositionX = 0;
		var tooltipPositionY = 0;

		if ($(this).data("tooltip-position") == "bottom") {
			tooltipPositionX = posX + width / 2 - tooltipWidth / 2;
			tooltipPositionY = posY + height + 5;
			$tooltip.addClass("bottom");																					// var
		}	else if ($(this).data("tooltip-position") == "left") {
			tooltipPositionX = posX - tooltipWidth - 5;
			tooltipPositionY = posY + height / 2 - tooltipHeight / 2;
			$tooltip.addClass("left");
		} else if ($(this).data("tooltip-position") == "right") {
			tooltipPositionX = posX + width + 5;
			tooltipPositionY = posY + height / 2 - tooltipHeight / 2;
			$tooltip.addClass("right");
		} else {
			tooltipPositionX = posX + width / 2 - tooltipWidth / 2;
			tooltipPositionY = posY - tooltipHeight - 5;
		}
		$tooltip.css({left: tooltipPositionX, top: tooltipPositionY});
	}).on("mouseleave", function() {
		$tooltip.remove();
	});

	/* LIGHTBOXES */

	$(".openLightbox").on("click", function() {
		$(".holder, .lightbox").show();
		var width = $(".lightbox").outerWidth();
		var height = $(".lightbox").outerHeight();
		$(".lightbox").css({"margin-top": - height / 2, "margin-left": - width / 2});       // limpiar
	});
	$(".lightbox .close, .holder").on("click", function() {
		$(".holder, .lightbox").hide();                        // clase
	});

	$(".openVertLightbox").on("click", function() {
		$(".holderVert").show();
	});
	$(".vertLightbox .close").on("click", function() {
		$(".holderVert").hide();
	});

	$(".openFlexLightbox").on("click", function() {
		$(".holderFlex").css("display", "flex");
	});
	$(".flexLightbox .close").on("click", function() {
		$(".holderFlex").hide();
	})

	/* AUTOCOMPLETE */

	var paises = ["Argentina", "dogistan", "sarasaland", "zaragoza"];

})();




/* 

	autocomplete 
	solo sugiere a partir de 3 caracteres
	consulta ajax jquery --
	hacer un array 
	cualquier input con clase js-suggest


*/





/*

	por q TEST BUTTONS no funcionan? solo detecta el primero? why?

	show() y hide() en vez de clases?

*/