// secret-message.js

// This is the button element
const buttonElement = document.getElementById("secret-button");
// This is the p element
const pElement = document.getElementById("secret-p");



// Event listener for the button
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
});
