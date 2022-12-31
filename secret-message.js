// secret-message.js

// This is the button element
const buttonElement = document.getElementById("secret-button");
// This is the p element
const pElement = document.getElementById("secret-p");

// this is a function which changes the display content on the page.
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

// Event listener for the button
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
});
