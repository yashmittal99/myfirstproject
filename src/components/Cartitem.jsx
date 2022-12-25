import React, { Component } from 'react'

export class Cartitem extends Component {
  
    constructor () {
        super();
        this.state ={
            title: 'Mobile Phone',
            price: 1400,
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
      console.log('this',this.state);
    }

  render() {
    const { price, title, qty }=this.state;
    return (
        <div className='cartitem'>
        <div className="left-block">
          <img alt='' className="images" />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={{ color: '#777' }}>Rs {price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-action">
            {/* Button */}
            <img src="https://cdn-icons-png.flaticon.com/512/1665/1665680.png" className="icons" alt="increase" onClick={this.increaseQuantity} />
            <img src="https://cdn-icons-png.flaticon.com/512/1665/1665714.png" className="icons" alt="decrease" />
            <img src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" className="icons" alt="delete" />
          </div>
        </div>
      </div>
    )
  }
}

export default Cartitem