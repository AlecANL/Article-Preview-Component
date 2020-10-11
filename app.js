const sharedBtn = document.querySelector('.icon-shared');
const modal = document.getElementById('modal');
const socialMedia = document.querySelector('.social-media');

socialMedia.addEventListener('click', (e) => {
  const icon = e.target;
  if (icon.classList.contains('icon-shared')) {
    modal.classList.toggle('visible');
  }
});
