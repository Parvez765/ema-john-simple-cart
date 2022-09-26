import React from 'react';
import "./Shoe.css"

const Shoe = (props) => {
    const { handleAddToCart, product } = props
    
    const {name, img, category, price, stock} = product
    return (
        <div className='imgContainer'>
            <img src={img} alt=""></img>
            <div className='productInformation'>
                <h4>{name}</h4>
                <p>Catagory: {category}</p>
                <p>Price: ${price}</p>
                <p>Stock: {stock}</p>
            </div>
            <button className='cartBtn' onClick={()=> handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Shoe;