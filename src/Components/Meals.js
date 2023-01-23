import React from "react";
import { useState, useEffect } from "react";

const Meals = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            console.log(data.meals);
            setItem(data.meals);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

return (
    <>
    <div className="main">
        <div className="heading">
                <h1>Our Food Menu</h1>
                <h4>Search here</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} />
                <button className="search-button" onClick={searchRecipe}>Search</button>
            </div>

            <div className="container">
                {item && item.map((item,index)=>(
                    <div className="card" key={index}>
                        <h2>{item.strMeal}</h2>
                        <h3>Category: {item.strCategory}</h3>
                        <h3>Area: {item.strArea}</h3>
                        <img src={item.strMealThumb} alt="'meal-img" />
                        
                        <button className="card-button" onClick={()=>setShow(!show)}>View Ingredients</button>
                        {show && 
                        
                        <div className="ingredients">
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

                        </div>}
            </div>
                ))}
            </div>

        </div>
        {/* <div className="index">
            <button onClick={()=>setIndex("a")}>A</button>
            <button onClick={()=>setIndex("b")}>B</button>
            <button onClick={()=>setIndex("c")}>C</button>
            <button onClick={()=>setIndex("d")}>D</button>
            <button onClick={()=>setIndex("e")}>E</button>
            <button onClick={()=>setIndex("f")}>F</button>
            <button onClick={()=>setIndex("g")}>G</button>
            <button onClick={()=>setIndex("h")}>H</button>
            <button onClick={()=>setIndex("i")}>I</button>
            <button onClick={()=>setIndex("j")}>J</button>
            <button onClick={()=>setIndex("k")}>K</button>
            <button onClick={()=>setIndex("l")}>L</button>
            <button onClick={()=>setIndex("m")}>M</button>
            <button onClick={()=>setIndex("n")}>N</button>
            <button onClick={()=>setIndex("o")}>O</button>
            <button onClick={()=>setIndex("p")}>P</button>
            <button onClick={()=>setIndex("q")}>Q</button>
            <button onClick={()=>setIndex("r")}>R</button>
            <button onClick={()=>setIndex("s")}>S</button>
            <button onClick={()=>setIndex("t")}>T</button>
            <button onClick={()=>setIndex("u")}>U</button>
            <button onClick={()=>setIndex("v")}>V</button>
            <button onClick={()=>setIndex("w")}>W</button>
            <button onClick={()=>setIndex("x")}>X</button>
            <button onClick={()=>setIndex("y")}>Y</button>
            <button onClick={()=>setIndex("z")}>Z</button>
        </div> */}
    </>
)
}
export default Meals;
