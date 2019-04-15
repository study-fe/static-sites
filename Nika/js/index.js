const mediaMenuIcon = document.querySelector('.media-menu__icon');
const hideMenu = document.querySelector('.hide-menu');
const hideMenuClose = document.querySelector('.hide-menu__close');
const mediaMenu = document.querySelector('.media-menu');
/**
 * @param {UIEvent} e
 */
mediaMenuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  hideMenu.classList.remove('hide-menu_hidden');
  mediaMenu.classList.add('hide-menu_hidden');
});
/**
 * @param {UIEvent} e
 */
hideMenuClose.addEventListener('click', (e) => {
  e.preventDefault();
  hideMenu.classList.add('hide-menu_hidden');
  mediaMenu.classList.remove('hide-menu_hidden');
});
