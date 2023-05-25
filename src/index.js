import { fetchBreeds } from './cat-api';

const select = document.querySelector('.breed-select');

fetchBreeds()
  .then(cats => renderNewOption(cats))
  .catch(error => console.log(error));

function renderNewOption(cats) {
  console.log(cats);
  const template = cats
    .map(cat => {
      return `<option value="${cat.id}">"${cat.name}"</option>`;
    })
    .join('');

  select.innerHTML = template;
}
