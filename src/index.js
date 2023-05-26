import { fetchBreeds } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const select = document.querySelector('.breed-select');

fetchBreeds()
  .then(cats => renderNewOption(cats))
  .catch(error => Notify.failure(error));

function renderNewOption(cats) {
  console.log(cats);
  const template = cats
    .map(cat => {
      return `<option value="${cat.id}">"${cat.name}"</option>`;
    })
    .join('');

  select.innerHTML = template;
}