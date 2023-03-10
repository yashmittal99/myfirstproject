import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

import './styles/cartitem.scss';
import './styles/navbar.scss';

class App extends React.Component {
  
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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
