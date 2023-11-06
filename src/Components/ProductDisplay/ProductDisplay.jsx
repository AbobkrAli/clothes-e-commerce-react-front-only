import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/shopContext'
const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart } = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
        </div>
        <div className="product-display-img">
            <img className='productdisplay-main-img' src={product.image} alt="main-product-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1> {product.name} </h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_dull_icon} alt="star dull icon" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia earum possimus sed totam saepe aut. Distinctio saepe accusantium illo, voluptates dolorum in fugiat quis et consequatur iste recusandae alias aspernatur obcaecati consequuntur.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
          <p className="productdisplay-right-category">
            <span>Category : Women, T-shirt, Crop Top</span>
            <span>Tags : Modern, Latest, Crop Top</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
