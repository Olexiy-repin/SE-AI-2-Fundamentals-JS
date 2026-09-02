/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
TODO: Оброби форму та збережи відгук користувача в об'єкт
*/
const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

console.dir(refs.feedbackForm);

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [refs.feedbackForm.elements.username.name]: refs.feedbackForm.elements.username.value.trim(),
    [refs.feedbackForm.elements.email.name]: refs.feedbackForm.elements.email.value.trim(),
    [refs.feedbackForm.elements.comment.name]: refs.feedbackForm.elements.comment.value.trim(),
  };

  const formDataValuesArr = Object.values(formData);

  if (formDataValuesArr.includes('')) {
    alert('Усі поля обовʼязкові для заповненя!');

    return;
  }

  console.log(formData);
};

refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

// const key = 'email';

// const formData = {
//   [key]: 'test@gmail.com',
// };

// console.log(formData);
