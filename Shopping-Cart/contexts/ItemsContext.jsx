import React, { Component, createContext } from "react";

export const ItemsContext = createContext();

export class ItemsContextProvider extends Component {
  state = {
    items: [
      {
        id: "ID_01",
        title: "👕 T-Shirt",
      },
      {
        id: "ID_02",
        title: "🩳 Shorts",
      },
      {
        id: "ID_03",
        title: "👟 Sneakers",
      },
    ],
  };

  render() {
    return (
      <ItemsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ItemsContext.Provider>
    );
  }
}

export default ItemsContextProvider;
