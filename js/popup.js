
var btn = document.querySelector(".button-search");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=date-in]");
var departure = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=number-adults]");
var children = popup.querySelector("[name=number-children]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("click", function() {
	popup.classList.toggle("modal-show");

	if (storage) {
          adults.value = storage;
          children.value = storage;
    }

	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || !children.value) {
          evt.preventDefault();
          console.log("Нужно ввести дату въезда, выезда, количество взрослых и детей");
    	  popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});