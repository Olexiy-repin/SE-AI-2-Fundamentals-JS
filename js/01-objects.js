/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const courseHTMLTitle = 'HTML Fundamentals';
// const courseHTMLDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga!';

// const courseHTMLArr = [
//   'HTML Fundamentals',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga!',
//   7,
//   10000,
// ];

const courseHTML = {
  title: 'HTML Fundamentals',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga!',
  rating: 9,
  price: 10000,
  isOnSale: true,
  teachers: ['Lettie Carlson', 'Fanny Watts'],
  images: {
    l: 'https://my-site.com/html-l.png',
    m: 'https://my-site.com/html-m.png',
    s: 'https://my-site.com/html-s.png',
  },
};

console.log(courseHTML);

console.log(courseHTML.title);
console.log(courseHTML.rating);
console.log(courseHTML.teachers[0]);

console.log(courseHTML['price']);

const key = 'isOnSale';

console.log(courseHTML.key);
console.log(courseHTML[key]);

console.log(courseHTML.images.m);

courseHTML.price = 8000;
courseHTML.test = 'Hello world';

console.log(courseHTML);
