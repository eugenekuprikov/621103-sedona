
var btn = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");

btn.addEventListener("click", function() {
	popup.classList.toggle("modal-show");
});