const itemSecondaryMenu = Array.prototype.slice.call(document.querySelectorAll('.change-color-text-menu'));
const buttonText = document.querySelector('.color-text-button');
const itemInformation = Array.prototype.slice.call(document.querySelectorAll('.color-item-inform'));
const mediaMenuIcon = document.querySelector('.media-main-menu');
const hideMenu = document.querySelector('.hide-menu');
const closeMenuIcon = document.querySelector('.icon-close-menu');
const mediaMenu = document.querySelector('.media-menu');
const itemRetractableMenu = Array.prototype.slice.call(document.querySelectorAll('.item-retractable-menu'));
/**
 * Обработчик события изменения цвета текста второстепенного меню
 */
itemSecondaryMenu.map((item) => {
  item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    item.classList.remove('text-menu');
    item.classList.add('hover-text-menu');
  });
  return item;
});

itemSecondaryMenu.map((item) => {
  item.addEventListener('mouseout', (e) => {
    e.preventDefault();
    item.classList.add('text-menu');
    item.classList.remove('hover-text-menu');
  });
  return item;
});
/**
 * Обработчик события изменения цвета текста на кнопке
 */
buttonText.addEventListener('mouseover', (e) => {
  e.preventDefault();
  buttonText.classList.add('change-color-text-button');
});

buttonText.addEventListener('mouseout', (e) => {
  e.preventDefault();
  buttonText.classList.remove('change-color-text-button');
});
/**
 * Обработчик события изменения цвета текста в футтере
 */
itemInformation.map((item) => {
  item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    item.classList.add('change-color-item-inform');
  });
  return item;
});

itemInformation.map((item) => {
  item.addEventListener('mouseout', (e) => {
    e.preventDefault();
    item.classList.remove('change-color-item-inform');
  });
  return item;
});
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
/**
 * Обработчик события изменения цвета выдвигающегося меню
 */
itemRetractableMenu.map((item) => {
  item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    item.classList.add('change-color-item-etractable-menu');
    item.classList.remove('item-color');
  });
  return item;
});

itemRetractableMenu.map((item) => {
  item.addEventListener('mouseout', (e) => {
    e.preventDefault();
    item.classList.remove('change-color-item-etractable-menu');
    item.classList.add('item-color');
  });
  return item;
});
/**
 * В дальнейшем все обработчики событий изменения цвета текста перепешу с помощью псевдоклассов.
 */
