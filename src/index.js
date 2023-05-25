import { fetchBreeds } from './cat-api';

const select = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');

fetchBreeds();
