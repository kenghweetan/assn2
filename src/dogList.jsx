import react, { useState, useEffect } from "react";
import axios from "axios";
import "./resList.css";

const DogList = () => {
  const [search, setSearch] = useState("");
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const config = {
        headers: {
          "x-api-key":
            "live_y1uQvIhPpmj0A4DUec3iiGO1imkPDaaZvcUttwInK3080b46EUU5CwbDTdXrTY8q",
        },
      };
      try {
      const results = await axios.get(
        "https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc",
        config
      );
      } catch (error) {
        console.log(error);
      }
      setDogs(results.data);
      console.log(results);
    };
    getDogs();
  }, []);

  return (
    <div className="resList">
      {dogs.map((dog) => {
        return <img src={dog?.url} />;
      })}
    </div>
  );
};

export default DogList;
