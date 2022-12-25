import React, { Component } from 'react'
import Cartitem from './Cartitem'

class Cart extends Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    title: 'Mobile Phone',
                    price: 14000,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 999,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 28000,
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products: products
            //we can use products single because the key and value have the same name
            products
        })
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;

        this.setState({
            // products: products
            //we can use products single because the key and value have the same name
            products
        })

    }
    handleDeleteProduct = (id) => {
        const { products } = this.state

        const items = products.filter((item) => item.id !== id); //[{}]

        this.setState({
            products: items
        })
    }

  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => {
            return ( 
                <Cartitem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />
            )
        })}
      </div>
    );
  }
}

export default Cart