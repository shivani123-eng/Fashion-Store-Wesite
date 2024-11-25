import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate buying
                    and selling of products or services over the internet.It serves as a 
                    virtual marketplace where businesses and individuals can showcase their
                    products, interact with customers, and conduct transactions without 
                    requiring a physical presence.E-Commerce website have gained immense
                    Popularity due to their convenious accessibility, and the global
                    reach they offer.
                </p>
                <p>
                    E-commerce website typically display products or services and detailed
                    descriptions, images, prices, and any available variable(e.g.,sizes,colors).
                    Each product usually has its own dedicated with relevent information
                </p>
            </div>
        </div>

    </div>
  )
}
