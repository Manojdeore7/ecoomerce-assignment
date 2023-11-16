import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./People.css";

function Films() {
  let [productsArr, setUser] = useState([]);

  const fetchInfo = async () => {
    let resp = await fetch(`https://swapi.dev/api/people`);
    let data = await resp.json();
    setUser(data.results);
  };
  console.log(productsArr);
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="row data">
      <div className="film">People</div>
      <div className="adjust">
        {productsArr.map((e, i) => {
          return (
            <Item
              key={e.i}
              id={e.i}
              title={e.name}
              director={e.mas}
              release_date={e.gender}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Films;
