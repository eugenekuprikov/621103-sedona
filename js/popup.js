
var btn = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");

var arrival = popup.querySelector("[name=date-in]");

btn.addEventListener("click", function() {
	popup.classList.toggle("modal-show");
});