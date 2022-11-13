import React, { useState, useEffect } from "react";
import axios from "axios";

const Resource = ({ path, render }) => {
  const initialState = {
    trans: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  const getData = async () => {
    try {
      /* const config = ; */

      console.log(process.env.REACT_APP_APIKEY);
      const result = await axios.get(path, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(" result ", result);

      const newData = {
        trans: [...result.data.message],
        loading: false,
        error: null,
      };

      setState(newData);
    } catch (error) {
      console.log("error in get data", error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{render(state)}</div>;
};

export default Resource;

/* 
data:

breeds: []
height: 480
id: "8la"
url: "https://cdn2.thedogapi.com/images/8la.jpg"
width: 640

*/
