import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../components/Breadcrum/Breadcrum'
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox'
import {RelatedProducts} from '../components/RelatedProducts/RelatedProducts'

export const Product = () => {
  const {All_Products}=useContext(ShopContext)
  const {productId}=useParams();
  const product=All_Products.find((e)=>e.id=== Number(productId))
  return (
    <div >
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      

    </div>
  )
}
