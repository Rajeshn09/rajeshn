let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteNumber() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
    if (isNaN(result.value) || result.value === Infinity) {
      throw new Error("Invalid expression");
    }
  } catch (error) {
    result.value = "Error: " + error.message;
  }
}
