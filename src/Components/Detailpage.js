import "./Detailpage.css";
import "./Cart.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Detailpage(props) {
  let { useId } = useParams();
  let [data, setData] = useState({
    title: "",
    images: [""],
    price: 90,
    description: "",
  });

  const fetchInfo = () => {
    return axios
      .get("https://dummyjson.com/products")
      .then((response) => setData(response.data.products[useId]));
  };
  useEffect(() => {
    fetchInfo();
  }, [useId,fetchInfo]);

  return (
    <div className="container cart car">
      <div>
        <h1>Detailpage</h1>
      </div>
      <div className="car2">
        <div>
          <img src={data.images[0]} alt="image"></img>
        </div>
        <div>
          <div style={{ fontSize: "25px", color: "black" }}>{data.title}</div>

          <div style={{ fontSize: "20px", color: "red" }}>${data.price}</div>
          <div>{data.description}</div>
          <div>
            <button className="btn btn-danger">BY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailpage;
