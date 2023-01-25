// fetch('https://randomuser.me/api/?results=53')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
fetch('https://randomuser.me/api/?results=53')
  .then(response => response.json())
  .then(data => {
    const array = Array.from(data);
    console.log(array);
  });
