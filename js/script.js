// Selecting the necessary DOM elements
const billInput = document.getElementById("bill");
const customPercentInput = document.getElementById("customPercent");
const numberOfPeopleInput = document.getElementById("numberOfPeople");
const btnReset = document.getElementById("reset");
const tipAmount = document.getElementById("tipAmount");
const tipTotal = document.getElementById("tipTotal");
const inputPercentButtons = document.querySelectorAll(".input-percent");
const errorMsg = document.querySelector(".error-msg");

// Function to validate numerical inputs
function validateInput(event) {
  const key = event.key;
  const validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  
  if (!validChars.includes(key)) {
    event.preventDefault();
  }
}

// Adding event listeners to inputs for numerical validation
billInput.addEventListener("keypress", validateInput);
customPercentInput.addEventListener("keypress", validateInput);
numberOfPeopleInput.addEventListener("keypress", validateInput);

// Function to calculate the tip
function calculateTip(tipPercent) {
  const bill = parseFloat(billInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  
  if (isNaN(bill) || bill <= 0 || isNaN(numberOfPeople) || numberOfPeople <= 0) {
    errorMsg.style.display = "inline";
    return;
  } else {
    errorMsg.style.display = "none";
  }
  
  const tipAmountValue = (bill * (tipPercent / 100)) / numberOfPeople;
  const totalAmountValue = (bill / numberOfPeople) + tipAmountValue;
  
  tipAmount.textContent = `$${tipAmountValue.toFixed(2)}`;
  tipTotal.textContent = `$${totalAmountValue.toFixed(2)}`;
}

// Adding event listeners to percentage buttons
inputPercentButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const tipPercent = parseFloat(event.target.value);
    calculateTip(tipPercent);
  });
});

// Custom percentage input event listener
customPercentInput.addEventListener("input", () => {
  const customPercent = parseFloat(customPercentInput.value);
  if (!isNaN(customPercent) && customPercent > 0) {
    calculateTip(customPercent);
  }
});

// Reset button functionality
btnReset.addEventListener("click", () => {
  billInput.value = "";
  customPercentInput.value = "";
  numberOfPeopleInput.value = "";
  tipAmount.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  errorMsg.style.display = "none";
});
