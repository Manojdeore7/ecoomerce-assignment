import "./Header.css";
import { useContext } from "react";
import image from "./img/image6.png";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="row Header ">
      <img src={image} />

      <input placeholder="Search" />
    </div>
  );
}
export default Header;
