function getValues() {
  let userString = document.getElementById("userString").value;

  let revString = reverseString(userString);
  displayString(revString);
}

function reverseString(input) {
  let revString = "";

  for (let i = input.length - 1; i >= 0; i--) {
    let letter = input[i];

    revString = revString + letter;
  }

  return revString;
}

function displayString(output) {
  document.getElementById("results").textContent = output;
  let alertBox = document.getElementById("alert");

  alertBox.classList.remove("invisible");
}
