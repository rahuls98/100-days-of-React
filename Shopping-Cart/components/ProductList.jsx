import React, { Component } from "react";
import { CartContext } from "../contexts/CartContext";
import { ItemsContext } from "../contexts/ItemsContext";

export class ProductList extends Component {
  static contextType = ItemsContext;

  render() {
    const { items } = this.context;
    return (
      <CartContext.Consumer>
        {(cartContext) => {
          return (
            <div className="product-list-component">
              <h1>Product List</h1>
              <div>
                {items.map((item) => {
                  return (
                    <div key={item.id} className="product-list-item">
                      <span id="product-list-item-info">{item.title}</span>
                      <button id="product-list-item-btn"
                        onClick={(e) => cartContext.addItem(e, { ...item })}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default ProductList;
