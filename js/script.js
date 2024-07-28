const billInput = document.getElementById("bill");
const customPercentInput = document.getElementById("customPercent");
const numberOfPeopleInput = document.getElementById("numberOfPeople");

document.getElementById("bill").addEventListener("keypress", keypressNumbers);
document
  .getElementById("customPercent")
  .addEventListener("keypress", keypressNumbers);
document
  .getElementById("numberOfPeople")
  .addEventListener("keypress", keypressNumbers);

const FIVEPERCENT = document.getElementById("fivePercent");
const FIFTEENPERCENT = document.getElementById("fifteenPercent");

function keypressNumbers(event) {
  const key = event.key;
  const validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  if (!validChars.includes(key)) {
    event.preventDefault();
  }
}

// five percent
FIVEPERCENT.addEventListener("click", () => {
  let bill = parseFloat(billInput.value);
  if (!isNaN(bill)) {
    const fivePercent = (bill * (5 / 100)).toFixed(2);
    alert(`fivePercent ${fivePercent}`);
  } else {
    console.log("error");
  }
});

// five percent
FIFTEENPERCENT.addEventListener("click", () => {
  let bill = parseFloat(billInput.value);
  if (!isNaN(bill)) {
    const fifteenPercent = (bill * (15 / 100)).toFixed(2);
    alert(`fivePercent ${fifteenPercent}`);
  } else {
    console.log("error");
  }
});

customPercentInput.addEventListener("input", (event) => {
  let bill = parseFloat(billInput.value);
  if (!isNaN(bill)) {
    const custom = (bill * (event.target.value / 100)).toFixed(2);
    alert(`fivePercent ${custom}`);
  } else {
    console.log("error");
  }
});

numberOfPeopleInput.addEventListener("input", () => {
  if (numberOfPeopleInput.value.trim() === "") {
    console.log("The input field is empty.");
  } else {
    console.log("The input field is not empty.");
  }
});
