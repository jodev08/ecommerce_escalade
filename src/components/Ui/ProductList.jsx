import React from 'react'
import ProductsCart from './ProductsCart'

const ProductList = ({data}) => {
  return (
    <>
        {
        
        data.map((item) => (
          <ProductsCart item={item} />
        ))}
      
    </>
  );
};

export default ProductList
