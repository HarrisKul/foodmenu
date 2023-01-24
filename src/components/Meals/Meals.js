import React from "react";
import { useState, useEffect } from "react";
import Meal from "../Meal/Meal";
import "./style.css";

const Meals = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [search, setSearch] = useState();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.meals);
        setItem(data.meals);
      });
  }, [url]);

  const searchRecipe = (e) => {
    e.preventDefault();
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Our Food Menu</h1>
          <h4>Search here</h4>
        </div>
        <form onSubmit={(e) => searchRecipe(e)} className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button">Search</button>
        </form>
      </div>

      {item ? (
        <div className="container">
          {item &&
            item.map((item, index) => <Meal item={item} key={item.idMeal} />)}
        </div>
      ) : (
        <h1>Meal not found</h1>
      )}
    </>
  );
};

export default Meals;
