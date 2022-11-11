import React from "react";

import Resource from "./Resource";
import "./card.css";

const Showdog = () => {
  const webURL =
    "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=25";

  const [toolTipState]
  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return data.trans.map((dog) => (
      <div className="card" onMouseOut={} key={dog.id}>
        <div className="card-content">
          <div className="card-front">
            <img className="image" src={dog.url} alt="dog img" />
          </div>
          <div className="card-back">
            <h1>
              {`Hi, I'm 
              ${dog.breeds[0].name.match(/^[aeiouAEIOU]/gm) ? "an" : "a"}
              ${dog.breeds[0].name}`}
            </h1>
            <p>{`I am ${dog.breeds[0].temperament}`}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
      <div>ToolTip</div>
    </div>
  );
};

export default Showdog;
