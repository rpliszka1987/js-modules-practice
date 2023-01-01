// This is a JS file for the secretImage

// Gets button element from html
const buttonElement = document.getElementById("secret-button");

// gets image element from the html
const imgElement = document.getElementById("secret-image");



// Event listiner for the click of the button in the html
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(imgElement);
});
