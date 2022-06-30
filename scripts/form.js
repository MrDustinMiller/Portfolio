const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

// nameInput.innerText = "Your Name";
// emailInput.innerText = "Your Email";
// subjectInput.innerText = "Subject";
// messageInput.innerText = "Your Message";

function validateForm() {
    if (nameInput.value < 1) {
        nameInput.value = "Name cannot be blank";
        nameInput.style.color = "red";
    }

    if (!emailIsValid(emailInput.value)) {
        emailInput.value = "Enter valid email address";
        emailInput.style.color = "red";
    }

    if (subjectInput.value < 1) {
        subjectInput.value = "Subject cannot be blank";
        subjectInput.style.color = "red";
    }

    if (messageInput.value < 1) {
        messageInput.value = "Message cannot be blank";
        messageInput.style.color = "red";
    }

}

function emailIsValid(emailInput) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailInput)
}

function clearMessages() {
    nameInput.innerText = "Your Name";
    emailInput.innerText = "Your Email";
    subjectInput.innerText = "Subject";
    messageInput.innerText = "Your Message";

}

nameInput.addEventListener('keydown', event => {
    if (event.keyCode === 8) {
        nameInput.style.color = "grey";
        nameInput.value = "";
    }
})

emailInput.addEventListener('click',function() {
    emailInput.style.color = "grey";
    emailInput.value = "";
})

subjectInput.addEventListener('click',function() {
    subjectInput.style.color = "grey";
    subjectInput.value = "";
})

messageInput.addEventListener('click',function() {
    messageInput.style.color = "grey";
    messageInput.value = "";
})

