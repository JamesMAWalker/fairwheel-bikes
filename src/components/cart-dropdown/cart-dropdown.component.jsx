import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdown, CartItems, EmptyMessage } from './cart-dropdown.styles';




const CartDropDown = ({ cartItems, history, hidden, dispatch }) => (
    <CartDropdown className="cart-dropdown">
        <CartItems className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : 
                <EmptyMessage className="empty-message">There's nothing here.</EmptyMessage>
            }
        </CartItems>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdown>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
