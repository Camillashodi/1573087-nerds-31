const modalLink = document.querySelector(".footer-location .btn");
const feedbackPopup = document.querySelector(".feedback");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackClose = feedbackPopup.querySelector(".close-btn");
const feedbackName = feedbackPopup.querySelector(".feedback-item-name input")


modalLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    feedbackName.focus();
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
        }
    }
});