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

function fetchCatByBreed2(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/${breedId}`, {
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

export function foo() {
  fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authoryzation: {
        'x-api-key':
          'live_iQojlAhxu6F2966aQMXnuLP4Kw1tkswY3n4RuQZ8iHKUo60sctqec2mX4yYoeDCl',
      },
    },
  })
    .then(response => response.json())
    .then(data => {
      const breedId = data[0].id;
      const referenceImageId = data[0].reference_image_id;

      // Wykonaj kolejne żądanie fetch z użyciem referenceImageId i breedId
      fetch(
        `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&include_breeds=true&include_categories=true`,
        {
          headers: {
            Authoryzation: {
              'x-api-key':
                'live_iQojlAhxu6F2966aQMXnuLP4Kw1tkswY3n4RuQZ8iHKUo60sctqec2mX4yYoeDCl',
            },
          },
        }
      )
        .then(response => response.json())
        .then(catData => {
          // Uzyskaj informacje o kocie
          const catName = catData[0].breed;
          const catImage = catData[0].url;

          // Wyświetl informacje o kocie
          console.log('Name:', catName);
          console.log('Image:', catImage);
        });
    });
}
