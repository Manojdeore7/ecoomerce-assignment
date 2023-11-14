import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./Films.css";

function Films() {
  let [productsArr, setUser] = useState([]);
  const fetchInfo = async () => {
    let resp = await fetch("https://swapi.dev/api/films");
    let data = await resp.json();
    setUser(data.results);
  };
  console.log(productsArr);
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="row data">
      <div className="film">Films</div>
      <div className="adjust">
        {productsArr.map((e, i) => {
          return (
            <Item
              key={e.episode_id}
              id={e.episode_id}
              title={e.title}
              director={e.director}
              release_date={e.release_date}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Films;
