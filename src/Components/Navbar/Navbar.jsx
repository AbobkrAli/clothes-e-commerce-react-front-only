import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/shopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      
        <div className="nav-logo">
        <Link to='/'>
            <img className='logo' src={logo} alt="logo" />
            </Link>
            <p>Cavani</p>
        </div>
      
      <ul className="nav-menu">
        <li
          onClick={() => setMenu('shop')}
          className={menu === 'shop' ? 'active' : ''}
        >
          <Link to="/" style={{textDecoration:'none'}}> Shop</Link>
          <hr />
        </li>
        <li
          onClick={() => setMenu('mens')}
          className={menu === 'mens' ? 'active' : ''}
        >
          <Link to="/mens" style={{textDecoration:'none'}}> Men</Link>
          <hr />
        </li>
        <li
          onClick={() => setMenu('womens')}
          className={menu === 'womens' ? 'active' : ''}
        >
           <Link to="/womens" style={{textDecoration:'none'}}> Women</Link>
          <hr />
        </li>
        <li
          onClick={() => setMenu('kids')}
          className={menu === 'kids' ? 'active' : ''}
        >
           <Link to="/kids" style={{textDecoration:'none'}}> Kids</Link>
          <hr />
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"> <img src={cart_icon} alt="cart icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
