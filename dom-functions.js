// dom-function.js

// this is a function which changes the display content on the page.
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

// this is a function which changes display colors
const changeToFunkyColor = (domElement) => {
  // generates random numbers
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};

// exports the function so they can be used in other files.
export { toggleHiddenElement, changeToFunkyColor };
