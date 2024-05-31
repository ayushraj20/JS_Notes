const API_URL = 'https://api.github.com/users/ayushraj20';

async function getData() {
  // fetch returns Response obj(which is a promise) which again returns promise.
  // fetch() => Response.json() => jsonValue.
  const data = await fetch(API_URL);

  const jsonValue = await data.json();

  console.log(jsonValue);
}

// This will only run By creating a node server, Coz fetch function is provided by browser.
