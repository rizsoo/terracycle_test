import React from 'react'
import './Product.css'

const Product = ({elem}) => {
  return (
    <div className='product'>
        {elem.stock > 2 ? <img src={elem.product} className="three-stock" alt="" /> : null}
        {elem.stock > 1 ? <img src={elem.product} className="two-stock"alt="" /> : null}
        {elem.stock > 0 ? <img src={elem.product} className="one-stock" alt="" /> : null}
        <p>{elem.id}</p>
    </div>
  )
}

export default Product