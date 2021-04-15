const menuIcon = document.querySelector('.hamburger-menu');
const nav = document.querySelector('[data-nav]');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('change');
});