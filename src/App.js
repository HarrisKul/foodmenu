import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Meals from './Components/Meals';
import './Components/style.css'


function App() {
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<Meals/>}/>
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
