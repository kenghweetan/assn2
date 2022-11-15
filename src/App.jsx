import React from "react";
import Header from "./components/Header";
import "./styles/App.css";
import "./styles/card.css";
import "./styles/pagination.css";
import "./styles/toolTip.css";
import "./styles/loader.css";
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
