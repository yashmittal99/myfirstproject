import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='icon-container'>
          <img src="https://cdn-icons-png.flaticon.com/512/3144/3144484.png" alt="carticon" className='cart-icon'/>
          <span className="cart-count">3</span>
        </div>
      </div>
    )
  }
}

export default Navbar