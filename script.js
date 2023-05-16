const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

const inputs = document.querySelectorAll('.input');
const segments = document.querySelectorAll('.number');
const segmentsValue = document.querySelectorAll('.segment-value');

spinBtn.onclick = function () {
  wheel.style.transform = 'rotate(' + value + 'deg)';
  value += Math.ceil(Math.random() * 3600);
};

const batata = (position) => {
  segmentsValue[position].textContent = inputs[position].value;
};

inputs.forEach((input, index) => {
  input.addEventListener('keydown', () => batata(index));
});
