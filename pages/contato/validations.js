validations.js

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}