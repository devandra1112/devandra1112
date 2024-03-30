// Devandra Deal
let regexInputYomar = document.querySelector("#221402040-devandradeal")
let validationTextYomar = document.querySelector("#221402040-devandradeal-validation-text")

const REGULAR_EXPRESSION_YOMAR = new RegExp("^[\w\.-]+@[a-zA-Z\d\.-]+*","i");

regexInput.addEventListener("input", function() {
    validationTextYomar.innerHTML = REGULAR_EXPRESSION_YOMAR.test(regexInputYomar.value) ? "Valid" : "Invalid"
})