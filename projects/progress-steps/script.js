const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentNumber = 1;
const totalNumbers = document.querySelectorAll('.circle').length;

btnPrev.addEventListener('click', () => {
  if (currentNumber > 1) {
    --currentNumber;
  }

  document.querySelectorAll(`.circle:nth-of-type(n + ${currentNumber + 2})`).forEach((item) => {
    item.classList.remove('active');
  });

  setButtonState();
});

btnNext.addEventListener('click', () => {
  if (currentNumber <= totalNumbers) {
    ++currentNumber;
  }

  document.querySelectorAll(`.circle:nth-of-type(-n + ${currentNumber + 1})`).forEach((item) => {
    item.classList.add('active');
  });

  setButtonState();
});

function setButtonState() {
  if (currentNumber === 1) {
    btnPrev.setAttribute('disabled', '');
  } else {
    btnPrev.removeAttribute('disabled');
  }

  if (currentNumber === totalNumbers) {
    btnNext.setAttribute('disabled', '');
  } else {
    btnNext.removeAttribute('disabled');
  }

  setProgress();
}

function setProgress() {
  let width = ((document.querySelectorAll('.active').length - 1) / (totalNumbers - 1)) * 100;
  document.querySelector('.progress').style.width = `${width}%`;
}
