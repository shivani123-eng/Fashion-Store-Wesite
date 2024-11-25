import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { Item } from '../components/Item/Item'





export const ShopCategory = (props) => {
  const {All_Products}=useContext(ShopContext);
  return (
    <>
    <div className='offers'>
        <div className='offers-left'>
          <h1>FLAT 50% OFF</h1>
            
          <p className='font'><span>12</span> Hourse <span>20 </span>Mins</p>
          <button>Explore Now</button>
        </div>
        <div className='offers-right'>
          <img className='shopcategory-banner'src={props.banner}  alt=""  style={{width:"400px",height:"500px"}}/>
        </div>
      </div>
        <div className='shopcategory-indexsort'>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className='shopcategory-sort'>
            Sort by <img src={dropdown_icon} alt="" style={{width:"20px" , height:"10px"}}/>
          </div>
    </div>
    <div className="shopcategory-products">
      {All_Products.map((item,i)=>{
        if (props.category===item.category){
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }

      })}
    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>
    </>
  )
}
