import React, { useState } from "react";
import Resource from "./Resource";
import "./card.css";
import DogCard from "./DogCard";
import Loader from "./Loader";
import PaginatedItems from "./Pagination";

const Showdog = () => {
  const webURL = "https://dog.ceo/api/breeds/image/random/60";

  /*   const [isVisible, setIsVisible] = useState(false); */
  const render = (data) => {
    if (data.loading) return;
    <PaginatedItems
      items={Array(60)
        .fill(
          <div className="wrapper">
            <Loader />
          </div>
        )
        .map((loader) => loader)}
      itemsPerPage={6}
    />;
    return (
      <PaginatedItems
        items={data.trans.map((dog) => (
          <div className="wrapper">
            <DogCard dog={dog} />
          </div>
        ))}
        itemsPerPage={6}
      />
    );
    /*     

    console.log("Got the data", data); */

    /*     return data.trans.map((dog) => (
      <div className="wrapper">
        <DogCard dog={dog} />
      </div>
    )); */
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

export default Showdog;
