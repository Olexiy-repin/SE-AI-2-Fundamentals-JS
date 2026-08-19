/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 20];

/*
З початковим значенням для акума
  1 Ітерація
  acc = 0;
  el = 5;
  idx = 0;
  arr = [5, 10, 20];

  return 5;

  2 Ітерація
  acc = 5;
  el = 10;
  idx = 1;
  arr = [5, 10, 20];

  return 15;

  3 Ітерація
  acc = 15;
  el = 20;
  idx = 2;
  arr = [5, 10, 20];

  return 35;
*/

/*
Без початкового значення для акума
  1 Ітерація
  acc = 5;
  el = 10;
  idx = 1;
  arr = [5, 10, 20];

  return 15;

  2 Ітерація
  acc = 15;
  el = 20;
  idx = 2;
  arr = [5, 10, 20];

  return 35;
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(numbers);
// console.log(total);

/*
TODO: Рахуємо загальну кількість годин
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

/*
  1 Ітерація
  acc = 0;
  el = { id: 'player-1', name: 'Mango', timePlayed: 310, online: false };
  idx = 0;
  arr = players;

  return 310;

  2 Ітерація
  acc = 310;
  el = { id: 'player-2', name: 'Poly', timePlayed: 470, online: true };
  idx = 1;
  arr = players;

  return 780;
*/

// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);
