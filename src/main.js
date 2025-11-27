import './style.css'

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');

// Check local storage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcons(newTheme);
});

function updateThemeIcons(theme) {
  if (theme === 'dark') {
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  } else {
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  }
}

// Language Toggle
const langToggleBtn = document.getElementById('lang-toggle');
const langEnElements = document.querySelectorAll('.lang-en');
const langBnElements = document.querySelectorAll('.lang-bn');
const body = document.body;

let currentLang = 'en'; // Default

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  
  if (currentLang === 'bn') {
    body.classList.add('lang-bn-active');
    langEnElements.forEach(el => el.classList.add('hidden'));
    langBnElements.forEach(el => el.classList.remove('hidden'));
  } else {
    body.classList.remove('lang-bn-active');
    langEnElements.forEach(el => el.classList.remove('hidden'));
    langBnElements.forEach(el => el.classList.add('hidden'));
  }
});
