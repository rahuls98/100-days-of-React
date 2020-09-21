import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import ItemsContextProvider from "../contexts/ItemsContext";
import CartContextProvider from "../contexts/CartContext";

class App extends Component {
  render() {
    return (
      <div>
        <ItemsContextProvider>
          <CartContextProvider>
            <Navbar />
            <div className="non-nav">
              <ProductList />
              <Cart />
            </div>
          </CartContextProvider>
        </ItemsContextProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
