// First task
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);
const btnStoptEl = document.querySelector('[data-stop]');
console.log(btnStoptEl);

let intervalId = null;

btnStartEl.addEventListener('click', () => {
  btnStartEl.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
btnStoptEl.addEventListener('click', () => {
  clearInterval(intervalId);
  btnStartEl.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
