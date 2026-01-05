
import { Display } from "./Display.js";

// HTML Elements
const displayValuePrevious = document.getElementById("value-previous");
const displayValueCurrent = document.getElementById("value-current");
const buttonsNumbers = document.querySelectorAll(".number");
const buttonsOperators = document.querySelectorAll(".operator");

const display = new Display(displayValuePrevious, displayValueCurrent);

buttonsNumbers.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonsOperators.forEach(button => {
    button.addEventListener("click", () => display.compute(button.value));
});

const buttonDelete = document.querySelector(".btn-delete");
const buttonReset = document.querySelector(".btn-reset");

buttonDelete.addEventListener("click", () => display.delete());
buttonReset.addEventListener("click", () => display.deleteEverything());
