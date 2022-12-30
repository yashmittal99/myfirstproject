import React from 'react'

const Navbar = (props) => { 
  return (
    <div className='nav'>
      <div className='icon-container'>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144484.png" alt="carticon" className='cart-icon'/>
        <span className="cart-count">{props.count}</span>
      </div>
    </div>
  )
}


export default Navbar