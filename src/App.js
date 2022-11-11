import React from "react";

import Header from "./components/Header";
import ShowDog from "./components/ShowDog";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />

      <ShowDog />
    </div>
  );
};

export default App;
