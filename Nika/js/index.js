const mediaMenuIcon = document.querySelector('.media-main-menu');
const hideMenu = document.querySelector('.hide-menu');
const closeMenuIcon = document.querySelector('.icon-close-menu');
const mediaMenu = document.querySelector('.media-menu');
/**
 * Обработчик клика на иконку меню в режиме маленького экрана
 */
mediaMenuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  hideMenu.classList.remove('display-none');
  mediaMenu.classList.add('display-none');
});

closeMenuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  hideMenu.classList.add('display-none');
  mediaMenu.classList.remove('display-none');
});
