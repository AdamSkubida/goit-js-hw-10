import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authoryzation: {
        'x-api-key':
          'live_iQojlAhxu6F2966aQMXnuLP4Kw1tkswY3n4RuQZ8iHKUo60sctqec2mX4yYoeDCl',
      },
    },
  }).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        Authoryzation: {
          'x-api-key':
            'live_iQojlAhxu6F2966aQMXnuLP4Kw1tkswY3n4RuQZ8iHKUo60sctqec2mX4yYoeDCl',
        },
      },
    }
  ).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}
