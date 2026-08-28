/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
 * Object.create() та ланцюжки прототипів
 */
// const userMethods = {
//   role: 'USER',

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

// const user1 = Object.create(userMethods);

// user1.firstName = 'Sadie';
// user1.lastName = 'Schultz';
// user1.age = 20;

// console.log('user1 =', user1);

// console.log(user1.getFullName());
// console.log(user1.isAdult());

// const user2 = Object.create(userMethods);

// user2.firstName = 'Effie';
// user2.lastName = 'Campbell';
// user2.age = 17;

// console.log('user2 =', user2);

// console.log(user2.getFullName());
// console.log(user2.isAdult());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   propertyC: 'Obj C',
// };

// const objB = Object.create(objC);

// objB.propertyB = 'Obj B';

// const objA = Object.create(objB);

// objA.propertyA = 'Obj A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const objAKeys = Object.keys(objA);

// console.log('objAKeys =', objAKeys);

// console.log(objA.hasOwnProperty('propertyA'));
// console.log(objA.hasOwnProperty('propertyB'));
// console.log(objA.hasOwnProperty('propertyC'));
