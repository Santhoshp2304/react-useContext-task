import React, { useContext } from "react";
import { CartContext } from "./context/cartContext";
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

      {cart.map((item) => (
        <Card className="m-5 bs">
          <div className="row">
            <div className="col-md-5">
              <img src={item.imgUrl} className="img-fluid m-3" />
            </div>
            <div className="col-md-7 d-flex justify-content-center">
              <ul className="fs-2 ">
                <br />
                <li>
                  <b>Product Name : {item.name}</b>
                  <p>{item.description}</p>
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
                  <b>Rate per peice :</b> Rs.{item.price}
                </li>
                <br />
                <li>
                  <b>Total Amount :</b> Rs.{item.quantity * item.price}
                </li>
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
