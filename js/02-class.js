/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 */

class User {
  #email;
  #tel;

  constructor(firstName, lastName, age, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#email = email;
    this.#tel = tel;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (newEmail.includes('@')) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }
}

const user1 = new User('Katharine', 'Lucas', 22, 'ktuob@obeji.am', '(645) 385-6869');

console.log('user1 =', user1);
// console.log(user1.getFullName());
// console.log(user1.isAdult());

// console.log(user1.getEmail());
// user1.setEmail('katharine@gmail.com');
// console.log(user1.getEmail());

console.log(user1.tel);
user1.tel = '(322) 870-7158';
console.log(user1.tel);

const user2 = new User('Willie', 'Lopez', 17, 'bomoevi@oji.kr', '(238) 291-5633');

console.log('user2 =', user2);
// console.log(user2.getFullName());
// console.log(user2.isAdult());

// console.log(user2.getEmail());
// user2.setEmail('willie@gmail.com');
// console.log(user2.getEmail());

console.log(user2.tel);
user2.tel = '(310) 365-6692';
console.log(user2.tel);
