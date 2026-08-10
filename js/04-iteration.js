/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// TODO: Порахуйте загальну кількість відгуків.

//~ Через цикл for...in
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(`${key}: ${feedback[key]}`);

//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//~ Через метод Object.keys() та цикл for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// const feedbackKeys = Object.keys(feedback);

// console.log('feedbackKeys =', feedbackKeys);

// let totalFeedback = 0;

// for (const key of feedbackKeys) {
//   console.log(`${key}: ${feedback[key]}`);

//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

//~ Через метод Object.values() та цикл for...of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// const feedbackValues = Object.values(feedback);

// console.log('feedbackValues =', feedbackValues);

// let totalFeedback = 0;

// for (const value of feedbackValues) {
//   totalFeedback += value;
// }

// console.log(totalFeedback);
