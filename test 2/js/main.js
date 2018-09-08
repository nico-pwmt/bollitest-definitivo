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
		var width = $(this).width();
		$("body").append(tooltip);
		var tooltipWidth = tooltip.width();
		var tooltipHeight = tooltip.height();
		tooltip.offset({top: pos.top - tooltipHeight - 10, left: pos.left + width / 2 - tooltipWidth / 2});
	}).on("mouseleave", function() {
		var pos = $(this).offset();
		$(".tooltip").remove();
	});

	$(".openLightbox").on("click", function() {
		var height = $(".lightbox").height;
		var width = $(".lightbox").width;
		$(".lightbox").css({"display":"block", "margin-top":"-50px", "margin-left":"-70px"});
	});
	$(".lightbox .close").on("click", function() {
		$(".lightbox").css("display", "none");
	});

})();