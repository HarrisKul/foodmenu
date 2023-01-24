import { useState } from "react";
import "./style.css";

const Meal = ({ item }) => {
  const [show, setShow] = useState(false);
  const [byCategory, setByCategory] = useState([]);
  const [byArea, setByArea] = useState([]);

  const getByCategory = (category) => {
    if (byCategory.length > 0) return setByCategory([]);

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
      .then((resp) => resp.json())
      .then((resp) => setByCategory(resp.meals.slice(0, 5)));
  };

  const getByArea = (area) => {
    console.log(area);
    if (byArea.length > 0) return setByArea([]);

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area)
      .then((resp) => resp.json())
      .then((resp) => setByArea(resp.meals.slice(0, 3)));
  };

  return (
    <div className="card">
      <h2>{item.strMeal}</h2>
      <h3>Category: {item.strCategory}</h3>
      <h3>Area: {item.strArea}</h3>
      <img src={item.strMealThumb} alt="'meal-img" />
      <button className="card-button" onClick={() => setShow(!show)}>
        View Ingredients
      </button>
      {show && (
        <div className="card-list">
          <h3>Ingredients</h3>
          <ul>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
            <li>{item.strIngredient5}</li>
            <li>{item.strIngredient6}</li>
            <li>{item.strIngredient7}</li>
            <li>{item.strIngredient8}</li>
          </ul>
        </div>
      )}

      <button
        className="card-button"
        onClick={() => getByCategory(item.strCategory)}
      >
        Meals in this category
      </button>

      {byCategory.length > 0 && (
        <div className="card-list">
          <h3>Meals by Category</h3>
          <ul>
            {byCategory.map((data) => (
              <li key={data.idMeal}>{data.strMeal}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="card-button" onClick={() => getByArea(item.strArea)}>
        Meals in this area
      </button>

      {byArea.length > 0 && (
        <div className="card-list">
          <h3>Meals by Area</h3>
          <ul>
            {byArea.map((data) => (
              <li key={data.idMeal}>{data.strMeal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Meal;
