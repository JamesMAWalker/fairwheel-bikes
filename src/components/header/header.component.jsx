import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/Logo__Abs-Horizontal.svg';
import "./header.styles.scss";


const Header = ({ currentUser, hidden }) => (
  <nav className="header">
    <NavLink to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </NavLink>
    <div className="options">
      <NavLink to="/shop" className="option">
        SHOP
      </NavLink>
      <NavLink to="/" className="option">
        CONTACT
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" to="/signin">
          SIGN IN
        </NavLink>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//   currentUser,
//   hidden
// });

export default connect(mapStateToProps)(Header);
