const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button_element");
const buttonClear = document.querySelector(".button_clear");
const buttonEqually = document.querySelector(".button_equally");

function updateButtonEquallyState() {
  if (input.value === "") {
    buttonEqually.disabled = true;
  } else {
    buttonEqually.disabled = false;
  }
}

updateButtonEquallyState()

function inputOnDisplay(but) {
  input.value += but.textContent;
  updateButtonEquallyState();
  
}

function clearDisplay() {
  input.value = "";
  updateButtonEquallyState();
}
buttons.forEach((button) => {
  button.addEventListener("click", () => inputOnDisplay(button));
});

buttonClear.addEventListener("click", () => clearDisplay());

buttonEqually.addEventListener("click", () => {
  input.value = eval(input.value);
});

