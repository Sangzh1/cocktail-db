
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const dataContainer = document.getElementById('data');

    dataContainer.innerHTML = '';
    data.forEach(item => {
      const newItem = document.createElement('p');
      newItem.textContent = item.title; 
      dataContainer.appendChild(newItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
