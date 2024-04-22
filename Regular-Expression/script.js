// regex 
let regexInputdra = document.querySelector("#regexInputdra");
let validationTextdra = document.querySelector("#validation-text-dra");

const REGULAR_EXPRESSION_1 = /^[^\d]{10,}$/;

regexInputdra.addEventListener("input", function() {
    validationTextdra.textContent = REGULAR_EXPRESSION_1.test(regexInputdra.value) 
    ? "Valid" : "Invalid, minimum 10 characters required.";
});

// regex dua
let regexInputdra2 = document.querySelector("#regexInputdra2");
let validationTextdra2 = document.querySelector("#validation-text-dra2");

const REGULAR_EXPRESSION_2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

regexInputdra2.addEventListener("input", function() {
    validationTextdra2.textContent = REGULAR_EXPRESSION_2.test(regexInputdra2.value) 
    ? "Valid" : "Invalid, minimum 8 characters required with at least one uppercase, one lowercase, and one digit.";
});

// regex tiga
let regexInputdra3 = document.querySelector("#regexInputdra3");
let validationTextdra3 = document.querySelector("#validation-text-dra3");

const REGULAR_EXPRESSION_3 = /^[a-zA-Z0-9]{6,12}$/;

regexInputdra3.addEventListener("input", function() {
    validationTextdra3.textContent = REGULAR_EXPRESSION_3.test(regexInputdra3.value) 
    ? "Valid" : "Invalid, minimum 6 characters and maximum 12 characters allowed with only letters and numbers.";
});

// regex empat
let regexInputdra4 = document.querySelector("#regexInputdra4");
let validationTextdra4 = document.querySelector("#validation-text-dra4");

const REGULAR_EXPRESSION_4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

regexInputdra4.addEventListener("input", function() {
    validationTextdra4.textContent = REGULAR_EXPRESSION_4.test(regexInputdra4.value) 
    ? "Valid" : "Invalid email format.";
});

// regex lima
let regexInputdra5 = document.querySelector("#regexInputdra5");
let validationTextdra5 = document.querySelector("#validation-text-dra5");

const REGULAR_EXPRESSION_5 = /^\d{5}$/;

regexInputdra5.addEventListener("input", function() {
    validationTextdra5.textContent = REGULAR_EXPRESSION_5.test(regexInputdra5.value) 
    ? "Valid" : "Invalid, 5 digits required.";
});
