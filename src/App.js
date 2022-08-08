import React, { useState } from "react";
import "./App.css";
import { MyContext } from "./components/Context/MyContext";
import Header from "./components/Header/Header";
import styled from "styled-components";

function App() {
  const [next, setNext] = useState(false);

  function handChange() {
    setNext(!next);
  }

  return (
    <MyContext.Provider value={{ next, handChange }}>
      <div className="App">
        <Header />
      </div>
    </MyContext.Provider>
  );
}

export default App;


