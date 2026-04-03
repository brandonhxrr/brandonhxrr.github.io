let i = 1;
const images = 9;
const hero = document.querySelector('.hero');

const colors = ['#DCE1FF', '#E1F0F4', '#d3d2d8', '#b7d4e3', '#b5cfce', '#f0e8da', '#e3c4c5', '#d2d8eb', '#c6c8d0']

setInterval(() => {
  hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/background/background (${i}).jpg')`;
  
  document.documentElement.style.setProperty('--Material-Blue-Light', colors[i-1]);
  console.log(colors[i-1]);
  console.log(i);

  i = (i % images) + 1;

}, 6000);

const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    if (themeBtn) themeBtn.textContent = '🌙';
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        themeBtn.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}