import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const { product } = props;
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="arrow" /> 
      Shop <img src={arrow_icon} alt="arrpw" />
      {product.category} <img src={arrow_icon} alt="arrpw" />
      {product.name} <img src={arrow_icon} alt="arrpw" />
    </div>
  )
}

export default Breadcrum
