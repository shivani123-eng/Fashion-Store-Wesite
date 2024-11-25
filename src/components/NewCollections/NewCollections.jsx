import React from 'react'
import './NewCollections.css'
import New_Collection from '../Assets/New_Collection'
import { Item } from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collection">
            {New_Collection.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}
