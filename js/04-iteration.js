/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses =', courses);

//~ Через цикл for
// for (let i = 0; i < courses.length; i++) {
//   const item = courses[i];

//   console.log(item);
// }

//~ Через цикл for...of
// for (const item of courses) {
//   console.log(item);
// }

// const firstName = 'Oleksii';

// console.log(firstName);

// for (const char of firstName) {
//   console.log(char);
// }

/*
TODO: Напиши скрипт для перебора масиву fruitsList.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/
// const fruitsList = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log(fruitsList);

//~ Через цикл for
// for (let i = 0; i < fruitsList.length; i++) {
//   console.log(`${i + 1}: ${fruitsList[i]}`);
// }

//~ Через цикл for...of
// for (const fruit of fruitsList) {
//   const idxOfFruit = fruitsList.indexOf(fruit);

//   console.log(`${idxOfFruit + 1}: ${fruit}`);
// }

/*
TODO: Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// console.log('numbers =', numbers);

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     // total = total + num;
//     total += num;
//   }
// }

// console.log('total =', total);
