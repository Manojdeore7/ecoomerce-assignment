import "./Header.css";
import { useContext } from "react";
import image from "./img/image6.png";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="row Header ">
<<<<<<< HEAD
      <div className="col-2 ">
        <Link className=" ram1 ram" to="/">
          E_buy
        </Link>
      </div>
      <div className="col-6 ">
        <Link className="ram" to="/">
          Store
        </Link>
      </div>

      <div className="col-2 ram3 ">
        <Link className="ram">Login</Link>
      </div>

      <div className="col-1  ">
        <Link className="ram" to="/cart">
          Cart(1)
        </Link>
      </div>
=======
      <img src={image} />

      <input placeholder="Search" />
>>>>>>> df6400d7de0caef9d032317a420e2f8339589ff4
    </div>
  );
}
export default Header;
