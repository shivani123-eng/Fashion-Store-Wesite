import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instragram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" style={{width:"100px", height:"80px"}}/>
            <p>Fashion Store</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-cotainer">
                <img src={instragram_icon} alt="" style={{width:"100px", height:"80px"}}/>
            </div>
            <div className="footer-icon-cotainer">
                <img src={pintester_icon} alt="" style={{width:"100px", height:"80px"}}/>
            </div>
            <div className="footer-icon-cotainer">
                <img src={whatsapp_icon} alt="" style={{width:"100px", height:"80px"}}/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 -All Right Reserved</p>
        </div>

    </div>
  )
}
