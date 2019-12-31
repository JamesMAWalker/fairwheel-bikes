import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/FWBlogo.svg';
import "./header.styles.scss";


const Header = ({ currentUser }) => (
  <nav className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/" className="option">
        SHOP
      </Link>
      <Link to="/" className="option">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut() }>SIGN OUT</div>
        : 
        <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </nav>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
