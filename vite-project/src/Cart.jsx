import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Card } from "react-bootstrap";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-center mt-1">Shopping Cart</h1>
      <div className="d-flex justify-content-center fs-1 m-5">
        <b>Total Cart Amount :</b> ${totalAmount.toFixed(2)}
      </div>
      {cart.map((item) => (
        <Card className="m-5 bs">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img src={item.thumbnail} className="img-fluid m-3" />
            </div>
            <div className="col-md-7 d-flex justify-content-center">
              <ul className="fs-2 ">
                <br />
                <li>
                  <b>Product Name : {item.title}</b>
                </li>
                <br />
                <li>
                  <b> Quantity :</b>{" "}
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span> {item.quantity} </span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </li>
                <br />
                <li>
                  <b>Rate :</b> ${item.price}
                </li>
                <br />
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
