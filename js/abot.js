
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


  import React, { useState, useEffect } from "react";
import "./App.css";
import { Cocktails } from "./components/Cocktails";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCocktails = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
      setLoading(false);
    };

    getCocktails();
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchForm setSearchTerm={setSearchTerm} />
      <Cocktails cocktails={cocktails} loading={loading} />
    </div>
  );
};

export default App;