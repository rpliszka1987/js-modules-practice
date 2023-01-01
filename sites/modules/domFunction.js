// function that changes element display from none to block and other way around
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

// Function to change the background color to random colors.
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};

// export as a resource
// const resources = {
//   toggleHiddenElement,
//   changeToFunkyColor,
// };

// exporting function to be available to other files in the directory
export { toggleHiddenElement, changeToFunkyColor };

// exporting as default
// export default resources;
