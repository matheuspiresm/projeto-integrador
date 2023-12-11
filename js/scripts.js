console.log("wassup");

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)

/*JS do carrossel*/

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function showItem(index) {
    items.forEach(item => item.style.display = 'none');
    items[index].style.display = 'block';
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  }

  // Iniciar o carrossel
  showItem(currentIndex);

  // intervalo para avançar automaticamente
  setInterval(nextItem, 3100);
});