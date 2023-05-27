import { fetchBreeds, fetchCatByBreed, foo } from './cat-api';
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
      return `<img src="${data.url}" width="500px">`;
    })
    .join('');

  catInfo.innerHTML = catImage;
}

// {"id":"gCEFbK7in","url":"https://cdn2.thecatapi.com/images/gCEFbK7in.jpg","breeds":[{"weight":{"imperial":"7  -  10","metric":"3 - 5"},"id":"abys","name":"Abyssinian","cfa_url":"http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx","vetstreet_url":"http://www.vetstreet.com/cats/abyssinian","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian","temperament":"Active, Energetic, Independent, Intelligent, Gentle","origin":"Egypt","country_codes":"EG","country_code":"EG","description":"The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.","life_span":"14 - 15","indoor":0,"lap":1,"alt_names":"","adaptability":5,"affection_level":5,"child_friendly":3,"dog_friendly":4,"energy_level":5,"grooming":1,"health_issues":2,"intelligence":5,"shedding_level":2,"social_needs":5,"stranger_friendly":5,"vocalisation":1,"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)","hypoallergenic":0,"reference_image_id":"0XYvRd7oD"}],"width":1424,"height":987}

foo();
