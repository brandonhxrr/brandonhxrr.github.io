let i = 1;
const images = 7;
const hero = document.querySelector('.hero');
console.log("Hola");
setInterval(() => {
  hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/background/background (${i}).jpg')`;
  i = (i % images) + 1;
}, 6000);
