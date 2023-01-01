// This is a JS file for the secretImage

// Gets button element from html
const buttonElement = document.getElementById("secret-button");

// gets image element from the html
const imgElement = document.getElementById("secret-image");

// function that changes element display from none to block and other way around
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

// Event listiner for the click of the button in the html
buttonElement.addEventListener("click", () => {
  toggleHiddenElement(imgElement);
});
