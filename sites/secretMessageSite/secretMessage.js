// secret-message.js
// import functions
import {
  toggleHiddenElement,
  changeToFunkyColor,
} from "../modules/domFunction.js";

// importing default
// import domFunction from "../modules/domFunction";

// const { toggleHiddenElement, changeToFunkyColor } = domFunction;

// This is the button element
const buttonElement = document.getElementById("secret-button");
// This is the p element
const pElement = document.getElementById("secret-p");

// Event listener for the button
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
});
