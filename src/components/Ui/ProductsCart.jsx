import React from 'react'
import { Col } from 'reactstrap'

import {AiOutlinePlus} from 'react-icons/ai'
import '../../styles/product_card.css'
import {Link} from 'react-router-dom'



const ProductsCart = ({item}) => {
  return(
    <Col lg='3' md='4'>
    <div className='product__item'>
        <div className='product__img'>
            <img src={item.imgUrl} alt=''/>
        </div>
        <div className='p-2 product__info'>
          <h3 className='product__name'>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
            <span className='price'>{item.price}</span>
            <AiOutlinePlus></AiOutlinePlus>
        </div>

    </div>
    </Col>
  )
}

export default ProductsCart
