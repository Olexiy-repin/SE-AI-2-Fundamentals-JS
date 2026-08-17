/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callback) {
//   console.log(callback);

//   callback();
// };

// const fn2 = function () {
//   console.log('Hello from fn2!');
// };

// const fn3 = function () {
//   console.log('Hello from fn3!');
// };

// fn1(fn2);

// fn1(fn3);

//~ Інлайновий колбек
// const fn1 = function (callback, propA, propB) {
//   console.log('callback =', callback);
//   console.log('propA =', propA);
//   console.log('propB =', propB);

//   callback();
// };

// fn1(
//   function () {
//     console.log('Hello from inline callback');
//   },
//   100,
//   'Hello'
// );

/*
TODO: Напишіть функцію each(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: each повинна повернути новий масив, елементами якого будуть
TODO: результати виклику коллбека.
 */
// const each = function (array, callback) {
//   console.log(array);

//   const newArr = [];

//   for (const item of array) {
//     newArr.push(callback(item));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
