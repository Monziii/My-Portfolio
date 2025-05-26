
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const headerImages = [
    'assets/images/header.png',
    'assets/images/header1.png',
    'assets/images/header2.png',
    'assets/images/header3.png',
    'assets/images/header4.png'
  ];
  let currentImageIndex = 0;

  function changeHeaderBackground() {
    header.style.backgroundImage = `url('${headerImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % headerImages.length;
  }

  changeHeaderBackground();

  setInterval(changeHeaderBackground, 3000);

  window.toggleMenu = function () {
    const menu = document.getElementById('menu');
    if (menu.style.right === '0px') {
      menu.style.right = '-260px';
    } else {
      menu.style.right = '0px';
    }
  };

  const galleryImages = document.querySelectorAll('.gallery img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close-modal');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = img.src;
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
