const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');

calculateButton.addEventListener('click', calculateTithe);

function calculateTithe() {
  const number = numberInput.value;
  const tithe = number * 0.1;
  resultText.textContent = `One-tenth of  ${number} is ${tithe}`;
  result.classList.remove('hidden');
}