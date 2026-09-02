/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const refs = {
  usernameField: document.querySelector('.js-user-name'),
  policyCheckbox: document.querySelector('.js-policy-checkbox'),
};

/*
TODO: Виводь в консоль все, що користувач вводить в input
*/
// refs.usernameField.addEventListener('input', () => {
//   console.log(refs.usernameField.value);
// });

/*
TODO: Користувач вводить в input своє ім'я, після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */
// refs.usernameField.addEventListener('blur', () => {
//   const usernameValue = refs.usernameField.value.trim();

//   if (usernameValue.length < 2) {
//     alert('Імʼя має складатися мінімум з 2 символів!');

//     return;
//   }

//   alert(`Вітаємо ${usernameValue}!`);
// });

// refs.usernameField.addEventListener('change', () => {
//   console.log('Hello from change handler!');
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/
// refs.policyCheckbox.addEventListener('change', () => {
//   if (refs.policyCheckbox.checked) {
//     alert('Done!');
//   }
// });
