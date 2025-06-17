import React, { useState } from "react";
import { pizzaCart } from "./pizzas";
import "../Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map(({ id, name, price, count, img }) => (
            <div key={id} className="cart-item">
              <img src={img} alt={name} />
              <div className="cart-item-name">{name}</div>
              <div className="cart-item-price">
                ${price.toLocaleString("es-CL")}
              </div>
              <div className="cart-buttons">
                <button
                  onClick={() => decrease(id)}
                  className="cart-button minus"
                >
                  −
                </button>
                <span className="cart-count">{count}</span>
                <button
                  onClick={() => increase(id)}
                  className="cart-button plus"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h3 className="cart-total">
            Total: ${total.toLocaleString("es-CL")}
          </h3>

          <button
            className="cart-pay-button"
            onClick={() => alert("Pagar funcionalidad próximamente")}
          >
            Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
