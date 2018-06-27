var link = document.querySelector(".button-location");
var feedback = document.querySelector(".modal-feedback-form");
var body = document.querySelector("body");
var close = feedback.querySelector(".modal-close");
var form = feedback.querySelector("form");
var name = feedback.querySelector("#name-feedback");
var email = feedback.querySelector("#email-feedback");
var message = feedback.querySelector("#message-feedback");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    body::after.style.display = "block";                     /*  Как сделать оверлей? */
    name.focus();                                       /* Не работает фокус */
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value || !message.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");             /* Не работает */
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedback.classList.contains("modal-show")) {
            feedback.classList.remove("modal-show");
            feedback.classList.remove("modal-error");
        }
    }
});

/* Как сделать карту? Сделать ли для нее дополнительный попап? Или она должна лежать прямо на странице? */