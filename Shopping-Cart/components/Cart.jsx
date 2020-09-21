import React, { Component } from "react";
import { CartContext } from "../contexts/CartContext";

export class Cart extends Component {
  static contextType = CartContext;

  itemStyle = {
    padding: "20px 40px 20px 40px",
    fontSize: "1.5vw"
  }
  itemQuantityStyle = {
    border: "gainsboro solid 1px",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "15px",
    marginRight: "20px",
  }

  render() {
    const { cart, remItem } = this.context;
    const n = Object.keys(cart).length;
    return (
      <div className="cart-component">
        <h1>Cart</h1>
        {
          Object.keys(cart).map((item, index) => {
            let style;
            if (index === (n - 1)) style = { ...this.itemStyle, borderBottom: "none" }
            else style = { ...this.itemStyle, borderBottom: "gainsboro solid 1px" }

            return (
              <div key={item} className="cart-item" style={style}>
                <span id="cart-item-title"> {cart[item].title + "  "} </span>
                <span id="cart-item-quantity" style={this.itemQuantityStyle}> ✕{cart[item].quantity} </span>
                <button id="cart-item-btn"
                  onClick={(e) => remItem(e, { id: item, title: cart[item].title })}
                  style={{ float: "right" }}>
                  <i className="fa fa-minus"></i>
                </button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Cart;
