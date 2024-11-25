import React, {   useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
//import { ShopContext } from '../../context/ShopContext'


export const Navbar = () => {
       const[menu,setMenu]=useState("shop");
       //const[getTotalCartItems]=useContext(ShopContext)
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        
        <img src={logo} alt="" style={{width:'100px',height:'80px'}}/>
        
        <p><b>Fashion Store</b></p>
      </div>
      
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}}to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" style={{width:'40px',height:'40px'}}/></Link>
        <div className="nav-cart-count">0</div>
      </div>
        
    </div>
  )
}

