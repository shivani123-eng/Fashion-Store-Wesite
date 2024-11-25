import React from 'react'
import './Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"


export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" style={{width:'70px',height:'70px'}}/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
           <div className="hero-latest-btn">
            <div>Lastest collections</div>
            <img src={arrow_icon} alt=""/>

           </div>
           
        </div>
       <div className='hero-right'></div> 
       <img src={hero_image}alt="" style={{ width:'600px',height:'500px'}}/>
    </div>
  )
}
