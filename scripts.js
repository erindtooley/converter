// Grab the form and assign it to variable
const form = document.querySelector("form");

/**
 * Convert a measurement from user input.
 * @param {Number} userInput
 * @returns {Number} - return the converted measurement
 */


const inches = Number("#user-input");
const feet = Number(inches / 12);

function LengthConverter(inches) {
  document.getElementById("#user-output").innerHTML= 
    document.getElementById("#user-input").value;
}
function submitHandler() {
  document.querySelector("#user-input") === inches;
  
}  
form.addEventListener("submit", submitHandler);
document.querySelector("#user-output").innerHTML = feet;
 