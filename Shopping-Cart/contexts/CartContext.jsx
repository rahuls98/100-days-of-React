import React, { Component, createContext } from "react";

export const CartContext = createContext();

export class CartContextProvider extends Component {
  state = {
    cart: {},
    count: 0
  };

  addItem = (e, { id, title }) => {
    e.preventDefault();
    const { cart, count } = { ...this.state };
    const quantity = (cart[id] === undefined) ? (0 + 1) : (cart[id].quantity + 1);
    cart[id] = { title, quantity };

    this.setState({ cart, count: count + 1 });
  };

  remItem = (e, { id, title }) => {
    e.preventDefault();
    const { cart, count } = { ...this.state };
    if (cart[id] !== undefined) {
      const quantity = (cart[id].quantity === 0) ? 0 : (cart[id].quantity - 1);
      const itemCount = (count === 0) ? 0 : (count - 1);

      if (quantity === 0) delete cart[id];
      else cart[id] = { title, quantity };

      this.setState({ cart, count: itemCount });
    }
  };

  render() {
    return (
      <CartContext.Provider value={{ ...this.state, addItem: this.addItem, remItem: this.remItem }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartContextProvider;
