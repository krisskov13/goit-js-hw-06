const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let value = 0;

function updateValue(newValue) {
  counterValue.textContent = newValue;
}

decrementButton.addEventListener("click", () => {
  value -= 1;
  updateValue(value);
});

incrementButton.addEventListener("click", () => {
  value += 1;
  updateValue(value);
});
