import { fetchBreeds, fetchCatByBreed, fetchByUniqueId } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

fetchBreeds()
  .then(cats => renderNewOption(cats))
  .catch(error => Notify.failure(error));

select.addEventListener('change', e => {
  fetchCatByBreed(e.target.value)
    .then(cat => generateImage(cat))
    .catch(error => Notify.failure(error));
});

function renderNewOption(cats) {
  console.log(cats);
  const template = cats
    .map(cat => {
      return `<option value="${cat.id}">${cat.name}</option>`;
    })
    .join('');

  select.innerHTML = template;
}

function generateImage(cat) {
  console.log(cat);

  const catImage = cat
    .map(data => {
      console.log(data);
      return `<img class="cat-image" src="${data.url}" width="500px">`;
    })
    .join('');

  catInfo.innerHTML = catImage;

  const newBreedId = cat.map(data => {
    console.log(data.id);
    return data.id;
  });

  return fetch(`https://api.thecatapi.com/v1/images/${newBreedId}`)
    .then(response => {
      if (!response.ok) {
        Notify.failure(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      const name = data.breeds[0].name;
      const description = data.breeds[0].wikipedia_url;
      const temperament = data.breeds[0].temperament;

      console.log('-----------------------');
      console.log('INFO:');
      console.log(name);
      console.log(description);
      console.log(temperament);
      console.log('-----------------------');

      const nameHTML = `<span class="name"><b>${name}</b></span>`;
      const temperamentHTML = `<span class="temperament"><b>Temperament:</b> ${temperament}</span>`;

      catInfo.insertAdjacentHTML('beforeend', nameHTML);
      catInfo.insertAdjacentHTML('beforeend', temperamentHTML);
      return data;
    });
}
