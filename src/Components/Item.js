import "./Itom.css";

import { NavLink, Link } from "react-router-dom";
function Item(props) {
  let str = `${props.id}`;
  return (
    <div className="col Itom">
      <NavLink to={props.id}>
        <img src={props.image} alt="" />
      </NavLink>
      <h4>{props.title}</h4>
      <h4>{`$${props.price}`}</h4>
      <div>
        <Link to={str} className="btn btn-primary offset-8">
          view
        </Link>

        <button className="btn btn-primary offset-10">AddToCart </button>
      </div>
    </div>
  );
}
export default Item;
