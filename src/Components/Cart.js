import "./Cart.css";

function Cart(props) {
  return (
    <div className="container cart car">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div className="car8">
        <div>
          <img
            className="img"
            src="https://i.dummyjson.com/data/products/30/1.jpg"
              alt="Items"
          ></img>
        </div>
        <div>Key Holder</div>
        <div>
          <input></input>
        </div>
        <div>$499.00</div>
        <div className="col-2">
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
      <div className="car3">
        <button className="btn ">Procide To Pay</button>
      </div>
    </div>
  );
}
export default Cart;
