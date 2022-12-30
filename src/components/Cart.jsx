import React from 'react'
import Cartitem from './Cartitem'

const Cart = (props) => {
    // we are removing state from this to cart because we want state access in navbar

    const { products } = props;
    return (
      <div className='cart'>
        {products.map((product) => {
            return ( 
                <Cartitem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                />
            )
        })}
      </div>
    );
  
}

export default Cart