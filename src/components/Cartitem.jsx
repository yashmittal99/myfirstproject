import React from 'react'

const Cartitem = () => {
  return (
    <div className='cartitem'>
      <div className="left-block">
        <img alt='sample' style={styles.image} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 45 } }>Phone</div>
        <div style={{ color: '#777' }}>Rs 14000</div>
        <div style={{ color: '#777' }}>Qty: 1</div>
        <div className="cart-action">
          {/* Button */}
        </div>
      </div>
    </div>
  )
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default Cartitem