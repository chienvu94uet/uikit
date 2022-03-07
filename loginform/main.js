const form = document.querySelector('form');
const login = document.querySelector('.login');
const emailWrapper = form.querySelector('.email-wrapper');
const passwordWrapper = document.querySelector('.password-wrapper');
const email = form.querySelector('.email');
const password = document.querySelector('.password');

form.onsubmit = (e) => {
    e.preventDefault();
    if (!email.value.trim()) {
        emailWrapper.classList.add('error')
    }
    if (!password.value.trim()) {
        passwordWrapper.classList.add('error')
    }
}

