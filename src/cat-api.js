export function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds')
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
