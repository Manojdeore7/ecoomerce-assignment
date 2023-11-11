import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="row Header ">
      <div className="col-6 col-6">
        <Link className="ram" to="/">
          E_com
        </Link>
      </div>
      <div className="col-1 ">
        <Link className="ram" to="/">
          Store
        </Link>
      </div>

      <div div className="col-1 ram">
        <p>Login</p>
      </div>

      <div div className="col-1">
        <Link className="ram" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
}
export default Header;
