const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const header = document.querySelector('header');
const brandName = document.getElementById('brandName');
const navLinks = document.getElementById('navLinks');
const cards = document.querySelectorAll('.card'); 
const loadMoreButton = document.getElementById('loadMore'); 
const skillTitles = document.querySelectorAll('.skill-title'); 
const skillDescriptions = document.querySelectorAll('.skill-description'); 

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('bg-white')) {
    body.className = 'bg-gray-800 text-white';
    header.className = 'bg-gray-800 text-white';
    brandName.className = 'text-2xl font-bold text-white';
    navLinks.className = 'text-lg space-x-4 text-white';
    themeIcon.className = 'fas fa-sun';


    cards.forEach(card => {
      card.className = 'card bg-white border-black text-black';
    });
    loadMoreButton.className = 'bg-purple-600 text-white px-4 py-2 rounded mt-4 mx-auto';
    skillTitles.forEach(title => {
      title.className = 'skill-title text-white font-bold relative ml-2';
    });
    skillDescriptions.forEach(description => {
      description.className = 'skill-description text-xs text-white mb-3';
    });
  } else {
    body.className = 'bg-white text-gray-900';
    header.className = 'bg-white text-gray-900';
    brandName.className = 'text-2xl font-bold text-gray-900';
    navLinks.className = 'text-lg space-x-4 text-gray-900';
    themeIcon.className = 'fas fa-moon';

    cards.forEach(card => {
      card.className = 'card';
    });
    loadMoreButton.className = 'bg-gray-400 text-white px-4 py-2 rounded mt-4 mx-auto';
    skillTitles.forEach(title => {
      title.className = 'skill-title text-black font-bold relative ml-2';
    });
    skillDescriptions.forEach(description => {
      description.className = 'skill-description text-xs text-white mb-3';
    });
  }
});
