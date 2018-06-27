var link = document.querySelector(".button-location");
var feedback = document.querySelector(".modal-feedback-form");
var container = document.querySelector(".feedback-container");
var close = feedback.querySelector(".modal-close");
var form = feedback.querySelector("form");
var nme = feedback.querySelector("#name-feedback");
var email = feedback.querySelector("#email-feedback");
var message = feedback.querySelector("#message-feedback");


link.addEventListener("click", function (evt) {
    evt.preventDefault();                 
    container.classList.add("modal-show");
    nme.focus();                                      
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    container.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!nme.value || !email.value || !message.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");             
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (container.classList.contains("modal-show")) {
            container.classList.remove("modal-show");
            feedback.classList.remove("modal-error");
        }
    }
});
