
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const header = document.querySelector('header');
const brandName = document.getElementById('brandName');
const navLinks = document.getElementById('navLinks');

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('bg-white')) {
    body.className = 'bg-gray-800 text-white';
    header.className = 'bg-gray-800 text-white';
    brandName.className = 'text-2xl font-bold text-white';
    navLinks.className = 'text-lg space-x-4 text-white';
    themeIcon.className = 'fas fa-sun';
  } else {
    body.className = 'bg-white text-gray-900';
    header.className = 'bg-white text-gray-900';
    brandName.className = 'text-2xl font-bold text-gray-900';
    navLinks.className = 'text-lg space-x-4 text-gray-900';
    themeIcon.className = 'fas fa-moon';
  }
});
