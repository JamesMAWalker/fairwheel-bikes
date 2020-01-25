import React from 'react';
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";


import { CartItemSC, ItemDetails, Name } from "./cart-item.styles";


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemSC className="cart-item">
    <img src={imageUrl} alt="cart item image" className="cart-item__img" />
    <ItemDetails className="item-details">
      <Name className="name">{name}</Name>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemSC>
);


export default CartItem;