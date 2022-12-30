import React from 'react'

const Cartitem = (props) => {
    
  const { price, title, qty }=props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct }=props;
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
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1665/1665680.png" 
            className="icons" 
            alt="increase" 
            onClick={() => onIncreaseQuantity(product)} 
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1665/1665714.png" 
            className="icons" 
            alt="decrease" 
            onClick={() => onDecreaseQuantity(product)} 
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" 
            className="icons" 
            alt="delete" 
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  )

}

export default Cartitem




// first used in setState
    // constructor () {
    //     super();
    //     this.state ={
    //         title: 'Mobile Phone',
    //         price: 14000,
    //         qty: 1,
    //         img: ''
    //     }
    // }
    // increaseQuantity = () => {
      //console.log('this',this.state);
      //setState form 1
      // this.setState({
      //   qty: this.state.qty + 1
      // });
      
      //setStae form 2 - if previous state require this state
    //   this.setState((prevState) => {
    //     return{
    //       qty: prevState.qty + 1
    //     }
    //   });
    // }

    // decreaseQuantity = () => {
    //   const { qty } = this.state;
    //   if(qty === 0){
    //     return;
    //   }
    //   setStae form 2 - if previous state require this state
    //   this.setState((prevState) =>{
    //     return{
    //       qty: prevState.qty - 1
    //     }
    //   });
    // }

    // we are unable to use prevstate funct as we are using now props and we are using state in cart so we can't use state in this jsx file

  // render() {
    // const { price, title, qty }=this.state;
    // as we are using props for multiple value there we have no use 

    