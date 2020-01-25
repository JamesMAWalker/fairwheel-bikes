import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconStyles, ShoppingIconStyles, ItemCount } from './cart-icon.styles';
// import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconStyles className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIconStyles className='shopping-icon' />
        <ItemCount className='item-count'>{itemCount}</ItemCount>
    </CartIconStyles>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStatetoProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(
    mapStatetoProps,
    mapDispatchToProps    
)(CartIcon);