import React, { useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';
import "./Shoes.css"

const Shoes = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    
    const [cart, setCart] = useState([])

    let [cartPrice, setCartPrice] = useState(0)

    let [shippingCharge, setShippingCharge] = useState(0)

    let [tax, setTax] = useState(0)
    

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)

        let newCartPrice = parseInt(cartPrice) + product.price
        setCartPrice(newCartPrice)
        // console.log(cartPrice)`

        if (cartPrice >= 1000) {
            let updatedShippingChage = shippingCharge + 5
            setShippingCharge(parseInt(updatedShippingChage))
            console.log(typeof shippingCharge)
        }

        if (cartPrice >= 1000) {
            let updatedTax = parseInt((cartPrice / 100) * 2)
            setTax(updatedTax)
        }
        
    }

    const handleClearCart = (product) => {
        setCart([])
        setCartPrice([0])
        setTax([])
        setShippingCharge([])
    }
    
    return (
        <div  className='shopContainer'>
            <div className='productContainer'>
            {
                    products.map(product => <Shoe
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                    ></Shoe>)
            }
            </div>
            <div className='cartContainer'> 
                <h2>Order Summery</h2>
                <h4>Selected Item: {cart.length}</h4>
                <h4>Total Price: ${cartPrice}</h4>
                <h4>Shipping Charge: ${shippingCharge}</h4>
                <h4>Tax: ${tax}</h4>
                <h4>Grand Total: ${cartPrice + shippingCharge + tax}</h4>
                <button className='clearBtn' onClick={() => handleClearCart()}>Clear Cart</button>
                
                
            </div>
        </div>
    );
};

export default Shoes;