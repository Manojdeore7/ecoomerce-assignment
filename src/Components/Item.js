import "./Itom.css";

import { NavLink, Link } from "react-router-dom";
function Item(props) {
  let str = `${props.id}`;
  return (
    <div className="col Itom">
      <NavLink to={props.id}>
        <img src={props.image} alt="" />
      </NavLink>
      <h5>{props.title}</h5>
      <h5>{`$${props.price}`}</h5>
      <div>
        <Link to={str} className="btn offset-1">
          view
        </Link>

        <button className="btn  offset-3">AddToCart </button>
      </div>
    </div>
  );
}
export default Item;
