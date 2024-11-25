import React from 'react'
import '../Breadcrum/Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { product } from '../../pages/Product';

export const Breadcrum = (props) => {
    const{product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" style={{width:"12px", height:"12px"}}/> SHOP <img src={arrow_icon} alt="" style={{width:"12px", height:"12px"}}/>{product.category} <img src={arrow_icon} alt="" style={{width:"12px", height:"12px"}} />{product.name}

    </div>
  )
}
