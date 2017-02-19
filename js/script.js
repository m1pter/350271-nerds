var link = document.querySelector(".btn-popup");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var overlay = document.querySelector('.modal-overlay');
var form = popup.querySelector("form");
var nameuser = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("overlay-show");
  nameuser.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("overlay-show");
});

 window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (popup.classList.contains("modal-content-show")) {
       popup.classList.remove("modal-content-show");
       overlay.classList.remove("overlay-show");
     }
   }
 });

 form.addEventListener("submit", function(event) {
   localStorage.setItem("name", nameuser.value);
   localStorage.setItem("email", email.value);
   localStorage.setItem("text", text.value);
 });
