(function() {

	var NUMBER_PI = 3.14;

	var summary = [];

	var funcSuma = function() {
		var sum = 0;
		var total = document.querySelector(".total");
		for (var i = 0; i < summary.length; i++) {
			sum = sum + Number(summary[i].itemQuantity);
		}
		total.innerHTML = sum;
	};

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
		$(".holder, .lightbox").removeClass("is-hidden");
		var width = $(".lightbox").outerWidth();
		var height = $(".lightbox").outerHeight();
		$(".lightbox").css({"margin-top": - height / 2, "margin-left": - width / 2});       // limpiar
	});
	$(".lightbox .close, .holder").on("click", function() {
		$(".holder, .lightbox").addClass("is-hidden");
	});

	$(".openVertLightbox").on("click", function() {
		$(".holderVert").removeClass("is-hidden");
	});
	$(".vertLightbox .close, .holderVert").on("click", function() {
		$(".holderVert").addClass("is-hidden");
	});
	$(".vertLightbox").on("click", function(event) {
		event.stopPropagation();
	});

	$(".openFlexLightbox").on("click", function() {
		$(".holderFlex").removeClass("is-hidden");
	});
	$(".flexLightbox .close, .holderFlex").on("click", function() {
		$(".holderFlex").addClass("is-hidden");
	})
	$(".flexLightbox").on("click", function(event) {
		event.stopPropagation();
	});



	/* AUTOCOMPLETE */
/*
	var countries = ["Argentina", "dogistan", "sarasaland", "zaragoza"];

	var suggestions = $(".js-suggest");

	suggestions.one("keypress", function() {
		var $list = $("<ul class='suggestions'></ul>");
		var position = $(this).offset();
		var width = $(this).outerWidth();
		var height = $(this).outerHeight();

		$("body").append($list);
		for (var i = 0; i < countries.length; i++) {
			$list.append("<li>" + countries[i] + "</li>");
		};
		$list.css({left: position.left, top: position.top + height, width: width});
		var item = $(".suggestions li");
		item.on("click", function() {
			var itemValue = item.html();
			suggestions.val(itemValue);
		});
	});

	var suggestions2 = $(".js-suggest2");

	suggestions2.on("click", function() {
		$.ajax({
			type: "GET",
			url: "endpoint.json",
			data: { get_param: 'value' },
			dataType: "json", 
			success: function(data) {
				console.log(data);
		}});
	});

	/*
	suggestions2.on("click", function() {
		$.getJSON("endpoint.json", function(result){
			console.log(result);
		});
	});
	*/
	
	var suggestions = $(".js-suggest");
	suggestions.on("keyup", function() {
		suggestions.toggleClass("valid", $(this).val().length >= 3);
		if ($(this).val().length >= 3) {
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/posts",
				success: function(response) {
					for (var i = 0; i < 5; i++) {
						console.log(response[i].title);
					}
				},

			});
		}

	});


	/* FLAT ARRAY */

	var multidimensional = [1, 2, 4, "dog", true, [12, "chabon", ["deep", "shit",["even deeper"], 53]], "banana"];

	$(".multidimensionalArray").on("click", function() {
		console.log(multidimensional);
	});

	function flattenArray(array) {
		var flattened = [];
		for (var i = 0; i < array.length; i++) {
			if (!Array.isArray(array[i])) {
				flattened.push(array[i]);
			} else {
				flattened = flattened.concat(flattenArray(array[i]));
			}
		}
		return flattened;
	};

	$(".flattenArray").on("click", function() {
		console.log(flattenArray(multidimensional));
	});



	/* CHESS BOARD */

	var messageTimer;
	var $message = $(".chessboard .message");

	var $pieceSelector = $(".pieceSelector");
	$pieceSelector.on("change", function() {
		console.log($(this).val())
	});	

	var horsePositionX = Math.floor(Math.random() * 8);
	var horsePositionY = Math.floor(Math.random() * 8);
	var $horsePositionCurrent = $(".chessboard .chessboard-row:eq(" + horsePositionY + ") :eq(" + horsePositionX + ")").addClass("horsie");
	var labelsX = {
		0: "a",
		1: "b",
		2: "c",
		3: "d",
		4: "e",
		5: "f",
		6: "g",
		7: "h",
	};
	var labelsY = {
		0: 8,
		1: 7,
		2: 6,
		3: 5,
		4: 4,
		5: 3,
		6: 2,
		7: 1,
	};

	$(".chessboard .square").on("click", function() {
		var clickPositionX = $(this).index();
		var clickPositionY = $(this).parent().index();
		var deltaX = Math.abs(horsePositionX - clickPositionX);
		var deltaY = Math.abs(horsePositionY - clickPositionY);
		var message = "";
		if (deltaX == 2 && deltaY == 1 || deltaX == 1 && deltaY == 2) {
			$horsePositionCurrent.removeClass("horsie");
			$horsePositionCurrent = $(".chessboard .chessboard-row:eq(" + clickPositionY + ") .square:eq(" + clickPositionX + ")");
			horsePositionX = clickPositionX;
			horsePositionY = clickPositionY;
			$horsePositionCurrent.addClass("horsie");
		} else if (clickPositionX == horsePositionX && clickPositionY == horsePositionY) {
			message = "dis is horse";
		} else {
			message = "ILLEGAL MOVE";
		}

		var messagePosition = "The position is " + labelsX[clickPositionX] + labelsY[clickPositionY];
		$message.html(messagePosition + "<br>" + message);

		clearTimeout(messageTimer);
		messageTimer = setTimeout(function() {
			$message.html("");
		}, 1000);


	});

	/* LOG 1 to 10 */

	$(".log").on("click", function() {
		for (var i = 1; i <= 10; i++) {
			(function(i) {
				setTimeout(function() {
					console.log(i)
				}, 1000 + i*100);
			})(i);
		}
	});

	/* FIBONACCI */

	/* NON RECURSIVE */
	/*
	$(".fibonacci").on("click", function() {
		var a = 0;
		var b = 1;
		var result = 0;
		for (var i = 1; i <= 100; i++) {
			result = a + b;
			a = b;
			b = result;
			console.log(result);
		}
	});
	*/
	/* RECURSIVE */

	var fibNumber = $(".fibNumber");
	fibNumber.val(0);

	function fibi(posN) {
		if (posN == 0) {
			return 0;
		} else if (posN == 1) {
			return 1;
		} else if (posN < 0 || posN > 100) {
			return "DEJATE DE JODER";
		}
		return fibi(posN - 1) + fibi(posN - 2);
	};

	$(".fibLogger").on("click", function() {
		console.log(fibi(fibNumber.val()));
		fibNumber.val(0);
	});


})();













/*

	--------

	un select del chess para elejir piezas
	ELEJIR SPAWN CHESS PIECES
	spawn una pieza en random spot y q funcione

	------------

	enviar los titulos abajo del input con un div con 5 a=href

	click afuera del input, desaparece el div
	focus campo, se muestra, si hay 3 caracteres, unfocus, desaparece
	
	q js lo cree al final del body

	al clickear link, prevent default, y el titulo q clickeo pasa al valor del input

	--------------

	ta te ti



*/