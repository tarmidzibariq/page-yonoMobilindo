const checkbox = document.querySelector('.checkbox');
const navbarNav = document.getElementById('navbarNav');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navbarNav.classList.add('show');
  } else {
    navbarNav.classList.remove('show');
  }
});
