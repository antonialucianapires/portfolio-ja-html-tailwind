const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const header = document.querySelector('header');
const brandName = document.getElementById('brandName');
const navLinks = document.getElementById('navLinks');
const socialIcons = document.getElementById('socialIcons'); 

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('bg-white')) {
    body.className = 'bg-gray-800 text-white';
    header.className = 'bg-gray-800 text-white';
    brandName.className = 'text-2xl font-bold text-white';
    navLinks.className = 'text-lg space-x-4 text-white';
    socialIcons.className = 'w-full sm:w-full md:w-full lg:w-32 flex flex-row sm:flex-row md:flex-row lg:flex-col items-center justify-center bg-transparent mb-8 space-x-4 sm:space-x-4 md:space-x-4 lg:space-x-0 space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-2 text-white'; // Nova linha
    themeIcon.className = 'fas fa-sun';
  } else {
    body.className = 'bg-white text-gray-900';
    header.className = 'bg-white text-gray-900';
    brandName.className = 'text-2xl font-bold text-gray-900';
    navLinks.className = 'text-lg space-x-4 text-gray-900';
    socialIcons.className = 'w-full sm:w-full md:w-full lg:w-32 flex flex-row sm:flex-row md:flex-row lg:flex-col items-center justify-center bg-transparent mb-8 space-x-4 sm:space-x-4 md:space-x-4 lg:space-x-0 space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-2 text-gray-600'; // Nova linha
    themeIcon.className = 'fas fa-moon';
  }
});
