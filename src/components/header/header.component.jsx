import React from "react";
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/FWBlogo.svg';
import "./header.styles.scss";


const Header = () => (
    <nav className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <Link className="option">SHOP</Link>
        <Link className="option">CONTACT</Link>
    </nav>
);

export default Header;
