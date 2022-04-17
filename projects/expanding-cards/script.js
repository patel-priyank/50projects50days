document.querySelectorAll('.image').forEach((item) => {
  item.addEventListener('click', (event) => {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
  });
});
