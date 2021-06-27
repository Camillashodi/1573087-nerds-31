const modalLink = document.querySelector(".footer-location .btn");
const feedbackPopup = document.querySelector(".feedback");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackClose = feedbackPopup.querySelector(".close-btn");
const feedbackName = feedbackPopup.querySelector(".feedback-item-name input");
const feedbackEmail = feedbackPopup.querySelector(".feedback-item-email input");


modalLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    feedbackName.focus();
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    if (feedbackPopup.classList.contains("modal-error")) {
        feedbackPopup.classList.remove("modal-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
        }
        if (feedbackPopup.classList.contains("modal-error")) {
            feedbackPopup.classList.remove("modal-error");
        }
    }
});