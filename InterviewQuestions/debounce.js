//Implement a normal debouncing.

function debounce(callApi, delay) {
  let id; // using closures
  setTimeout(() => {
    clearTimeout(id);
    callApi();
  }, delay);
}

function callApi() {
  console.log('api is called');
}

debounce(callApi, 5000);
