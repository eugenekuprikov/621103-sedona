
var btn = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=date-in]");
var departure = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=number-adults]");
var children = popup.querySelector("[name=number-children]");

btn.addEventListener("click", function() {
	popup.classList.toggle("modal-show");

	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || !children.value) {
          evt.preventDefault();
          console.log("Нужно ввести дату въезда, выезда, количество взрослых и детей");
    }
});