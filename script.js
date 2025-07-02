let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    if (display.value === "") {
      display.value = "0"; // If-else condition added
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}