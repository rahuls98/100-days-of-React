import React, { Component } from "react";
import { CartContext } from "../contexts/CartContext";

export class Navbar extends Component {
  static contextType = CartContext;

  render() {
    return (
      <div className="navbar-component">
        <p>
          <span>🛒</span>
          <i> ( {this.context.count} )</i>
        </p>
      </div>
    );
  }
}

export default Navbar;
