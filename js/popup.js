
var btn = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=date-in]");

btn.addEventListener("click", function() {
	popup.classList.toggle("modal-show");

	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	
});