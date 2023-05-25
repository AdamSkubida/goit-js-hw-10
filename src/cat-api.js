export function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authoryzation: {
        'x-api-key':
          'live_iQojlAhxu6F2966aQMXnuLP4Kw1tkswY3n4RuQZ8iHKUo60sctqec2mX4yYoeDCl',
      },
    },
  })
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

    
}
