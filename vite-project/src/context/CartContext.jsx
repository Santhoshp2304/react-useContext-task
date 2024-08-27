import react, { useState, createContext, children } from "react";

//create context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      imgUrl:
        "https://i5.walmartimages.com/asr/69056846-b8a1-497a-b4f5-6172ab54b35d.a2102861007e11c433c127f2b63b038a.jpeg",
      name: "HP Laptop",
      description:"HP Laptop 14-Dq2031tg - Intel Core I3 Win 10 Home in 4 Gb Ram - 128 Gb SSD Natural Silver",
      price: 30000,
      quantity: 1,
    },
  ]);
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <CartContext.Provider
      value={{
        cart,
        increaseQuantity,
        decreaseQuantity,
        totalAmount,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
