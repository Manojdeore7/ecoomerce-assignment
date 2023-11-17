import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./Items.css";

//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   },

//   {
//     title: "Blue Color",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   },
// ];

function Items() {
  let [productsArr, setUser] = useState([]);
  const fetchInfo = () => {
    return axios
      .get("https://dummyjson.com/products")
      .then((response) => setUser(response.data.products));
  };
  console.log(productsArr);
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="row data">
      <div className="col-12 music">Products</div>

      <div className="row row-cols-2 adjust">
        {productsArr.map((e, i) => {
          return (
            <Item
              key={i}
              id={i}
              title={e.title}
              price={e.price}
              image={e.images[0]}
              inedx={i}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Items;
