/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */

const user = {
  firstName: 'Isabel',
  lastname: 'Leonard',
};
const userCopy = user;

console.log('user =', user);
console.log('userCopy =', userCopy);

userCopy.firstName = 'Oleksii';

console.log('user =', user);
console.log('userCopy =', userCopy);
