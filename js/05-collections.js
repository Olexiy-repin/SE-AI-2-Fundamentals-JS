/*
 * Створюємо та додаємо колекцію
 */
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://placehold.co/700x460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://placehold.co/700x460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://placehold.co/700x460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://placehold.co/700x460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://placehold.co/700x460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//* Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = pictureInfo => {
  // Створення li
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  // Створення a
  const galleryLinkEl = document.createElement('a');

  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Створення img
  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = pictureInfo.url;
  galleryImgEl.alt = pictureInfo.alt;
  galleryImgEl.width = pictureInfo.width;
  galleryImgEl.height = pictureInfo.height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

//* Створення масиву елементів
const galleryCardsArr = pictures.map(pic => createGalleryCard(pic));

console.log(galleryCardsArr);

//* Вставка колекції карток на сторінку
const refs = {
  galleryList: document.querySelector('.js-gallery'),
};

refs.galleryList.append(...galleryCardsArr);
