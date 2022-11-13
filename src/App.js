import React from "react";
import Header from "./components/Header";
import "./App.css";
import Showdog from "./components/ShowDog";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Showdog />
    </div>
  );
};

export default App;
