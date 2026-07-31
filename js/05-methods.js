/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf/lastIndexOf
 *  - trim
 */

const email = '  test@gmail.com  ';
const idx = email.indexOf('@');
const result = email.slice(idx + 1);

console.log(email);
console.log(result);
