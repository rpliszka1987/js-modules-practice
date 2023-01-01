// This is a JS file for the secretImage
// import functions
import {
  toggleHiddenElement,
  changeToFunkyColor,
} from "../modules/domFunction.js";

// importing default
// import resources from "../modules/domFunction";

// const { toggleHiddenElement, changeToFunkyColor } = resources;

// Gets button element from html
const buttonElement = document.getElementById("secret-button");

// gets image element from the html
const imgElement = document.getElementById("secret-image");

// Event listiner for the click of the button in the html
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement);
});
