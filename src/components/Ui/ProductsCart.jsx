import React from 'react'
import { Col } from 'reactstrap'
import PR1 from '../../assets/products/product1.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
import '../../styles/product_card.css'
import {Link} from 'react-router-dom'



const ProductsList = () => {
  return(
    <Col lg='3' md='4'>
    <div className='product__item'>
        <div className='product__img'>
            <img src={PR1} alt=''/>
        </div>
        <div className='p-2 product__info'>
          <h3 className='product__name'><Link to="/shop/id">Shoes trekking</Link></h3>
          <span>Shoes</span>
        </div>
        <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
            <span className='price'>120euros</span>
            <AiOutlinePlus></AiOutlinePlus>
        </div>

    </div>
    </Col>
  )
}

export default ProductsList
