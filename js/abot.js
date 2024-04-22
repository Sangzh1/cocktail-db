document.addEventListener('DOMContentLoaded', () => {
  getData('a');
});

const articleContainer = document.querySelector('.cocktail-center');
const inputValue = document.querySelector('#input');
const form = document.querySelector('.search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = inputValue?.value || 'a';
  getData(value);
});

function getData(value) {
  console.log(value);
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const newData = data?.drinks;
      articleContainer.innerHTML = ''; // Clear previous results
      if (newData) {
        newData.forEach(drink => {
          articleContainer.innerHTML += `
            <article class="cocktail">
              <div class="img-container">
                <img src=${drink.strDrinkThumb} alt="A1">
              </div>
              <div class="cocktail-footer">
                <h3>${drink.strDrink}</h3>
                <h4>${drink.strGlass}</h4>
                <p>${drink.strAlcoholic}</p>
                <a class="btn btn-primary btn-details" href="../about.html">details</a>
              </div>
            </article>
          `;
        });
      } else {
        articleContainer.innerHTML = '<p>No cocktails found.</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
